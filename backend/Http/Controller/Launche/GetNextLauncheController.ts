import GetNextLaunchService from "../../../app/Service/Launche/GetNextLauncheService";
import Request from "../../Request";
import Response from "../../Response";
import Controller from "../Controller";

export default class GetNextLaunchController extends Controller {
  private getNextLaunchService: GetNextLaunchService;
  static readonly $inject = [GetNextLaunchService];
  constructor(getNextLaunchService: GetNextLaunchService) {
    super();
    this.getNextLaunchService = getNextLaunchService;
  }

   control = async (request: Request, response: Response) => {
    const launche = await this?.getNextLaunchService?.handle();
    return response?.send?.(launche);
  }
}

