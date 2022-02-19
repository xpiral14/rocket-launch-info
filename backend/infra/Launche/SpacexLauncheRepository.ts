import { Injector } from "@sailplane/injector";
import { AxiosInstance } from "axios";
import PaginatedData, { PaginatedMetadata } from "../../app/Domain/Helpers/PaginatedData";
import ILauncheRepository from "../../app/Domain/Launche/ILauncheRepository";
import Launche from "../../app/Domain/Launche/Launche";
import SpaceXApi, { SpaceXApiVersion } from "../Api/SpaceXApi";

class SpacexLauncheRepository implements ILauncheRepository {
  readonly DEFAULT_ITEMS_PER_PAGE = 20;
  readonly DEFAULT_PAGE = 1;
  static readonly $inject = [SpaceXApi];
  private api: SpaceXApi;
  constructor(api: SpaceXApi) {
    this.api = api;
  }

  async nextLaunche() {
    const { data } = await this.api.get("/launches/next");
    const launche = data ? new Launche(data.id, new Date(data.date_utc)) : null;
    return launche;
  }

  async latestLaunche() {
    const { data } = await this.api.get("/launches/latest");
    const launche = data ? new Launche(data.id, new Date(data.date_utc)) : null;
    return launche;
  }

  async upcomingLaunches(page: number, limit: number, populate?: string[]) {
    const body = {
      query: {
        upcoming: true,
      },
      options: {
        page: page ?? this.DEFAULT_PAGE,
        limit: limit ?? this.DEFAULT_ITEMS_PER_PAGE,
        populate: populate ?? [],
        sort: {
          date_utc: "asc",
        },
      },
    };
    const response = await this.api.request({
      method: "POST",
      url: "launches/query",
      data: body,
    });
    return this.transformPaginationResponseAtPaginationDomain(response.data);
  }
  async pastLaunches(page: number, limit: number) {
    const { data } = await this.api.get("/launches/past");

    return data ? data.map(this.mapResponseToLauncheDomain) : [];
  }

  private mapResponseToLauncheDomain = (launcheResponse: any) => {
    return new Launche(launcheResponse.id, new Date(launcheResponse.date_utc));
  };

  private transformPaginationResponseAtPaginationDomain(launcheResponse: any) {
    const meta: PaginatedMetadata = {
      hasNextPage: launcheResponse.hasNextPage,
      hasPrevPage: launcheResponse.hasPrevPage,
      total: launcheResponse.totalDocs,
      totalPages: launcheResponse.totalPages,
      page: launcheResponse.page,
      limit: launcheResponse.limit,
    };
    const data = launcheResponse?.docs?.map(this.mapResponseToLauncheDomain);
    return new PaginatedData<Launche>(data, meta);
  }
}

export default SpacexLauncheRepository;
