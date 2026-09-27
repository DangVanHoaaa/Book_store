import { Router } from "express";
import { categoryAdminController } from "../../controllers/admin";
import { validate,validateObjectId,checkDulicateCategoryTitle } from "../../middlewares";
import { categoryValidationSchema } from "../../validates";
const categoryRouter: Router = Router()

categoryRouter.post('/',checkDulicateCategoryTitle,validate(categoryValidationSchema),categoryAdminController.createCategory)
categoryRouter.get('/',categoryAdminController.getCategories)
categoryRouter.get('/:id',validateObjectId('id'),categoryAdminController.getCategory)
categoryRouter.put('/:id',validateObjectId('id'),checkDulicateCategoryTitle,validate(categoryValidationSchema),categoryAdminController.updateCategory)
categoryRouter.delete('/:id',validateObjectId('id'),categoryAdminController.deleteCategory)

export default categoryRouter
