import { Express, Router } from 'express'
import userRoutes from '../routes/user-routes'
import listRoutes from '../routes/list-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  userRoutes(router)
  listRoutes(router)
}
