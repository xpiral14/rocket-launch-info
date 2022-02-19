export type PaginatedMetadata = {
  total: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number,
  limit: number
};

export default class PaginatedData<T> {
  constructor(private _data: T[], private _meta: PaginatedMetadata) {}

  public data(): T[] {
    return this._data;
  }

  public metadata() {
    return this._meta;
  }

  public toJSON() {
    return {
      meta: this.metadata(),
      data: this.data(),
    };
  }
}
