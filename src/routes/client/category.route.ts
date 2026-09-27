import { Router } from "express";
import { categoryClientController } from "../../controllers/client";
import {  validateObjectId } from "../../middlewares";

const categoryClientRouter: Router = Router()

categoryClientRouter.get('/',categoryClientController.getCategoryTree)
categoryClientRouter.get('/:id',validateObjectId('id'),categoryClientController.getCategory)

export default categoryClientRouter