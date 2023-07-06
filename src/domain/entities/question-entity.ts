/**
 * @swagger
 * components:
 *   schemas:
 *     Response:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - rol
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario.
 *         firstName:
 *           type: string
 *           description: Nombre del usuario.
 *           minLength: 3
 *           maxLength: 22
 *         lastName:
 *           type: string
 *           description: Apellido del usuario.
 *           minLength: 3
 *           maxLength: 22
 *         email:
 *           type: string
 *           description: Email del usuario.
 *           format: email
 *         password:
 *           type: string
 *           description: Contraseña del usuario.
 *           minLength: 8
 *         rol:
 *           type: string
 *           description: Rol del usuario.
 *           enum:
 *             - PLAYER
 *             - MANAGER
 *             - ADMIN
 *         team:
 *           type: string
 *           description: ID del equipo al que pertenece el usuario.
 *         image:
 *           type: string
 *           description: URL de la imagen del usuario.
 *       example:
 *         _id: 60c84e71ebeb8f001ff60999
 *         firstName: John
 *         lastName: Doe
 *         email: john.doe@example.com
 *         password: [hidden]
 *         rol: PLAYER
 *         team: 60c84e71ebeb8f001ff60998
 *         image: https://example.com/johndoe.png
 */

import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export enum VARIANT {
  SINGLE_OPTION = "SINGLE_OPTION",
  MULTI_OPTION = "MULTI_OPTION",
  NUMERIC = "NUMERIC",
  TEXT_SHORT = "TEXT_SHORT",
  TEXT_LONG = "TEXT_LONG"
}

export interface IQuestionCreate {
  questionText: string;
  options: [
    {
      optionText: string;
      score: number;
    }
  ];
  selectedNumber: {
    min: number;
    max: number;
    multiplier: number;
    isInverseScore: boolean;
    category: ICategoryCreate;
    type: VARIANT;
    version: number;
  };
}

const questionSchema = new Schema<IQuestionCreate>(
  {
    questionText: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          optionText: {
            type: String,
          },
        },
      ],
    },
    selectedNumber: {
      type: {
        min: {
          type: Number,
        },
        max: {
          type: Number,
        },
        multiplier: {
          type: Number,
        },
        isInverseScore: {
          type: Boolean,
        }
      }
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    variant: {
      type: VARIANT,
    },
    version: {
      type: Number,
    }
  },
  { timestamps: true } // Cada vez que se modifique un documento refleja la hora y fecha de modificación
);

export type IQuestion = IQuestionCreate & Document;
export const Question = mongoose.model<IQuestionCreate>("Question", questionSchema);
