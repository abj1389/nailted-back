import { Request, Response, NextFunction } from "express";
import { responseOdm } from "../odm/response.odm";
import { IResponseCreate } from "../entities/response-entity";
import { sessionOdm } from "../odm/session-odm";
import { questionOdm } from "../odm/question.odm";
import { sessionService } from "./session.service";
// import { questionOdm } from "../odm/question.odm";

export const createResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.body.idSession) {
      console.log(req.body.idSession);
      res.status(400).json({ error: "No has pasado el ID de la session" });
      return;
    }
    const currentSession = await sessionOdm.getSessionById(req.body.idSession);
    if (!currentSession) {
      res.status(404).json({ error: "No existe la session para actualizar" });
      return;
    }
    const data: IResponseCreate = {
      session: currentSession.id,
      dateResponded: new Date(),
      ...req.body,
    };
    const createdResponse = await responseOdm.createResponse(data);
    const totalQuestions = await questionOdm.getQuestionsByVersion(currentSession.toObject().version);
    const totalResponses = await responseOdm.getResponsesBySession(currentSession.id);
    // totalQuestions.length !== totalResponses.length
    if (totalQuestions) {
      await sessionService.calculateResults({ totalQuestions, totalResponses });
    }
    res.status(201).json(createdResponse);
  } catch (error) {
    next(error);
  }
};

export const getResponseById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const response = await responseOdm.getResponseById(id);
    if (!response) {
      res.status(404).json({ error: "No existe la respuesta" });
      return;
    }
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const updateResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateResponseId = req.params.id;

    const responseToUpdate = await responseOdm.getResponseById(updateResponseId);
    if (!responseToUpdate) {
      res.status(404).json({ error: "No existe la respuesta para actualizar" });
      return;
    }

    // const currentData = {
    //   text: responseToUpdate.get("text"),
    //   dateResponded: responseToUpdate.get("dateResponded"),
    //   numeric: responseToUpdate.get("numeric"),
    //   optionSelected: responseToUpdate.get("optionSelected"),
    // };

    const responseUpdated = await responseOdm.updateResponse(updateResponseId, { ...req.body });

    res.status(201).json(responseUpdated);
  } catch (error) {
    next(error);
  }
};

export const responseService = {
  createResponse,
  getResponseById,
  updateResponse,
};
