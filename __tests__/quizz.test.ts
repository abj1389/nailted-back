import mongoose from "mongoose"
import { mongoConnect } from "../src/domain/repositories/mongo-repository"
import { app } from "../src/server/index"
import { appInstance } from "../src/index"
import request from "supertest"
// import { IQuestionCreate, VARIANT } from "../src/domain/entities/question-entity"

describe("Quizz Controler", () => {
  // const quizzMoc: IQuestionCreate = {
  //   questionText: "¿por que soy una pregunta?",
  //   options: [{
  //     optionText: "soy una opción",
  //     score: 7,
  //   }],
  //   selectedNumber: {
  //     min: 1,
  //     max: 100,
  //     multiplier: 2,
  //     isInverseScore: true,
  //   },
  //   category: {
  //     name: "Finanzas",
  //     mark: [
  //       {
  //         name: "Finanzas",
  //         min: 1,
  //         max: 10,
  //         tip: "Debes mejorar chaval",
  //       }
  //     ],
  //   } as any,
  //   variant: VARIANT.MULTI_OPTION,
  //   version: 2,
  // }
  // Antes de hacer los tests:
  beforeAll(async () => {
    await mongoConnect()
  });
  // Cuando acaben los test:
  afterAll(async () => {
    await mongoose.connection.close()
    appInstance.close()
  });
  it("GET /quizz - returns a list with the users", async () => {
    const response = await request(app)
      .get("/quizz/current-version")
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBe(1);
    expect(response.body.totalItems).toBe(1);
    expect(response.body.totalPages).toBe(1);
    expect(response.body.currentPage).toBe(1);
  });
})
