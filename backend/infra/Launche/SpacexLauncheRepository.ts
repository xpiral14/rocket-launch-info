import { Injector } from "@sailplane/injector";
import ILauncheRepository from "../../app/Domain/Launche/ILauncheRepository";
import Launche from "../../app/Domain/Launche/Launche";
import SpaceXApi, { SpaceXApiVersion } from "../Api/SpaceXApi";

class SpacexLauncheRepository implements ILauncheRepository {
  static readonly $inject = [SpaceXApi];
  private api: SpaceXApi;
  constructor(api: SpaceXApi) {
    this.api = api;
  }

  async nextLaunche() {
    const { data } = await this.api.get("/launches/next");
    const launche = data ? new Launche(data.id, new Date(data.date_utc)) : null;
    return launche;
  }

  async latestLaunche() {
    const { data } = await this.api.get("/launches/latest");
    const launche = data ? new Launche(data.id, new Date(data.date_utc)) : null;
    return launche;
  }

  async upcomingLaunches(page: number, limit: number) {
    const { data } = await this.api.get("/launches/upcoming");

    return data ? data.map((launch: any) => new Launche(launch.id, new Date(launch.date_utc))) : [];
  }
  async pastLaunches(page: number, limit: number) {
    const { data } = await this.api.get("/launches/past");

    return data ? data.map((launch: any) => new Launche(launch.id, new Date(launch.date_utc))) : [];
  }
}

export default SpacexLauncheRepository;
