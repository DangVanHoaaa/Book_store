import categoryAdminRouter from './admin/category.route'
import categoryClientRouter from './client/category.route'

import authorAdminRouter from './admin/author.route'
import authorClientRouter from './client/author.route'

import seriesAdminRouter from './admin/series.route'
import seriesClientRouter from './client/series.route'
import { Router } from 'express'

const router: Router = Router()
//router admin
router.use('/admin/categories',categoryAdminRouter)
router.use('/admin/authors',authorAdminRouter)
router.use('/admin/series', seriesAdminRouter)

//router client
router.use('/categories',categoryClientRouter)
router.use('/authors',authorClientRouter)
router.use('/series', seriesClientRouter)
export default router