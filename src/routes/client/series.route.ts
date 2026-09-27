import { Router } from 'express'
import { seriesClientController } from '../../controllers/client'
import { validateObjectId } from '../../middlewares'

const seriesClientRouter: Router = Router()

seriesClientRouter.get('/', seriesClientController.getAllSeries)
seriesClientRouter.get('/:id', validateObjectId('id'), seriesClientController.getSeriesById)

export default seriesClientRouter