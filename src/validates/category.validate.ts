import Joi from 'joi'


export const categoryValidationSchema = Joi.object({
  title: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Tên danh mục không được để trống!',
    'string.min': 'Tên danh mục phải có ít nhất 2 ký tự!',
    'string.max': 'Tên danh mục không được vượt quá 100 ký tự!',
    'any.required': 'Tên danh mục là bắt buộc!'
  }),
  parentId: Joi.string().hex().length(24).allow(null, '').messages({
    'string.length': 'ID danh mục cha phải đúng chuẩn 24 ký tự MongoDB!'
  }),
  status: Joi.boolean().messages({
    'boolean.base': 'Trạng thái status phải là true hoặc false!'
  })
})

