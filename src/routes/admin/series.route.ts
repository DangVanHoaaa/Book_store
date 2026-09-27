import { Router } from 'express'
import { seriesAdminController } from '../../controllers/admin'
import { validate, validateObjectId, checkDuplicate } from '../../middlewares'
import { seriesValidationSchema } from '../../validates'
import { seriesModel } from '../../models'

const seriesAdminRouter: Router = Router()

seriesAdminRouter.post('/',checkDuplicate(seriesModel, 'title'),validate(seriesValidationSchema),seriesAdminController.createSeries)

seriesAdminRouter.get('/', seriesAdminController.getAllSeries)

seriesAdminRouter.get('/:id', validateObjectId('id'), seriesAdminController.getSeriesById)

seriesAdminRouter.put('/:id',validateObjectId('id'),checkDuplicate(seriesModel, 'title'),validate(seriesValidationSchema),seriesAdminController.updateSeries)

seriesAdminRouter.delete('/:id', validateObjectId('id'), seriesAdminController.deleteSeries)
export default seriesAdminRouter