import ILauncheRepository from "../../../Domain/Launche/ILauncheRepository";
import { Service } from "../../Service";

export type NextLaunchesServiceCommand = {
  limit: number;
  page: number;
  populate: string[];
};

export default class UpcomingLaunchesService extends Service {
  static readonly $inject = ["launcheRepository"];

  constructor(private launcheRepository: ILauncheRepository) {
    super();
  }

  handle(command: NextLaunchesServiceCommand) {
    return this.launcheRepository.upcomingLaunches(command.page, command.limit, command.populate);
  }
}
