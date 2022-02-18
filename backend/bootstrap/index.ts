import * as routes from "../Http/Route";
import express, { Application, IRouter, Router } from "express";
import { Injector } from "@sailplane/injector";
import SpacexLauncheRepository from "../infra/Launche/SpacexLauncheRepository";
import GetNextLaunchService from "../app/Service/Launche/GetNextLauncheService";
import GetNextLaunchController from "../Http/Controller/Launche/GetNextLauncheController";
import SpaceXApi, { SpaceXApiVersion } from "../infra/Api/SpaceXApi";
import GetLatestLauncheService from "../app/Service/Launche/GetLatestLauncheService";
import GetLatestLauncheController from "../Http/Controller/Launche/GetLatestLauncheController";

class Bootstrap {
  app: Application;
  router: IRouter;
  constructor() {
    this.app = express();
    this.router = Router();
  }

  setupIOCContainer() {
    Injector.registerFactory(
      "launcheRepository",
      () => new SpacexLauncheRepository(new SpaceXApi().version(SpaceXApiVersion.V4))
    );
    Injector.register(GetNextLaunchService);
    Injector.register(GetNextLaunchController);
    Injector.register(GetLatestLauncheService);
    Injector.register(GetLatestLauncheController);
    Injector.bottle;
  }
  setupHttpRoutes() {
    Object.values(routes).forEach((routeModule) => {
      Object.keys(routeModule).forEach((route) => {
        const routeAttr = routeModule[route];
        const { controller } = routeAttr;
        if (!controller) throw new Error(`controller to route ${route} not found`);
        this.router?.[routeAttr.method]?.(route, controller?.()?.control);
      });
    });
  }

  startServer() {
    const PORT = 8000;
    this.app.use("/", this.router);
    this.app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  }
}

Injector.register(Bootstrap);

export default Bootstrap;
