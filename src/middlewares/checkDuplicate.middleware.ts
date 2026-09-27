import { Model } from 'mongoose'
import { Request, Response, NextFunction } from 'express'
import { sendError, slugify } from '../utils'

export const checkDuplicate = (model: Model<any>, fieldName: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const value = req.body[fieldName]
      const id = req.params.id as string

      if (value) {
    
        const slug = slugify(value)
        const query: any = { slug }
        if (id) {
          query._id = { $ne: id }
        }

        const existing = await model.findOne(query)
        if (existing) {
          return sendError(res, 400, `${fieldName} này đã tồn tại trong hệ thống!`)
        }
      }

      next()
    } catch (error: any) {
      return sendError(res, 500, error.message)
    }
  }
}