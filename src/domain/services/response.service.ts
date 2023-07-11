import { Request, Response, NextFunction } from "express";
import { responseOdm } from "../odm/response.odm";

export const createResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdResponse = await responseOdm.createResponse(req.body);
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

    const currentData = {
      text: responseToUpdate.get("text"),
      dateResponded: responseToUpdate.get("dateResponded"),
      numeric: responseToUpdate.get("numeric)"),
      optionSelected: responseToUpdate.get("optionSelected"),
    };
    const responseUpdated = await responseOdm.updateResponse(updateResponseId, { ...req.body, ...currentData });
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
