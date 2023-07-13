import { Question } from "../entities/question-entity";

async function getCurrentVersionQuestions(): Promise<any> {
  try {
    const questions = await Question.find().populate("category");

    console.log("Esto trae");
    console.log(questions);

    const max: any = questions?.reduce((a, b): any => {
      return a.version > b.version ? a.version : b.version;
    });

    const lastVersionQuestions: any = questions.filter((question) => question.version === max);

    return lastVersionQuestions;
  } catch (error) {
    console.error("Error while retrieving questions: ", error);
    throw error;
  }
}

export const questionOdm = {
  getCurrentVersionQuestions,
};
