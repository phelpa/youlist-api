import { AddUser } from 'domain/usecases/user/add-user'
import { DbAddUser } from 'data/usecases/user/add-user/db-add-user'
import { UserTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/user/user-typeorm-postgresql-repository'
import { Authentication } from 'infra/auth/authentication'

export const makeDbAddUser = (): AddUser => {
  const userTypeOrmPostGreSqlRepository = new UserTypeOrmPostgreSqlRepository()
  const checkAccountByEmailRepository = new UserTypeOrmPostgreSqlRepository()
  const auth = new Authentication()

  return new DbAddUser(
    userTypeOrmPostGreSqlRepository,
    checkAccountByEmailRepository,
    auth
  )
}
