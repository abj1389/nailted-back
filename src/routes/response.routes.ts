import express from "express";
import { responseService } from "../domain/services/response.service";

export const responseRouter = express.Router();

responseRouter.post("/", responseService.createResponse);
responseRouter.put("/:id", responseService.updateResponse);

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
