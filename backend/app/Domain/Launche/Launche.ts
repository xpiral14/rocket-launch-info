import { Nullable } from "../Helpers/types";

export default class Launche {
  private _id: Nullable<string>;
  private _dateUtc: Date;

  constructor(id: Nullable<string> = null, dateUtc: Date) {
    this._id = id;
    this._dateUtc = dateUtc;
  }

  get id(): Nullable<string> {
    return this._id;
  }

  get dateUtc(): Date {
    return this._dateUtc;
  }

  toJSON() {
    return {
      id: this.id,
      date_utc: this.dateUtc,
    };
  }
}
