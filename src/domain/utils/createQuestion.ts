import { questionList } from "../../data";
import { questionOdm } from "../odm/question.odm";

export const createQuestion = async (): Promise<void> => {
  try {
    await questionOdm.getCurrentVersionQuestions();
    console.log("Creados questions correctamente");
    console.log({ questions: questionList.length });
  } catch (error) {
    console.error(error);
  }
};
