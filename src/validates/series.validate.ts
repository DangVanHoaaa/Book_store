import Joi from 'joi'
import { SERIES_STATUS } from '../constants'

export const seriesValidationSchema = Joi.object({
  title: Joi.string().trim().min(2).max(150).required().messages({
    'string.empty': 'Tên bộ sách không được để trống!',
    'string.min': 'Tên bộ sách phải có ít nhất 2 ký tự!',
    'string.max': 'Tên bộ sách không được vượt quá 150 ký tự!',
    'any.required': 'Tên bộ sách là bắt buộc!'
  }),
  description: Joi.string().trim().allow('', null).messages({
    'string.base': 'Mô tả bộ sách phải là dạng văn bản!'
  }),
  coverImage: Joi.object({
    url: Joi.string().trim().allow('', null),
    publicId: Joi.string().trim().allow('', null)
  }).allow(null),
  color: Joi.string().trim().default('#3b82f6').messages({
    'string.base': 'Mã màu phải là chuỗi ký tự!'
  }),
  status: Joi.string().valid(...Object.values(SERIES_STATUS)).messages({
    'any.only': 'Trạng thái bộ sách chỉ được là "ongoing" hoặc "completed"!'
  }),
  isActive: Joi.boolean().messages({
    'boolean.base': 'Trạng thái isActive phải là true hoặc false!'
  })
})