import mongoose from "mongoose";
import { mongoConnect } from "../src/domain/repositories/mongo-repository";
import { app } from "../src/server/index";
import { appInstance } from "../src/index";
import { IResponseCreate } from "../src/domain/entities/response-entity";
import request from "supertest";
import { VARIANT } from "../src/domain/entities/question-entity";

describe("Response Controler", () => {
  const responseMoc: IResponseCreate = {
    question: {
      questionText: "¿por que soy una pregunta?",
      options: [
        {
          optionText: "soy una opción",
          score: 7,
        },
      ],
      selectedNumber: {
        min: 1,
        max: 100,
        multiplier: 2,
        isInverseScore: true,
      },
      category: {
        name: "Finanzas",
        mark: [
          {
            name: "Finanzas",
            min: 1,
            max: 10,
            tip: "Debes mejorar chaval",
          },
        ],
      } as any,
      variant: VARIANT.MULTI_OPTION,
      version: 2,
    } as any,
    session: {
      email: "adrian.rojas@example.com",
      globalScore: 42,
      categoryScore: [
        {
          category: "Finanzas" as any,
          score: 60,
        },
      ],
      version: 42,
    } as any,
    optionSelected: [
      {
        score: 9,
        optionText: "Soy la opcion",
      },
    ],
    dateResponded: new Date(),
    numeric: 1,
  };

  let createdResponseId: string;

  // Antes de hacer los tests:
  beforeAll(async () => {
    await mongoConnect();
  });
  // Cuando acaben los test:
  afterAll(async () => {
    await mongoose.connection.close();
    appInstance.close();
  });

  it("POST /response", async () => {
    const response = await request(app).post("/response").set("Accept", "application/json").send(responseMoc).expect(201);

    expect(response.body).toHaveProperty("_id");
    createdResponseId = response.body._id;
  });
  it("PUT /response/:id", async () => {
    const response = await request(app).put(`/response/${createdResponseId}`).send(responseMoc);
    expect(response.statusCode).toBe(200);
  });
});
