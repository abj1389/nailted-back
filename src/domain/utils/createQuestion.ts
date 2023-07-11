import { questionList } from "../../data";
import { Question } from "../entities/question-entity";

export const createQuestion = async (): Promise<void> => {
  try {
    await Question.collection.drop(); //  Esperamos a que borre los documentos de la colección question de la BBDD.
    console.log("Borradas questions");
    const documents = questionList.map((question) => new Question(question));
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      await document.save();
    }
    console.log("Creados users correctamente");
  } catch (error) {
    //  Si hay error lanzamos el error por consola.
    console.error(error);
  }
};
