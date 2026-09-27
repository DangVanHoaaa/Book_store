import { Request, Response } from 'express'
import { seriesService } from '../../services'
import { sendSuccess, sendError } from '../../utils'

// get series
export const getAllSeries = async (req: Request, res: Response): Promise<Response> => {
  try {
    const list = await seriesService.getSeriesForClient()
    return sendSuccess(res, 200, 'Lấy danh sách bộ sách thành công!', list)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}

// get series by id
export const getSeriesById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id as string
    const series = await seriesService.getSeriesById(id)
    if (!series || !series.isActive) {
      return sendError(res, 404, 'Không tìm thấy bộ sách cần xem!')
    }
    return sendSuccess(res, 200, 'Lấy thông tin bộ sách thành công!', series)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}