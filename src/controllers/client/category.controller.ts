import { Request, Response } from "express";
import { categoryService } from "../../services";
import { sendSuccess, sendError } from "../../utils";
//get category tree
export const getCategoryTree = async (req: Request, res: Response): Promise<Response> => {
    try {
        const categoryTree = await categoryService.getAllCategoriesForClient()
        return sendSuccess( res,200,'Lấy danh mục thành công',categoryTree)
    } catch (error: any) {
        return sendError(res,400,error.massage)
    }
}

//get category by id
export const getCategory = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const  id  = req.params.id as string
        const category = categoryService.getCategoryById(id)
        if( !category || !(await category).status)
        {
            return sendError(res,404,'Không tìm thấy danh mục cần tìm')
        }
    } catch (error: any) {
        return sendError(res,400,error.massage)
    }
}