import { Router } from "express";
import { validate, checkDuplicate, validateObjectId } from "../../middlewares";
import { authorAdminController } from "../../controllers/admin";
import { authorValidationSchema } from "../../validates";
import { authorModel } from "../../models";

const authorAdminRouter: Router = Router()

authorAdminRouter.post('/',checkDuplicate(authorModel,'name'),validate(authorValidationSchema),authorAdminController.createAuthor)
authorAdminRouter.get('/',authorAdminController.getAuthors)
authorAdminRouter.get('/:id',validateObjectId('id'), authorAdminController.getAuthorById)
authorAdminRouter.put('/:id',validateObjectId('id'),checkDuplicate(authorModel,'name'),validate(authorValidationSchema),authorAdminController.updateAuthor)
authorAdminRouter.delete('/:id',validateObjectId('id'),authorAdminController.deleteAuthor)

export default authorAdminRouter