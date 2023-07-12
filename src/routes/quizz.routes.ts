import express from "express";
import { questionService } from "../domain/services/question.service";
import { sessionService } from "../domain/services/session.service";

export const quizzRouter = express.Router();

quizzRouter.get("/current-version", questionService.getCurrentQuestions);
quizzRouter.post(":version/session", sessionService.createSession);

/**
 * @swagger
 * definitions:
 *   Question:
 *     properties:
 *       id:
 *         type: string
 *       questionText:
 *         type: string
 *       options:
 *         type: string
 *       selectedNumber:
 *         type: number
 *       category:
 *         type: string
 *       variant:
 *         type: string
 *       version:
 *         type: number
 *
 * tags:
 *   name: Questions
 *   description: API for managing questions
 *
 * /question:
 *   get:
 *     tags:
 *       - Questions
 *     description: Get a new response
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question
 *         description: Question object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Question'
 *     responses:
 *       201:
 *         description: Successfully created
 *
 */
