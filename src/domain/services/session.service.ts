import { Request, Response, NextFunction } from "express";
import { sessionOdm } from "../odm/session-odm";
import { responseOdm } from "../odm/response.odm";
import { sendResultsMail } from "../../utils/sendEmail";

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
    const id = req.params.id;
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

export const getSessionResults = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const token = req.params.token;
    if (!token) {
      const results = await sessionOdm.getSessionResults(id);
      if (!results) {
        res.status(404).json({ error: "No existe el session solicitado" });
      }
    }

    // res.status(200).json(results);
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
  const { recipient } = req.body;

  try {
    await sendResultsMail(recipient);
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
};
