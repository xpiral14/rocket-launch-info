import { Nullable } from "../Domain/Helpers/types";

export abstract class Service<C = any> {
  abstract handle(command: C): any;
}
