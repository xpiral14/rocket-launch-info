import { UpcomingLaunchesService } from "../../../app/Service/Launche";
import { NextLaunchesServiceCommand } from "../../../app/Service/Launche/UpcomingLaunchesService";
import Request from "../../Request";
import Response from "../../Response";
import Controller from "../Controller";

export default class GetUpcomingLaunchesController extends Controller {
  static readonly $inject = [UpcomingLaunchesService];
  constructor(private upcomingLaunchesService: UpcomingLaunchesService) {
    super();
    this.upcomingLaunchesService = upcomingLaunchesService;
  }

  control = async (request: Request, response: Response) => {
    const command: NextLaunchesServiceCommand = {
      limit: request.query.limit ? +request.query.limit : 20,
      page: request.query.page ? +request.query.page : 1,
      populate: ["rocket"],
    };
    const launchePaginatedData = await this?.upcomingLaunchesService?.handle(command);

    return response?.send?.(launchePaginatedData?.toJSON());
  };
}
