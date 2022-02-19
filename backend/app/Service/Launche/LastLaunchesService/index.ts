import ILauncheRepository from "../../../Domain/Launche/ILauncheRepository";
import { Service } from "../../Service";

export type LastLaunchesServiceCommand = {
  limit: number;
  page: number;
  populate: string[];
};

export default class LastLaunchesService extends Service {
  static readonly $inject = ["launcheRepository"];

  constructor(private launcheRepository: ILauncheRepository) {
    super();
  }

  handle(command: LastLaunchesServiceCommand) {
    return this.launcheRepository.lastLaunches(command.page, command.limit);
  }
}
