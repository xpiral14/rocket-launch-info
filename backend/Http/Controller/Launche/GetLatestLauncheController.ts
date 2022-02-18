import GetLatestLauncheService from "../../../app/Service/Launche/GetLatestLauncheService";
import Request from "../../Request";
import Response from "../../Response";
import Controller from "../Controller";

export default class GetLatestLauncheController extends Controller {
  private getPreviousLaucheService: GetLatestLauncheService;
  static readonly $inject = [GetLatestLauncheService];
  constructor(getNextLaunchService: GetLatestLauncheService) {
    super();
    this.getPreviousLaucheService = getNextLaunchService;
  }

   control = async (request: Request, response: Response) => {
    const launche = await this?.getPreviousLaucheService?.handle();
    return response?.send?.(launche);
  }
}

