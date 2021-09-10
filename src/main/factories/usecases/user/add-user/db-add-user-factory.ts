import { AddUser } from 'domain/usecases/user/add-user'
import { DbAddUser } from 'data/usecases/user/add-user/db-add-user'
import { UserTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/user/user-typeorm-postgresql-repository'

export const makeDbAddUser = (): AddUser => {
  const userTypeOrmPostGreSqlRepository = new UserTypeOrmPostgreSqlRepository()
  return new DbAddUser(userTypeOrmPostGreSqlRepository)
}
