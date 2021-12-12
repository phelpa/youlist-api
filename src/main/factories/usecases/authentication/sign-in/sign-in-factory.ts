import { AuthSignIn } from 'data/usecases/authentication/sign-in/auth-sign-in'
import { Authentication } from 'infra/auth/authentication'
import { UserTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/user/user-typeorm-postgresql-repository'

export const makeSignIn = (): AuthSignIn => {
  const userRepo = new UserTypeOrmPostgreSqlRepository()
  const auth = new Authentication()
  return new AuthSignIn(auth, userRepo)
}
