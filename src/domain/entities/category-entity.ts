/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la categoría.
 *         calification:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la calificación.
 *               min:
 *                 type: number
 *                 description: Valor mínimo de la calificación.
 *               max:
 *                 type: number
 *                 description: Valor máximo de la calificación.
 *               tip:
 *                 type: string
 *                 description: Consejo relacionado con la calificación.
 *       required:
 *         - name
 */

import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface ICategoryCreate {
  name: string;
  calification: [
    {
      name: string;
      min: number;
      max: number;
      tip: string;
    }
  ];
}

const categorySchema = new Schema<ICategoryCreate>(
  {
    name: {
      type: String,
      trim: true,
      unique: true, // indica que no puede haber otra entidad con esta propiedad que tenga el mismo valor.
      required: true,
    },
    calification: {
      type: [
        {
          name: {
            type: String,
            trim: true,
            unique: true,
            required: true,
          },
          min: {
            type: Number,
            required: true,
          },
          max: {
            type: Number,
            required: true,
          },
          tip: {
            type: String,
            trim: true,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true } // Cada vez que se modifique un documento refleja la hora y fecha de modificación
);

// Creamos tipos para categorias
export type ICategory = ICategoryCreate & Document;
// Creamos un modelo para que siempre que creamos una categoria valide contra el Schema que hemos creado para ver si es valido.
export const Category = mongoose.model<ICategoryCreate>("Category", categorySchema);
