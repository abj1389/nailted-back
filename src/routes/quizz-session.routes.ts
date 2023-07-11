/**
 * @swagger
 * definitions:
 *   Quizz:
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
 *   name: Quizz Sessions
 *   description: API para gestionar sesiones de cuestionarios
 *
 * /quizz-session:
 *   post:
 *     tags:
 *       - Quizz Sessions
 *     description: Crea un nuevo cuestionario
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: quizz
 *         description: Objeto de cuestionario
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Quizz'
 *     responses:
 *       201:
 *         description: Creado exitosamente
 *
 * /quizz-session/{id}:
 *   get:
 *     tags:
 *       - Quizz Sessions
 *     description: Obtiene un cuestionario por su ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID del cuestionario
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Éxito en la obtención del cuestionario
 *       404:
 *         description: No se encontró el cuestionario
 *
 * /quizz-session/{id}/results:
 *   get:
 *     tags:
 *       - Quizz Sessions
 *     description: Obtiene los resultados de un cuestionario por su ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID del cuestionario
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Éxito en la obtención de los resultados del cuestionario
 *       404:
 *         description: No se encontraron resultados para el cuestionario
 *
 * /quizz-session/email/{email}:
 *   get:
 *     tags:
 *       - Quizz Sessions
 *     description: Obtiene un cuestionario por correo electrónico
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Correo electrónico asociado al cuestionario
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Éxito en la obtención del cuestionario
 *       404:
 *         description: No se encontró el cuestionario
 *
 *   put:
 *     tags:
 *       - Quizz Sessions
 *     description: Actualiza un cuestionario existente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID del cuestionario
 *         in: path
 *         required: true
 *         type: string
 *       - name: quizz
 *         description: Objeto de cuestionario que se debe actualizar
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Quizz'
 *     responses:
 *       200:
 *         description: Actualizado exitosamente
 *       404:
 *         description: No se encontró el cuestionario para actualizar
 *
 * /quizz-session/send-results:
 *   post:
 *     tags:
 *       - Quizz Sessions
 *     description: Envía los resultados del cuestionario por correo electrónico
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: recipient
 *         description: Destinatario del correo electrónico
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             recipient:
 *               type: string
 *     responses:
 *       200:
 *         description: Éxito en el envío del correo electrónico
 *       500:
 *         description: Error al enviar el correo electrónico
 */

import express from "express";
import { quizzSessionService } from "../domain/services/quizz-session.service";

export const quizzSessionRouter = express.Router();

quizzSessionRouter.post("/", quizzSessionService.createQuizz);
quizzSessionRouter.put("/:id", quizzSessionService.updateQuizz);
quizzSessionRouter.get("/email/:email", quizzSessionService.getQuizzByEmail);
quizzSessionRouter.get("/results", quizzSessionService.getQuizzResults);
quizzSessionRouter.get("/:id", quizzSessionService.getQuizzById);
quizzSessionRouter.post("/send-results", quizzSessionService.sendMail);
