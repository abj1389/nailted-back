import express from "express";
import { questionService } from "../domain/services/question.service";

export const questionRouter = express.Router();

questionRouter.get("/", questionService.getCurrentQuestions);

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
 *   description: API for managing responses
 *
 * /response:
 *   post:
 *     tags:
 *       - Responses
 *     description: Creates a new response
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: response
 *         description: Response object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Response'
 *     responses:
 *       201:
 *         description: Successfully created
 *
 *   put:
 *     tags:
 *       - Responses
 *     description: Update an existing response
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Response ID
 *         in: path
 *         required: true
 *         type: string
 *       - name: response
 *         description: Response object that needs to be updated
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Response'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       404:
 *         description: No response found to update
 */
