import { IQuizzCreate, Quizz, IQuizz } from "../entities/quizz-session-entity";
import { Document } from "mongoose";

const createQuizz = async (quizzData: IQuizzCreate): Promise<Document<IQuizz>> => {
  const quizz = new Quizz(quizzData);
  const document: Document<IQuizz> = (await quizz.save()) as any;
  const quizzCopy = document.toObject();
  return quizzCopy;
};

const updateQuizz = async (id: string, quizzData: IQuizzCreate): Promise<Document<IQuizz> | null> => {
  return await Quizz.findByIdAndUpdate(id, quizzData, { new: true, runValidators: true });
};

const getQuizzById = async (id: string): Promise<Document<IQuizz> | null> => {
  return await Quizz.findById(id).populate(["response", "categoryScore.category"]);
};

const getQuizzResults = async (id: string): Promise<object> => {
  const quizz = await Quizz.findById(id).populate(["categoryScore.category"]);
  return { globalScore: quizz?.toObject().globalScore as any, categoryScore: quizz?.toObject().categoryScore };
};

const getQuizzByEmail = async (email: string): Promise<Document<IQuizz> | null> => {
  return await Quizz.findOne({ email }).populate(["response", "categoryScore.category"]);
};

export const quizzOdm = {
  createQuizz,
  updateQuizz,
  getQuizzById,
  getQuizzResults,
  getQuizzByEmail,
};
