import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddListController } from '../factories/controllers/list/add-list/add-list-controller-factory'
import { makeGetListsController } from '../factories/controllers/list/get-lists/get-lists-controller-factory'
import { auth } from 'main/middlewares/auth'

export default (router: Router): void => {
  router.post('/add_list', adaptRoute(makeAddListController()))
  router.get('/get_lists', auth, adaptRoute(makeGetListsController()))
}
