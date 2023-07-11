import { IQuizzSessionCreate, QuizzSession, IQuizzSession } from "../entities/quizz-session-entity";
import { Document } from "mongoose";

const createQuizz = async (quizzData: IQuizzSessionCreate): Promise<Document<IQuizzSession>> => {
  const quizz = new QuizzSession(quizzData);
  const document: Document<IQuizzSession> = (await quizz.save()) as any;
  const quizzCopy = document.toObject();
  return quizzCopy;
};

const updateQuizz = async (id: string, quizzData: IQuizzSessionCreate): Promise<Document<IQuizzSession> | null> => {
  return await QuizzSession.findByIdAndUpdate(id, quizzData, { new: true, runValidators: true });
};

const getQuizzById = async (id: string): Promise<Document<IQuizzSession> | null> => {
  return await QuizzSession.findById(id).populate(["response", "categoryScore.category"]);
};

const getQuizzResults = async (id: string): Promise<object> => {
  const quizz = await QuizzSession.findById(id).populate(["categoryScore.category"]);
  return { globalScore: quizz?.toObject().globalScore as any, categoryScore: quizz?.toObject().categoryScore };
};

const getQuizzByEmail = async (email: string): Promise<Document<IQuizzSession> | null> => {
  return await QuizzSession.findOne({ email }).populate(["response", "categoryScore.category"]);
};

export const quizzOdm = {
  createQuizz,
  updateQuizz,
  getQuizzById,
  getQuizzResults,
  getQuizzByEmail,
};
