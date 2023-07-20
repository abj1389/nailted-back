/**
 * @swagger
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Correo electrónico de la sesión.
 *         globalScore:
 *           type: number
 *           minimum: 1
 *           maximum: 100
 *           description: Puntuación global de la sesión.
 *         categoryScore:
 *           type: array
 *           description: Puntuación por categoría.
 *           items:
 *             type: object
 *             properties:
 *               category:
 *                 $ref: '#/components/schemas/Category'
 *                 description: Categoría de la puntuación.
 *               score:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 100
 *                 description: Puntuación de la categoría.
 *         version:
 *           type: number
 *           description: Versión de la sesión.
 *           required: true
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
      validate: {
        validator: (text: string) => validator.isEmail(text),
        message: "Email incorrecto",
      },
    },
    globalScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    categoryScore: [
      {
        category: {
          type: mongoose.Types.ObjectId,
          ref: Category,
        },
        score: {
          type: Number,
          min: 0,
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

export type ISession = ISessionCreate & Document;
export const Session = mongoose.model<ISessionCreate>("Session", sessionSchema);
