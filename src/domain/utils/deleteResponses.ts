import { Response } from "../entities/response-entity";

export const deleteResponses = async (): Promise<void> => {
  try {
    await Response.collection.drop();
    console.log("Borradas responses");
  } catch (error) {
    console.error(error);
  }
};
