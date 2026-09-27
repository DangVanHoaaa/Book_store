import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import { sendError } from '../utils'

export const validateObjectId = (paramName: string = 'id') => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const id = req.params[paramName] as string

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return sendError(res, 400, `Mã '${paramName}' không đúng định dạng MongoDB (phải gồm 24 ký tự hex)!`)
    }

    next() 
  }
}