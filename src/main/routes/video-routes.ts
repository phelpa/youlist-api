import { adaptRoute } from 'main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddVideoController } from '../factories/controllers/video/add-video/add-video-controller-factory'
import { makeGetVideosController } from '../factories/controllers/video/get-videos/get-videos-controller-factory';

export default (router: Router): void => {
  router.post('/add_video', adaptRoute(makeAddVideoController()))
  router.get('/get_videos', adaptRoute(makeGetVideosController()))
}
