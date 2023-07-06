/**
 * @swagger
 * components:
 *   schemas:
 *     QuizzCreate:
 *       type: object
 *       required:
 *         - email
 *         - globalScore
 *       properties:
 *         email:
 *           type: string
 *           description: Email del usuario.
 *           format: email
 *         response:
 *           type: array
 *           description: Respuestas del cuestionario.
 *           items:
 *             $ref: "#/components/schemas/Response"
 *         globalScore:
 *           type: number
 *           description: Puntaje global del cuestionario.
 *           minimum: 1
 *           maximum: 100
 *         categoryScore:
 *           type: array
 *           description: Puntajes por categoría.
 *           items:
 *             $ref: "#/components/schemas/CategoryScore"
 *     Quizz:
 *       allOf:
 *         - $ref: "#/components/schemas/QuizzCreate"
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: ID del cuestionario.
 *           required:
 *             - _id
 *     Response:
 *       type: object
 *       properties:
 *         // Define las propiedades de la entidad "Response" aquí
 *     CategoryScore:
 *       type: object
 *       properties:
 *         category:
 *           $ref: "#/components/schemas/Category"
 *         score:
 *           type: number
 *           description: Puntaje de la categoría.
 *           minimum: 1
 *           maximum: 100
 *     Category:
 *       // Define the properties of the "Category" entity here
 */

import mongoose, { Document } from "mongoose";
import validator from "validator";
import { IResponse } from "./response-entity";
import { Category, ICategory } from "./category-entity";

const Schema = mongoose.Schema;

export interface IQuizzCreate {
  email: string;
  response?: IResponse[];
  globalScore: number;
  categoryScore: [{
    category?: ICategory;
    score: number;
  }];
}

const quizzSchema = new Schema<IQuizzCreate>(
  {
    email: {
      type: String,
      trim: true,
      unique: true, // indica que no puede haber otra entidad con esta propiedad que tenga el mismo valor.
      validate: {
        validator: (text: string) => validator.isEmail(text),
        message: "Email incorrecto",
      },
      response: [
        {
          type: Schema.Types.ObjectId,
          ref: Response,
        },
      ],
      globalScore: {
        type: Number,
        min: 1,
        max: 100,
      },
      categoryScore: [
        {
          category: {
            type: Schema.Types.ObjectId,
            ref: Category,
          },
          score: {
            type: Number,
            min: 1,
            max: 100,
          }
        }
      ],
      required: true,
    },
  },
  { timestamps: true } // Cada vez que se modifique un documento refleja la hora y fecha de modificación
);

// Creamos tipos para usuarios
export type IQuizz = IQuizzCreate & Document;
// Creamos un modelo para que siempre que creamos un quizz valide contra el Schema que hemos creado para ver si es valido.
export const Quizz = mongoose.model<IQuizzCreate>("Quizz", quizzSchema);
