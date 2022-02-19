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
  "/upcoming": {
    controller: () => Injector.get(LauncheControllers.GetUpcomingLaunchesController)!,
    method: HTTPMethods.GET,
    name: "launche.latest",
  },
  "/last": {
    controller: () => Injector.get(LauncheControllers.GeLastLaunchesController)!,
    method: HTTPMethods.GET,
    name: "launche.last",
  },
};

export default launcheRoutes;
