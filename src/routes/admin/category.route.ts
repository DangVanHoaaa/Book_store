import { Router } from "express";
import { categoryAdminController } from "../../controllers/admin";
import { validate,validateObjectId,checkDulicateCategoryTitle } from "../../middlewares";
import { categoryValidationSchema } from "../../validates";
const categoryAdminRouter: Router = Router()

categoryAdminRouter.post('/',checkDulicateCategoryTitle,validate(categoryValidationSchema),categoryAdminController.createCategory)
categoryAdminRouter.get('/',categoryAdminController.getCategories)
categoryAdminRouter.get('/:id',validateObjectId('id'),categoryAdminController.getCategory)
categoryAdminRouter.put('/:id',validateObjectId('id'),checkDulicateCategoryTitle,validate(categoryValidationSchema),categoryAdminController.updateCategory)
categoryAdminRouter.delete('/:id',validateObjectId('id'),categoryAdminController.deleteCategory)

export default categoryAdminRouter
