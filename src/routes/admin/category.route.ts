import { Router } from "express";
import { categoryAdminController } from "../../controllers/admin";
import { validate,validateObjectId,checkDuplicate } from "../../middlewares";
import { categoryValidationSchema } from "../../validates";
import { categoryModel } from "../../models";
const categoryAdminRouter: Router = Router()

categoryAdminRouter.post('/',checkDuplicate(categoryModel, 'title'),validate(categoryValidationSchema),categoryAdminController.createCategory)
categoryAdminRouter.get('/',categoryAdminController.getCategories)
categoryAdminRouter.get('/:id',validateObjectId('id'),categoryAdminController.getCategory)
categoryAdminRouter.put('/:id',validateObjectId('id'),checkDuplicate(categoryModel, 'title'),validate(categoryValidationSchema),categoryAdminController.updateCategory)
categoryAdminRouter.delete('/:id',validateObjectId('id'),categoryAdminController.deleteCategory)

export default categoryAdminRouter
