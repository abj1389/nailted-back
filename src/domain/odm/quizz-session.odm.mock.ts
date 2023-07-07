import { responseList } from "../../data";
import { Quizz, IQuizz } from "../entities/quizz-session-entity";
// import { IQuizzCreate, Quizz, IQuizz } from "../entities/quizz-session-entity";
// import { Document } from "mongoose";
// import { IResponse } from "../entities/response-entity";

// const createQuizz = async (quizzData: IQuizzCreate): Promise<Document<IQuizz>> => {
//   const quizz = new Quizz(quizzData);
//   const document: Document<IQuizz> = (await quizz.save()) as any;
//   const quizzCopy = document.toObject();
//   return quizzCopy;
// };

// const updateQuizz = async (id: string, quizzData: IQuizzCreate): Promise<Document<IQuizz> | null> => {
//   return await Quizz.findByIdAndUpdate(id, quizzData, { new: true, runValidators: true });
// };

const getQuizzById = (id: string): IQuizz => {
  let allResponsesScoreSum: number = 0;

  responseList.forEach(response => {
    response.optionSelected.forEach(option => {
      allResponsesScoreSum += option?.score;
    });
  });

  const selectedQuizz = new Quizz({
    _id: "SelectedQuizzId",
    email: "any@email.com",
    response: [responseList],
    globalScore: allResponsesScoreSum,
    categoryScore: [{

    }]
  });

  return selectedQuizz;
};

// const getQuizzResults = async (id: string): Promise<object> => {
//   const quizz = await Quizz.findById(id).populate(["categoryScore.category"]);
//   return { globalScore: quizz?.toObject().globalScore as any, categoryScore: quizz?.toObject().categoryScore };
// };

// const getQuizzByEmail = async (email: string): Promise<Document<IQuizz> | null> => {
//   return await Quizz.findOne({ email }).populate(["response", "categoryScore.category"]);
// };

export const quizzOdmMock = {
  // createQuizz,
  // updateQuizz,
  getQuizzById,
  // getQuizzResults,
  // getQuizzByEmail,
};
