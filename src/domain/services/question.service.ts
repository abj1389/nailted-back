import { Request, Response, NextFunction } from "express";
// import { questionOdm } from "../odm/question.odm";
import { questionOdmMock } from "../odm/question.odm.mock";

// export const getCurrentQuestions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const currentVersionQuestions = await questionOdm.getCurrentVersionQuestions();
//     res.status(201).json(currentVersionQuestions);
//   } catch (error) {
//     next(error);
//   }
// };

export const getCurrentQuestions = (req: Request, res: Response, next: NextFunction): any => {
  try {
    const currentVersionQuestions = questionOdmMock.getCurrentVersionQuestions();
    res.status(201).json(currentVersionQuestions);
  } catch (error) {
    next(error);
  }
};

export const questionService = {
  getCurrentQuestions,
};
