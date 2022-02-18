import ILauncheRepository from "../../../Domain/Launche/ILauncheRepository";
import { Service } from "../../Service";

class GetLatestLauncheService extends Service<void> {
  static readonly $inject = ["launcheRepository"];

  private launcheRepository: ILauncheRepository;

  constructor(launcheRepository: ILauncheRepository) {
    super();
    this.launcheRepository = launcheRepository;
  }

  handle = () => {
    return this.launcheRepository.latestLaunche();
  }
}
export default GetLatestLauncheService;
