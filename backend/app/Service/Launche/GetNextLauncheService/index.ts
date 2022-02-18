import ILauncheRepository from "../../../Domain/Launche/ILauncheRepository";
import { Service } from "../../Service";

class GetNextLaunchService extends Service<void> {
  static readonly $inject = ["launcheRepository"];

  constructor(private launcheRepository: ILauncheRepository) {
    super();
    this.launcheRepository = launcheRepository;
  }

  handle() {
    return this.launcheRepository.nextLaunche();
  }
}
export default GetNextLaunchService;
