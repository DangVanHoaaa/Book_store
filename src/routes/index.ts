import categoryAdminRouter from './admin/category.route'
import categoryClientRouter from './client/category.route'

import authorAdminRouter from './admin/author.route'
import authorClientRouter from './client/author.route'
import { Router } from 'express'

const router: Router = Router()
//router admin
router.use('/admin/categories',categoryAdminRouter)
router.use('/admin/authors',authorAdminRouter)

//router client
router.use('/categories',categoryClientRouter)
router.use('/authors',authorClientRouter)
export default router