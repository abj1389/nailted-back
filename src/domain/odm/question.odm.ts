import { IQuestion, Question } from "../entities/question-entity";

async function getCurrentVersionQuestions(): Promise<IQuestion[]> {
  try {
    // Busqueda de la version mas reciente
    const latestVersion = await Question.findOne({}, {}, { sort: { version: -1 } });

    // Si no se encuentran preguntas
    if (!latestVersion) {
      return [];
    }

    // Encuentra las preguntas que se corresponden con la última versión
    const questions = await Question.find({ version: latestVersion.version });

    // Ordena las preguntas por nombre de la categoria
    questions.sort((a, b) => a.category.name.localeCompare(b.category.name));

    return questions;
  } catch (error) {
    console.error("Error while retrieving questions: ", error);
    throw error;
  }
}

export const questionOdm = {
  getCurrentVersionQuestions,
};
