/**
 * @swagger
 * components:
 *   schemas:
 *     QuizzCreate:
 *       type: object
 *       required:
 *         - email
 *         - globalScore
 *         - categoryScore
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
 *     QuizzSessionCreate:
 *       $ref: "#/components/schemas/QuizzCreate"
 *     QuizzSession:
 *       $ref: "#/components/schemas/Quizz"
 */

import mongoose, { Document } from "mongoose";
import validator from "validator";
import { Category, ICategory } from "./category-entity";

const Schema = mongoose.Schema;

export interface IQuizzSessionCreate {
  email: string;
  globalScore: number;
  categoryScore: [{
    category?: ICategory;
    score: number;
  }];
  version: number;
}

const quizzSchema = new Schema<IQuizzSessionCreate>(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      validate: {
        validator: (text: string) => validator.isEmail(text),
        message: "Email incorrecto",
      },
      required: true,
    },
    globalScore: {
      type: Number,
      min: 1,
      max: 100,
      required: true,
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
          required: true,
        },
      },
    ],
    version: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

// Creamos tipos para usuarios
export type IQuizzSession = IQuizzSessionCreate & Document;
// Creamos un modelo para que siempre que creamos un quizz valide contra el Schema que hemos creado para ver si es valido.
export const QuizzSession = mongoose.model<IQuizzSessionCreate>("Quizz", quizzSchema);
