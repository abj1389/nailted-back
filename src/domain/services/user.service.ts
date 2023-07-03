import { Request, Response, NextFunction } from "express";
import { userOdm } from "../odm/user.odm";

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // NO LOGADO
    const createdUser = await userOdm.createUser(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

export const userService = {
  createUser,
};
