/**
 * @swagger
 * components:
 *   schemas:
 *     QuizzCreate:
 *       type: object
 *       required:
 *         - version
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
 *         - $ref: "#/components/schemas/SessionCreate"
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
 *     SessionCreate:
 *       $ref: "#/components/schemas/SessionCreate"
 *     Session:
 *       $ref: "#/components/schemas/Quizz"
 */

import mongoose, { Document } from "mongoose";
import validator from "validator";
import { Category, ICategory } from "./category-entity";

const Schema = mongoose.Schema;

export interface ISessionCreate {
  email?: string;
  globalScore?: number;
  categoryScore?: [
    {
      category?: ICategory;
      score: number;
    }
  ];
  version: number;
}

const sessionSchema = new Schema<ISessionCreate>(
  {
    email: {
      type: String,
      trim: true,
      unique: false,
      validate: {
        validator: (text: string) => validator.isEmail(text),
        message: "Email incorrecto",
      },
    },
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
        },
      },
    ],
    version: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Creamos tipos para usuarios
export type ISession = ISessionCreate & Document;
// Creamos un modelo para que siempre que creamos una session valide contra el Schema que hemos creado para ver si es valido.
export const Session = mongoose.model<ISessionCreate>("Session", sessionSchema);
