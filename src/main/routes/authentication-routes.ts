import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeValidateTokenController } from '../factories/controllers/authentication/validate-token/validate-token-controller-factory'
import { makeSignInController } from 'main/factories/controllers/authentication/sign-in/sign-in-controller-factory'
import { makeResetPasswordController } from '../factories/controllers/authentication/reset-password/reset-password-controller-factory'

export default (router: Router): void => {
  router.post('/validate_token', adaptRoute(makeValidateTokenController()))
  router.post('/sign_in', adaptRoute(makeSignInController()))
  router.post('/reset_password', adaptRoute(makeResetPasswordController()))
}
