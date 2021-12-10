import { AuthValidateToken } from 'data/usecases/authentication/validate-token/auth-validate-token'
import { Authentication } from 'infra/auth/authentication'
import { UserTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/user/user-typeorm-postgresql-repository'

export const makeValidateToken = (): AuthValidateToken => {
  const userRepo = new UserTypeOrmPostgreSqlRepository()
  const auth = new Authentication()
  return new AuthValidateToken(auth, userRepo)
}
