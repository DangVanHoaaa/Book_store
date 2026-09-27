import { Response } from 'express'


export interface IApiResponse<T = any> {
  success: boolean       
  statusCode: number    
  message: string       
  data?: T              
  meta?: any            
  errors?: any         
}


export const sendSuccess = <T>(
  res: Response,
  statusCode: number = 200,
  message: string = 'Thành công',
  data: T = null as any,
  meta: any = null
): Response => {
  const response: IApiResponse<T> = {
    success: true,
    statusCode,
    message,
    data
  }

 
  if (meta) {
    response.meta = meta
  }

  return res.status(statusCode).json(response)
}


export const sendError = (
  res: Response,
  statusCode: number = 400,
  message: string = 'Có lỗi xảy ra',
  errors: any = null
): Response => {
  const response: IApiResponse = {
    success: false,
    statusCode,
    message
  }

  if (errors) {
    response.errors = errors
  }

  return res.status(statusCode).json(response)
}