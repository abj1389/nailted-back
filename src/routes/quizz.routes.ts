import express from "express";
import { quizzService } from "../domain/services/quizz.service";

export const quizzRouter = express.Router();

quizzRouter.post("/", quizzService.createQuizz);
quizzRouter.put("/:id", quizzService.updateQuizz);
quizzRouter.get("/email/:email", quizzService.getQuizzByEmail);
quizzRouter.get("/:id", quizzService.getQuizzById);
quizzRouter.get("/results", quizzService.getQuizzResults);

// TO DO: Swagger

/**
 * @swagger
 * definitions:
 *   Response:
 *     properties:
 *       id:
 *         type: string
 *       text:
 *         type: string
 *       dateResponded:
 *         type: string
 *       numeric:
 *         type: number
 *       optionSelected:
 *         type: string
 *
 * tags:
 *   name: Responses
 *   description: API for managing quizzs
 *
 * /quizz:
 *   post:
 *     tags:
 *       - Responses
 *     description: Creates a new quizz
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: quizz
 *         description: Response object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Response'
 *     quizzs:
 *       201:
 *         description: Successfully created
 *
 *   put:
 *     tags:
 *       - Responses
 *     description: Update an existing quizz
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Response ID
 *         in: path
 *         required: true
 *         type: string
 *       - name: quizz
 *         description: Response object that needs to be updated
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Response'
 *     quizzs:
 *       200:
 *         description: Successfully updated
 *       404:
 *         description: No quizz found to update
 */
