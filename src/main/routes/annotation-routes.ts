import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddAnnotationController } from '../factories/controllers/annotation/add-annotation/add-annotation-controller-factory'
import { makeGetAnnotationsController } from '../factories/controllers/annotation/get-annotations/get-annotations-controller-factory'

export default (router: Router): void => {
  router.post('/add_annotation', adaptRoute(makeAddAnnotationController()))
  router.get('/get_annotations', adaptRoute(makeGetAnnotationsController()))
}
