import { mongoConnect, mongoDisconnect } from "../repositories/mongo-repository";
import { deleteResponses } from "./deleteResponses";

const seedQuestion = async (): Promise<void> => {
  try {
    console.log("                                              ");
    console.log("----------------------------------------------");
    console.log("--------------- DELETE RESPONSE ---------------");
    console.log("----------------------------------------------");
    console.log("                                              ");
    await mongoConnect();
    await deleteResponses();
  } catch (error) {
    console.error(error);
  } finally {
    await mongoDisconnect();
    console.log("                                              ");
    console.log("----------------------------------------------");
    console.log("-------------- PROCESO TERMINADO -------------");
    console.log("----------------------------------------------");
    console.log("                                              ");
  }
};

void seedQuestion();
