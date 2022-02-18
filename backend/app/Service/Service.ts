import { Nullable } from "../Domain/Helpers/types";

export abstract class Service<C> {
  abstract handle(command: C): any;
}
