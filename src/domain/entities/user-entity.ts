/**
 * @swagger
 * components:
 *   schemas:
 *     User:
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
import validator from "validator";

const Schema = mongoose.Schema;

export enum ROL {
  PLAYER = "PLAYER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

export interface IUserCreate {
  email: string;
}

const userSchema = new Schema<IUserCreate>(
  {
    email: {
      type: String,
      trim: true,
      unique: true, // indica que no puede haber otra entidad con esta propiedad que tenga el mismo valor.
      validate: {
        validator: (text: string) => validator.isEmail(text),
        message: "Email incorrecto",
      },
      required: true,
    },
  },
  { timestamps: true } // Cada vez que se modifique un documento refleja la hora y fecha de modificación
);

// Creamos tipos para usuarios
export type IUser = IUserCreate & Document;
// Creamos un modelo para que siempre que creamos un user valide contra el Schema que hemos creado para ver si es valido.
export const User = mongoose.model<IUserCreate>("User", userSchema);
