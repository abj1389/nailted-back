import { Request, Response, NextFunction } from "express";
import { responseOdm } from "../odm/response.odm";
import { IResponseCreate } from "../entities/response-entity";
import { sessionOdm } from "../odm/session-odm";

export const createResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.params.idSession) {
      return;
    }

    const currentSession = await sessionOdm.getSessionById(req.params.idSession);

    if (!currentSession) {
      return;
    }

    const data: IResponseCreate = {
      question: req.body.question,
      session: currentSession.id,
      text: req.body.text,
      optionSelected: req.body.optionSelected,
      dateResponded: req.body.dateResponded,
      numeric: req.body.numeric,
    };

    const createdResponse = await responseOdm.createResponse(data);
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
    res.json(response);
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

    const newText = req.params.id === updateResponseId && req.body.text ? req.body.text : responseToUpdate.get("text");
    const newDateResponded = req.params.id === updateResponseId && req.body.dateResponded ? req.body.dateResponded : responseToUpdate.get("dateResponded");
    const newNumeric = req.params.id === updateResponseId && req.body.numeric ? req.body.numeric : responseToUpdate.get("numeric");
    const newOptionSelected = req.params.id === updateResponseId && req.body.optionSelected ? req.body.optionSelected : responseToUpdate.get("optionSelected");
    const responseSended = { ...req.body, text: newText, dateResponded: newDateResponded, numeric: newNumeric, optionSelected: newOptionSelected };
    const responseUpdated = await responseOdm.updateResponse(updateResponseId, responseSended);
    res.json(responseUpdated);
  } catch (error) {
    next(error);
  }
};

export const responseService = {
  createResponse,
  getResponseById,
  updateResponse,
};
