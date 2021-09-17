import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddAnnotationController } from '../factories/controllers/annotation/add-annotation/add-annotation-controller-factory'

export default (router: Router): void => {
  router.post('/add_annotation', adaptRoute(makeAddAnnotationController()))
}
