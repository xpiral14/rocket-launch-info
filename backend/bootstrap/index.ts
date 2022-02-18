import express, { Application, IRouter, Router } from "express";
import Provider from "../providers/Provider";
import IOCProvider from "../providers/IOCServiceProvider";
import RouteServiceProvider from "../providers/RouteServiceProvider";

class Bootstrap {
  app: Application;
  router: IRouter;
  providers: (() => Provider)[];

  constructor() {
    this.app = express();
    this.router = Router();

    this.providers = [
      () => new IOCProvider(),
      () => new RouteServiceProvider(this.app, this.router),
    ];
  }

  private setupProviders() {
    this.providers.forEach((provider) => provider().boot());
  }

  start() {
    this.setupProviders();

    const PORT = process.env.PORT || 8000;
    this.app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  }
}

export default Bootstrap;
