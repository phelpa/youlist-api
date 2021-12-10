import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeValidateTokenController } from '../factories/controllers/authentication/validate-token/validate-token-controller-factory'

export default (router: Router): void => {
  router.post('/validate_token', adaptRoute(makeValidateTokenController()))
}
