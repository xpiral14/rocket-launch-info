import { Axios } from "axios";

export enum SpaceXApiVersion {
  V1 = "v1",
  V2 = "v2",
  V3 = "v3",
  V4 = "v4",
}

export class SpaceXApi extends Axios implements Axios {
  constructor() {
    super({
      baseURL: "https://api.spacexdata.com",
      responseType: "json",
    });
    
    this.interceptors.response.use(
      (value) => ({
        ...value,
        data: value.status >= 200 && value.status < 300 ? JSON.parse(value.data) : null,
      }),
      (error) => console.log("spaceX api error")
    );
  }
  public version(version: SpaceXApiVersion) {
    this.defaults.baseURL = "https://api.spacexdata.com/" + version;
    return this;
  }
}

export default SpaceXApi;
