import { GetLists } from 'domain/usecases/list/get-lists'
import { DbGetLists } from 'data/usecases/list/get-lists/db-get-lists';
import { ListTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/list/list-typeorm-postgresql-repository';

export const makeDbGetLists = (): GetLists => {
  const listTypeOrmPostGreSqlRepository = new ListTypeOrmPostgreSqlRepository()
  return new DbGetLists(listTypeOrmPostGreSqlRepository)
}
