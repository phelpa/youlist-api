import { Connection }  from "typeorm"
import { createConnection } from "typeorm";

export const TypeOrmHelper = {
  connection: null as Connection,

  async connect (): Promise<void> {
    this.connection = await createConnection()
  }

}