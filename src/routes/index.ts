import swaggerUiExpress from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "../swagger-options";
import express, { type Response, type Request } from "express";

import { responseRouter } from "./response.routes";
import { questionRouterMock } from "../mocks/mock";
import { quizzRouter } from "./quizz.routes";

import { infoReq } from "../server/infoReq.middleware";
import { connect } from "../server/connect.middleware";

import { checkErrorRequest } from "../domain/services/checkErrorRequest.middleware";
import { sessionRouter } from "./session.routes";

export const configureRoutes = (app: any): any => {
  // Swagger
  const specs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

  // Definimos el routerHome que será el encargado de manejar las peticiones a nuestras rutas en la raíz.
  const routerHome = express.Router();
  routerHome.get("/", (req: Request, res: Response) => {
    res.send(`
      <h3>Esta es la RAIZ de nuestra API.</h3>
    `);
  });
  routerHome.get("*", (req: Request, res: Response) => {
    res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
  });

  // Middleware previo de Info de la req.
  // app.use(infoReq);

  // Middleware de conexión a BBDD
  // app.use(connect);

  // Usamos las rutas
  app.use("/quizz", infoReq, connect, quizzRouter);
  app.use("/session", infoReq, connect, sessionRouter);
  app.use("/question", infoReq, connect, questionRouterMock);
  app.use("/response", infoReq, connect, responseRouter);
  app.use("/", infoReq, routerHome);

  // Middleware de gestión de los Errores de las peticiones.
  app.use(checkErrorRequest);

  return app;
};
