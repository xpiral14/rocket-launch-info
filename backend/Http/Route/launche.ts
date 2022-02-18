import { Injector } from "@sailplane/injector";
import { Routes, HTTPMethods } from "./Route";
import GetNextLaunchController from "../Controller/Launche/GetNextLauncheController";
import GetLatestLauncheController from "../Controller/Launche/GetLatestLauncheController";

const launcheRoutes: Routes = {
  "/next": {
    controller: () => Injector.get(GetNextLaunchController)!,
    method: HTTPMethods.GET,
    name: "launche.next",
  },
  "/latest": {
    controller: () => Injector.get(GetLatestLauncheController)!,
    method: HTTPMethods.GET,
    name: 'launche.latest'
  },
};

export default launcheRoutes;
