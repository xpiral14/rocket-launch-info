import PaginatedData from "../Helpers/PaginatedData";
import { Nullable } from "../Helpers/types";
import Launche from "./Launche";

export default interface ILauncheRepository {
  nextLaunche(): Promise<Nullable<Launche>>;
  latestLaunche(): Promise<Nullable<Launche>>;
  upcomingLaunches(page: number, limit: number, populate?: string[]): Promise<PaginatedData<Launche>>;
  lastLaunches(page: number, limit: number): Promise<PaginatedData<Launche>>;
}
