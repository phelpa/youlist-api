import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddUserController } from '../factories/controllers/user/add-user/add-user-controller-factory'

export default (router: Router): void => {
  router.post('/add_user', adaptRoute(makeAddUserController()))
}
