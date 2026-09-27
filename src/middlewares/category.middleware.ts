import { categoryModel } from "../models";
import { Request, Response,NextFunction } from "express";
import { sendError } from "../utils";


export const checkDulicateCategoryTitle = async (req: Request, res: Response, next:NextFunction):Promise<any> => {
    try {
        const {title} = req.body
        const id = req.params.id as string
        if(title)
        {
            const query: any = {
                title: title.trim(),
                deleted: false
            }
            if(id)
            {
                query._id = {$ne: id}
            }
            const existingCategory  = await categoryModel.findOne(query)
            if(existingCategory)
            {
                return sendError(res,400,'Tên danh mục bị trùng')
            }
            next()
        }
        
    } catch (error: any) {
        return sendError(res,500,error.message)
    }
}