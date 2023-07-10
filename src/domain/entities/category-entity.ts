/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre de la categoría.
 *         mark:
 *           type: array
 *           description: Lista de marcas.
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la marca.
 *               min:
 *                 type: number
 *                 description: Valor mínimo.
 *               max:
 *                 type: number
 *                 description: Valor máximo.
 *               tip:
 *                 type: string
 *                 description: Información adicional.
 */

import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface ICategoryCreate {
  name: string;
  mark: [
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
    mark: {
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
