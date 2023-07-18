/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Request, Response, NextFunction } from "express";
import { sessionOdm } from "../odm/session-odm";
import { responseOdm } from "../odm/response.odm";
import { sendResultsMail } from "../../utils/sendEmail";
import { IQuestion } from "../entities/question-entity";
import { IResponse } from "../entities/response-entity";
import { ISession } from "../entities/session-entity";

export const createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.body.version) {
      res.status(400).json({ error: "Se necesita la version de las preguntas." });
      return;
    }
    const createdSession = await sessionOdm.createSession({ version: parseInt(req.body.version) });
    res.status(201).json(createdSession);
  } catch (error) {
    next(error);
  }
};

export const getSessionById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.body.id;
    const response = await sessionOdm.getSessionById(id);
    if (!response) {
      res.status(404).json({ error: "No existe el session solicitado" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const totalScore = (questions: IQuestion[]): number => {
  let sum: number = 0;
  questions.forEach((question: IQuestion) => {
    let singleValue: number = 0;
    let multiValue: number = 0;
    let numericValue: number = 0;
    if (question.variant === "SINGLE_OPTION") {
      singleValue = question.options
        ? question.options
            .map((option) => {
              return option.score;
            })
            .reduce((a, b) => (a > b ? a : b))
        : 0;
    }
    if (question.variant === "MULTI_OPTION") {
      const initialValue = 0;
      multiValue = question.options
        ? question.options
            .map((option) => {
              return option.score;
            })
            .reduce((a, b) => a + b, initialValue)
        : 0;
    }
    if (question.variant === "NUMERIC" && question.selectedNumber) {
      numericValue = question.selectedNumber.max * question.selectedNumber.multiplier;
    }
    sum += singleValue + multiValue + numericValue;
  });
  return sum;
};

const scoreEarned = (responses: IResponse[]): number => {
  let score: number = 0;
  responses.forEach((response: IResponse) => {
    if ((response.question as unknown as IQuestion).variant === "SINGLE_OPTION") {
      const option = (response.question as unknown as IQuestion).options?.find((option: any) => option.id === (response.optionSelected?.[0] as unknown as IResponse).id);
      score += option?.score ? option?.score : 0;
    } else if ((response.question as unknown as IQuestion).variant === "MULTI_OPTION") {
      // Sumar los puntajes de todas las opciones seleccionadas
      score +=
        response.optionSelected?.reduce((sum, selectedOption) => {
          const option = (response.question as unknown as IQuestion).options?.find((option: any) => option.id === (selectedOption as unknown as IResponse).id);
          return sum + (option?.score ? option?.score : 0);
        }, 0) ?? 0;
    } else if ((response.question as unknown as IQuestion).variant === "NUMERIC") {
      score += response.numeric ? response.numeric : 0;
    }
  });
  return score;
};

export const calculateResults = async (totalQuestions: IQuestion[], totalResponses: IResponse[], session: any): Promise<ISession | null> => {
  console.log("scoreEarned:", scoreEarned(totalResponses));
  console.log("totalScore:", totalScore(totalQuestions));
  const globalScore = (scoreEarned(totalResponses) / totalScore(totalQuestions)) * 100;
  const data = {
    ...session._doc,
    globalScore: parseInt(globalScore.toFixed(2)),
  };
  const prueba = await sessionOdm.updateSession(session.id, data);
  return prueba as any;
};

export const getSessionResults = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const token = req.params.token;
    if (token === "token") {
      const results = await sessionOdm.getSessionResults(id);
      if (!results) {
        res.status(404).json({ error: "No existe el session solicitado" });
      }
      res.status(200).json(results);
    }
  } catch (error) {
    next(error);
  }
};

export const getSessionByEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const email = req.params.email;
    const response = await sessionOdm.getSessionByEmail(email);
    if (!response) {
      res.status(404).json({ error: "No existe la respuesta" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateSessionId = req.params.id;

    const sessionToUpdate = await sessionOdm.getSessionById(updateSessionId);
    if (!sessionToUpdate) {
      res.status(404).json({ error: "No existe la respuesta para actualizar" });
      return;
    }
    const response = req.body.response;
    if (!response) {
      res.status(400).json({ error: "No ha pasado la respuesta para actualizar" });
      return;
    }
    const responseToAdd = await responseOdm.createResponse(response);
    sessionToUpdate.toObject().response?.push(responseToAdd.id);
    // const sessionUpdated = sessionOdm.updateSession(updateSessionId, sessionToUpdate);
    // res.json(sessionUpdated);
  } catch (error) {
    next(error);
  }
};

export const sendMail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log("Send Email in action");
  const sessionId = req.params.id;
  const { recipient, dataResults } = req.body;

  try {
    const session = await sessionOdm.getSessionById(sessionId);
    if (!session) {
      res.status(404).json({ error: "Session not found" });
      return;
    }
    await sessionOdm.updateSession(session.id, { ...session, email: recipient });
    await sendResultsMail(recipient, dataResults);
    res.status(200).json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
};

export const sessionService = {
  createSession,
  getSessionById,
  updateSession,
  getSessionByEmail,
  getSessionResults,
  sendMail,
  calculateResults,
};
