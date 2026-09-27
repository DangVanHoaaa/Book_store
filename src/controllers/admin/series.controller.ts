import { Request, Response } from 'express'
import { seriesService } from '../../services'
import { sendSuccess, sendError } from '../../utils'

// create series
export const createSeries = async (req: Request, res: Response): Promise<Response> => {
  try {
    const series = await seriesService.createSeries(req.body)
    return sendSuccess(res, 201, 'Tạo bộ sách mới thành công!', series)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}

// get series
export const getAllSeries = async (req: Request, res: Response): Promise<Response> => {
  try {
    const list = await seriesService.getSeriesForAdmin()
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
    if (!series) {
      return sendError(res, 404, 'Không tìm thấy bộ sách!')
    }
    return sendSuccess(res, 200, 'Lấy thông tin bộ sách thành công!', series)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}

// update series
export const updateSeries = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id as string
    const series = await seriesService.updateSeries(id, req.body)
    if (!series) {
      return sendError(res, 404, 'Không tìm thấy bộ sách để cập nhật!')
    }
    return sendSuccess(res, 200, 'Cập nhật bộ sách thành công!', series)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}

// 5. delete series
export const deleteSeries = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id as string
    const series = await seriesService.deleteSeries(id)
    if (!series) {
      return sendError(res, 404, 'Không tìm thấy bộ sách để xóa!')
    }
    return sendSuccess(res, 200, 'Xóa bộ sách thành công!', series)
  } catch (error: any) {
    return sendError(res, 400, error.message)
  }
}