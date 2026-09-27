import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from 'joi'
import { sendError } from '../utils'


export const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false 
    })

    if (error) {
      
      const errorMessages = error.details.map((detail) => detail.message)
      return sendError(res, 400, 'Dữ liệu gửi lên không hợp lệ!', errorMessages)
    }
    next()
  }
}