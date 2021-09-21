import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddAnnotationController } from '../factories/controllers/annotation/add-annotation/add-annotation-controller-factory'
import { makeGetListsController } from '../factories/controllers/list/get-lists/get-lists-controller-factory';

export default (router: Router): void => {
  router.post('/add_annotation', adaptRoute(makeAddAnnotationController()))
  router.get('/get_annotations', adaptRoute(makeGetListsController()))
}
