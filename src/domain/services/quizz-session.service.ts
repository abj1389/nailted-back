import { Request, Response, NextFunction } from "express";
import { quizzOdm } from "../odm/quizz-session.odm";
import { quizzOdmMock } from "../odm/quizz-session.odm.mock";
import { responseOdm } from "../odm/response.odm";
import { sendResultsMail } from "../../utils/sendEmail";

export const createQuizz = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdResponse = await quizzOdm.createQuizz(req.body);
    res.status(201).json(createdResponse);
  } catch (error) {
    next(error);
  }
};

// Quizz por ID bueno
// export const getQuizzById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const id = req.params.id;
//     const response = await quizzOdm.getQuizzById(id);
//     if (!response) {
//       res.status(404).json({ error: "No existe el quizz solicitado" });
//       return;
//     }
//     res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// Quizz por ID mock
export const getQuizzById = (req: Request, res: Response, next: NextFunction): any => {
  try {
    console.log("Esta entrando");
    const response = quizzOdmMock.getQuizzById;
    if (!response) {
      res.status(404).json({ error: "No existe el quizz solicitado" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getQuizzResults = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const response = await quizzOdm.getQuizzResults(id);
    if (!response) {
      res.status(404).json({ error: "No existe el quizz solicitado" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getQuizzByEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const email = req.params.email;
    const response = await quizzOdm.getQuizzByEmail(email);
    if (!response) {
      res.status(404).json({ error: "No existe la respuesta" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateQuizz = async (req: Request, res: Response, next: NextFunction): Promise<string> => {
  try {
    const updateQuizzId = req.params.id;

    const quizzToUpdate = await quizzOdm.getQuizzById(updateQuizzId);
    if (!quizzToUpdate) {
      res.status(404).json({ error: "No existe la respuesta para actualizar" });
      return "";
    }
    const response = req.body.response;
    if (!response) {
      res.status(400).json({ error: "No ha pasado la respuesta para actualizar" });
      return "";
    }
    const responseToAdd = await responseOdm.createResponse(response);
    quizzToUpdate.toObject().response?.push(responseToAdd.id);
    // const quizzUpdated = quizzOdm.updateQuizz(updateQuizzId, quizzToUpdate);
    // res.json(quizzUpdated);
  } catch (error) {
    next(error);
  }
  return "aqui va dato fake";
};

export const sendMail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log("Send Email in action");
  const { recipient } = req.body;

  try {
    await sendResultsMail(recipient);
    res.status(200).json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
};

export const quizzSessionService = {
  createQuizz,
  getQuizzById,
  updateQuizz,
  getQuizzByEmail,
  getQuizzResults,
  sendMail,
};
