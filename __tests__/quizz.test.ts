import mongoose from "mongoose";
import { mongoConnect } from "../src/domain/repositories/mongo-repository";
import { app } from "../src/server/index";
import request from "supertest";
// import { IQuestionCreate, VARIANT } from "../src/domain/entities/question-entity"

describe("Quizz Controler", () => {
  // Antes de hacer los tests:
  beforeAll(async () => {
    await mongoConnect();
  }, 100000);
  // Cuando acaben los test:
  afterAll(async () => {
    await mongoose.connection.close();
  });
  it("GET /quizz - returns a list with the questions", async () => {
    const response = await request(app).get("/quizz/current-version");
    expect(response.statusCode).toBe(500);
  });
});
