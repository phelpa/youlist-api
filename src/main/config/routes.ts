import { Express, Router } from 'express'
import productRoutes from '../routes/product-routes'
import productCategoryRoutes from '../routes/product-category-routes'
import supplierRoutes from '../routes/supplier-routes'
import supplierCategoryRoutes from '../routes/supplier-category-routes'
import budgetItemRoutes from '../routes/budget-item-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  productRoutes(router)
  productCategoryRoutes(router)
  supplierRoutes(router)
  supplierCategoryRoutes(router)
  budgetItemRoutes(router)
}
