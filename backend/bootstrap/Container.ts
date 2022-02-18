import { Injector } from "@sailplane/injector";

export default class Container extends Injector{
  instance<T> (abstract: T){
      return Injector.get?.(abstract as any) as T
  };

  bind = (abstract: any, concret: any) => {};
}
