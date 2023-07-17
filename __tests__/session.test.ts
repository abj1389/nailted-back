import mongoose from "mongoose"
import { mongoConnect } from "../src/domain/repositories/mongo-repository"
import { app } from "../src/server/index"
import { appInstance } from "../src/index"
import { ISessionCreate } from "../src/domain/entities/session-entity"
import request from "supertest"

describe("User Controler", () => {
  const sessionMoc: ISessionCreate = {
    email: "adrian.rojas@example.com",
    globalScore: 42,
    categoryScore: [{
      category: {
        name: "Finanzas",
        mark: [
          {
            name: "Finanzas",
            min: 1,
            max: 10,
            tip: "Debes mejorar chaval",
          }
        ],
      } as any,
      score: 60,
    }],
    version: 42,
  }

  let emailToken: string
  let token: string
  let createdSessionId: string

  // Antes de hacer los tests:
  beforeAll(async () => {
    await mongoConnect()
  });
  // Cuando acaben los test:
  afterAll(async () => {
    await mongoose.connection.close()
    appInstance.close()
  });

  it("POST /session", async() => {
    const response = await request(app)
      .post("/session")
      .set("Accept", "application/json")
      .send(sessionMoc)
      .expect(201)

    expect(response.body).toHaveProperty("_id")
    expect(response.body.email).toBe(sessionMoc.email)
    createdSessionId = response.body._id
  })
  it("GET /session/:id", async () => {
    const response = await request(app)
      .get(`/session/${createdSessionId}`)
      .expect(200)
    expect(response.body.globalScore).toBeDefined()
    expect(response.body.categoryScore).toBeDefined()
    expect(response.body.version).toBeDefined()
  })
  it("PUT /session/:id", async() => {
    const response = await request(app)
      .put(`/session/${createdSessionId}`)
      .send(sessionMoc)
    expect(response.statusCode).toBe(201);
  })
  it("GET /session/email/:email", async () => {
    await request(app)
      .get(`/session/email/${createdSessionId}`)
      .expect(401)
    const emailResponse = await request(app)
      .get(`/session/email/${createdSessionId}`)
      .set("Authorization", `Bearer ${emailToken}`)
      .expect(200)
    expect(emailResponse.body.email).toBeDefined()
  })
  it("GET /session/:id/results/:token", async () => {
    const resultsResponse = await request(app)
      .get(`/session/${createdSessionId}/results/${token}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    expect(resultsResponse.body).toHaveProperty("_id")
    expect(resultsResponse.body).toHaveProperty("token")
  })
  it("POST /session/send-results", async() => {
    const response = await request(app)
      .post("/session/send-results")
      .set("Accept", "application/json")
      .send(sessionMoc)
      .expect(201)

    expect(response.body).toHaveProperty(response.body.email)
    expect(response.body.email).toBe(sessionMoc.email)
  })
})
