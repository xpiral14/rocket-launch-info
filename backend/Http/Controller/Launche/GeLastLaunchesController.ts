import LastLaunchesService, { LastLaunchesServiceCommand } from "../../../app/Service/Launche/LastLaunchesService";
import Request from "../../Request";
import Response from "../../Response";
import Controller from "../Controller";

export default class GetLastLaunchesController extends Controller {
  static readonly $inject = [LastLaunchesService];
  constructor(private lastLaunchesService: LastLaunchesService) {
    super();
    this.lastLaunchesService = lastLaunchesService;
  }

  control = async (request: Request, response: Response) => {
    console.log('aquii')
    const command: LastLaunchesServiceCommand = {
      limit: request.query.limit ? +request.query.limit : 20,
      page: request.query.page ? +request.query.page : 1,
      populate: ["rocket"],
    };
    const launchePaginatedData = await this?.lastLaunchesService?.handle(command);
    return response?.send?.(launchePaginatedData?.toJSON());
  };
}
