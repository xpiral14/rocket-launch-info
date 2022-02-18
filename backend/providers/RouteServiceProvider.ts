import Provider from "./Provider";
import * as routes from "../Http/Route";
import { Application, IRouter, Router } from "express";

export default class RouteServiceProvider extends Provider {
  constructor(private app: Application, private router: IRouter) {
    super();
  }
  boot() {
    Object.values(routes).forEach((routeModule) => {
      Object.keys(routeModule).forEach((route) => {
        const routeAttr = routeModule[route];
        const { controller } = routeAttr;
        if (!controller) throw new Error(`controller to route ${route} not found`);
        this.router?.[routeAttr.method]?.(route, controller?.()?.control);
      });
    });

    this.app.use("/", this.router);
  }
}
