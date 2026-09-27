import Joi from 'joi'
import { AUTHOR_STATUS } from '../constants'

export const authorValidationSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Tên tác giả không được để trống!',
    'string.min': 'Tên tác giả phải có ít nhất 2 ký tự!',
    'string.max': 'Tên tác giả không được vượt quá 100 ký tự!',
    'any.required': 'Tên tác giả là bắt buộc!'
  }),
  bio: Joi.string().trim().allow('', null).messages({
    'string.base': 'Tiểu sử phải là dạng văn bản!'
  }),
  avatar: Joi.object({
    url: Joi.string().trim().allow('', null),
    publicId: Joi.string().trim().allow('', null)
  }).allow(null),
  status: Joi.string().valid(...Object.values(AUTHOR_STATUS)).messages({
    'any.only': 'Trạng thái status chỉ được là "active" hoặc "inactive"!'
  })
})