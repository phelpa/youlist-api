import { Express, Router } from 'express'
import userRoutes from '../routes/user-routes'
import listRoutes from '../routes/list-routes'
import videoRoutes from '../routes/video-routes'
import annotationRoutes from '../routes/annotation-routes'
import authenticationRoutes from '../routes/authentication-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  userRoutes(router)
  listRoutes(router)
  videoRoutes(router)
  annotationRoutes(router)
  authenticationRoutes(router)
}
