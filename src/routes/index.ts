import categoryAdminRouter from './admin/category.route'
import categoryClientRouter from './client/category.route'
import { Router } from 'express'

const router: Router = Router()
//router admin
router.use('/admin/categories',categoryAdminRouter)


//router client
router.use('/categories',categoryClientRouter)
export default router