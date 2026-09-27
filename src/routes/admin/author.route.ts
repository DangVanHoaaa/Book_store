import { Router } from "express";
import { validate, checkDuplicateAuthorName, validateObjectId } from "../../middlewares";
import { authorAdminController } from "../../controllers/admin";
import { authorValidationSchema } from "../../validates";

const authorAdminRouter: Router = Router()

authorAdminRouter.post('/',checkDuplicateAuthorName,validate(authorValidationSchema),authorAdminController.createAuthor)
authorAdminRouter.get('/',authorAdminController.getAuthors)
authorAdminRouter.get('/:id',validateObjectId('id'), authorAdminController.getAuthorById)
authorAdminRouter.put('/:id',validateObjectId('id'),checkDuplicateAuthorName,validate(authorValidationSchema),authorAdminController.updateAuthor)
authorAdminRouter.delete('/:id',validateObjectId('id'),authorAdminController.deleteAuthor)

export default authorAdminRouter