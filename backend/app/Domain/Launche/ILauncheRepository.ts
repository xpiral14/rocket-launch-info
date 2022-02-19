import PaginatedData from "../Helpers/PaginatedData";
import { Nullable } from "../Helpers/types";
import Launche from "./Launche";

export default interface ILauncheRepository {
  nextLaunche(): Promise<Nullable<Launche>>;
  latestLaunche(): Promise<Nullable<Launche>>;
  upcomingLaunches(page: number, limit: number, populate?: string[]): Promise<PaginatedData<Launche>>;
  pastLaunches(page: number, limit: number): Promise<Launche[]>;
}
