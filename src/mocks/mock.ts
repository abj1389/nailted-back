import express, { Response, Request } from "express";
import { responseList } from "../data";
import { IQuizzSession, QuizzSession } from "../domain/entities/quizz-session-entity";

export const responseRouterMock = express.Router();
export const questionRouterMock = express.Router();
export const quizzSessionRouterMock = express.Router();

responseRouterMock.get("/", (req: Request, res: Response) => {
  const prueba = {
    text: "HOLA",
  };
  res.status(200).json(prueba);
});

// responseRouter.post("/", responseService.createResponse);
responseRouterMock.post("/", (req: Request, res: Response) => {
  const response = {
    question: "64a83c7dde476cbd909b7c51",
    text: [
      {
        textLong: "",
        textShort: "La colaboración en y entre equipos.",
      },
    ],
    optionSelected: [{}],
    dateResponded: new Date(),
    numeric: null,
  };
  res.status(201).json(response);
});

// responseRouter.put("/:id", responseService.updateResponse);
responseRouterMock.put("/:id", (req: Request, res: Response) => {
  const response = {
    id: req.params.id,
    question: "64a83c7dde476cbd909b7c51",
    text: [
      {
        textLong: "",
        textShort: "La colaboración en y entre equipos.",
      },
    ],
    optionSelected: [{}],
    dateResponded: new Date(),
    numeric: null,
  };
  res.status(201).json(response);
});

questionRouterMock.get("/", (req: Request, res: Response) => {
  const question = {
    questionText: "¿Qué beneficios se ofrecen para promover el bienestar de los empleados?",
    options: [
      { optionText: "Programas de salud y bienestar", score: 0 },
      { optionText: "Flexibilidad de horario", score: 0 },
      { optionText: "Opciones de trabajo remoto", score: 0 },
      { optionText: "Actividades de team building", score: 0 },
      { optionText: "Programas de asistencia al empleado", score: 0 },
    ],
    selectedNumber: null,
    variant: "MULTI_OPTION",
    version: 1,
  };
  res.status(200).json(question);
});

quizzSessionRouterMock.get("/:whatever", (req: Request, res: Response) => {
  let allResponsesScoreSum: number = 0;

  responseList.forEach(response => {
    response.optionSelected.forEach(option => {
      allResponsesScoreSum += option?.score;
    });
  });

  const selectedQuizz: IQuizzSession = new QuizzSession({
    email: "any@email.com",
    response: responseList,
    globalScore: allResponsesScoreSum,
    categoryScore: [{
      category: "A",
      score: 5,
    }, {
      category: "B",
      score: 2,
    },
    {
      category: "C",
      score: 1,
    },
    {
      category: "D",
      score: 0,
    },
    {
      category: "E",
      score: 2,
    }],
    version: 1,
  });

  res.status(200).json(selectedQuizz);
});
