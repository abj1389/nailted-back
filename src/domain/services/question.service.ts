import { Request, Response, NextFunction } from "express";
import { questionOdm } from "../odm/question.odm";

export const getCurrentQuestions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const currentVersionQuestions = await questionOdm.getCurrentVersionQuestions();
    res.status(201).json(currentVersionQuestions);
  } catch (error) {
    next(error);
  }
};

export const questionService = {
  getCurrentQuestions,
};
