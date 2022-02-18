import Controller from "../Controller/Controller";
export enum HTTPMethods {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch",
}

export type Route = string;

export type RouteAttributes = {
  method: HTTPMethods;
  name?: string;
  controller?: () => Controller;
};
export type Routes = Record<Route, RouteAttributes>;
