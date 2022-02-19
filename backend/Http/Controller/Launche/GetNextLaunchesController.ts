import { NextLaunchesService } from "../../../app/Service/Launche";
import { NextLaunchesServiceCommand } from "../../../app/Service/Launche/NextLaunchesService";
import Request from "../../Request";
import Response from "../../Response";
import Controller from "../Controller";
import yup from "yup";

export default class GetNextLaunchesController extends Controller {
  static readonly $inject = [NextLaunchesService];
  constructor(private nextLaunchesService: NextLaunchesService) {
    super();
    this.nextLaunchesService = nextLaunchesService;
  }

  control = async (request: Request, response: Response) => {
    const command: NextLaunchesServiceCommand = {
      limit: request.query.limit ? +request.query.limit : 20,
      page: request.query.page ? +request.query.page : 1,
      populate: ["rocket"],
    };
    const launchePaginatedData = await this?.nextLaunchesService?.handle(command);

    return response?.send?.(launchePaginatedData?.toJSON());
  };
}
