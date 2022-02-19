import { Injector } from "@sailplane/injector";
import { LaunchServices } from "../app/Service";
import { LauncheControllers } from "../Http/Controller";
import SpaceXApi, { SpaceXApiVersion } from "../infra/Api/SpaceXApi";
import SpacexLauncheRepository from "../infra/Launche/SpacexLauncheRepository";
import Provider from "./Provider";

export default class IOCProvider extends Provider {
  container = Injector;
  boot() {
    this.container.registerFactory(
      "launcheRepository",
      () => new SpacexLauncheRepository(new SpaceXApi().version(SpaceXApiVersion.V4))
    );
    this.container.register(LaunchServices.GetNextLauncheService);
    this.container.register(LauncheControllers.GetNextLaunchController);
    this.container.register(LaunchServices.GetLatestLauncheService);
    this.container.register(LauncheControllers.GetLatestLauncheController);
    this.container.register(LaunchServices.UpcomingLaunchesService);
    this.container.register(LauncheControllers.GetUpcomingLaunchesController);
  }
}
