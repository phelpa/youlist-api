import { AddList } from 'domain/usecases/list/add-list'
import { DbAddList } from 'data/usecases/list/add-list/db-add-list'
import { ListTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/list/list-typeorm-postgresql-repository'

export const makeDbAddList = (): AddList => {
  const listTypeOrmPostGreSqlRepository = new ListTypeOrmPostgreSqlRepository()
  return new DbAddList(listTypeOrmPostGreSqlRepository)
}
