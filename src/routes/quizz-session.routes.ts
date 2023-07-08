import express from "express";
import { quizzService } from "../domain/services/quizz.service";

export const quizzSessionRouter = express.Router();

quizzSessionRouter.post("/", quizzService.createQuizz);
quizzSessionRouter.put("/:id", quizzService.updateQuizz);
quizzSessionRouter.get("/email/:email", quizzService.getQuizzByEmail);
quizzSessionRouter.get("/:id", quizzService.getQuizzById);
quizzSessionRouter.get("/results", quizzService.getQuizzResults);

/**
 * @swagger
 * tags:
 *   name: Quizz Session
 *   description: API for managing quizz sessions
 *
 * /quizz-sessions:
 *   post:
 *     summary: Create a new quizz session
 *     tags: [Quizz Session]
 *     responses:
 *       200:
 *         description: Quizz session created successfully
 *
 * /quizz-sessions/{id}:
 *   put:
 *     summary: Update a quizz session by ID
 *     tags: [Quizz Session]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quizz session
 *     responses:
 *       200:
 *         description: Quizz session updated successfully
 *
 * /quizz-sessions/email/{email}:
 *   get:
 *     summary: Get a quizz session by email
 *     tags: [Quizz Session]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email of the user
 *     responses:
 *       200:
 *         description: Quizz session retrieved successfully
 *
 * /quizz-sessions/{id}:
 *   get:
 *     summary: Get a quizz session by ID
 *     tags: [Quizz Session]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quizz session
 *     responses:
 *       200:
 *         description: Quizz session retrieved successfully
 *
 * /quizz-sessions/results:
 *   get:
 *     summary: Get quizz session results
 *     tags: [Quizz Session]
 *     responses:
 *       200:
 *         description: Quizz session results retrieved successfully
 *
 */
