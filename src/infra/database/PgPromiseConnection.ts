import pgp from "pg-promise";
import pg from "pg-promise/typescript/pg-subset";

import { Connection } from "./Connection";

export class PgPromiseConnection implements Connection {
  connection: pgp.IDatabase<{}, pg.IClient>;

  constructor() {
    this.connection = pgp()("postgres://postgres:postgres@localhost:5432/app");
  }

  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  async close(): Promise<void> {
    return this.connection.$pool.end();
  }
}
