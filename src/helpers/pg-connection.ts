import {Pool} from "pg-pool"

export interface IClient {
  query(q: string, v: any[]): Promise<any>
}

export class PgConnection {
  private readonly pool

  constructor() {
    this.pool = new Pool({connectionString: process.env.DATA_BASE_URL})
  }

  async load(): Promise<IClient> {
    return this.pool.connect()
  }
}
