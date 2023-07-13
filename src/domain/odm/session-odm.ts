import { ISessionCreate, Session, ISession } from "../entities/session-entity";
import { Document } from "mongoose";

const createSession = async (sessionData: ISessionCreate): Promise<Document<ISession>> => {
  const session = new Session(sessionData);
  const document: Document<ISession> = (await session.save()) as any;
  const sessionCopy = document.toObject();
  return sessionCopy;
};

const updateSession = async (id: string, sessionData: ISessionCreate): Promise<Document<ISession> | null> => {
  return await Session.findByIdAndUpdate(id, sessionData, { new: true, runValidators: true });
};

const getSessionById = async (id: string): Promise<Document<ISession> | null> => {
  return await Session.findById(id).populate(["categoryScore.category"]);
};

const getSessionResults = async (id: string): Promise<object> => {
  const session = await Session.findById(id).populate(["categoryScore.category"]);
  return { globalScore: session?.toObject().globalScore as any, categoryScore: session?.toObject().categoryScore };
};

const getSessionByEmail = async (email: string): Promise<Document<ISession> | null> => {
  return await Session.findOne({ email }).populate(["categoryScore.category"]);
};

export const sessionOdm = {
  createSession,
  updateSession,
  getSessionById,
  getSessionResults,
  getSessionByEmail,
};
