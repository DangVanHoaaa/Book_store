import { Router } from "express";
import { authorClientController } from "../../controllers/client";
import { validateObjectId } from "../../middlewares";

const authorClientRouter: Router = Router()

authorClientRouter.get('/',authorClientController.getAuthors)
authorClientRouter.get('/:id',validateObjectId('id'),authorClientController.getAuthorById)

export default authorClientRouter