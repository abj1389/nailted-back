/**
 * @swagger
 * definitions:
 *   Session:
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
 *   name: Session Sessions
 *   description: API para gestionar sesiones de cuestionarios
 *
 * /quizz-session:
 *   post:
 *     tags:
 *       - Session Sessions
 *     description: Crea un nuevo cuestionario
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: quizz
 *         description: Objeto de cuestionario
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Session'
 *     responses:
 *       201:
 *         description: Creado exitosamente
 *
 * /quizz-session/{id}:
 *   get:
 *     tags:
 *       - Session Sessions
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
 *       - Session Sessions
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
 *       - Session Sessions
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
 *       - Session Sessions
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
 *           $ref: '#/definitions/Session'
 *     responses:
 *       200:
 *         description: Actualizado exitosamente
 *       404:
 *         description: No se encontró el cuestionario para actualizar
 *
 * /quizz-session/send-results:
 *   post:
 *     tags:
 *       - Session Sessions
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
import { sessionService } from "../domain/services/session.service";

export const sessionRouter = express.Router();

sessionRouter.post("/", sessionService.createSession);
sessionRouter.put("/:id", sessionService.updateSession);
sessionRouter.get("/email/:email", sessionService.getSessionByEmail);
sessionRouter.get("/results", sessionService.getSessionResults);
sessionRouter.get("/:id", sessionService.getSessionById);
sessionRouter.post("/send-results", sessionService.sendMail);
