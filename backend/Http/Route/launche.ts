import { Injector } from "@sailplane/injector";
import { Routes, HTTPMethods } from "./Route";
import { LauncheControllers } from "../Controller";

const launcheRoutes: Routes = {
  "/next": {
    controller: () => Injector.get(LauncheControllers.GetNextLaunchController)!,
    method: HTTPMethods.GET,
    name: "launche.next",
  },
  "/latest": {
    controller: () => Injector.get(LauncheControllers.GetLatestLauncheController)!,
    method: HTTPMethods.GET,
    name: "launche.latest",
  },
  "/nexts": {
    controller: () => Injector.get(LauncheControllers.GetNextLaunchesController)!,
    method: HTTPMethods.GET,
    name: "launche.latest",
  },
};

export default launcheRoutes;
