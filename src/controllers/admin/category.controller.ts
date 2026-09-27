import { Response,Request } from "express";
import { categoryService } from "../../services";
import { sendError, sendSuccess } from "../../utils";

//create category
export const createCategory = async (req: Request, res: Response): Promise<Response> => {
    try{
        const category = await categoryService.createCategory(req.body)
        return sendSuccess(res,201,'Tạo danh mục thành công', category)
    }
    catch(error: any)
    {
        return sendError(res,400,error.message)
    }
}

// get categories
export const getCategories = async (req: Request, res: Response): Promise<Response> =>{
    try{
        const categoies = await categoryService.getAllCategoriesForAdmin()
        return sendSuccess(res,200,'lấy danh sách danh mục thành công', categoies)
    }
    catch(error: any)
    {
        return sendError(res,400,error.message)
    }
}

// get category by id
export const getCategory = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const id = req.params.id as string
        const category = await categoryService.getCategoryById(id)
        if(!category)
        {
            return sendError(res,404,'Không tìm thấy danh mục')
        }
        return sendSuccess(res,200,'lấy danh sách danh mục thành công', category)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

//update category
export const updateCategory = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const id = req.params.id as string
        const category = await categoryService.updateCategory(id,req.body)
        if(!category)
        {
            return sendError(res,404,'Không tìm thấy danh mục để cập nhật')
        }
        return sendSuccess(res,200,'Cập nhật danh mục thành công', category)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

//delete category
export const deleteCategory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id as string
        const category = await categoryService.deleteCategory(id)
        if(!category){
            return sendError(res,404,'Không tìm thấy danh mục để xóa')
        }
        return sendSuccess(res,200,'Xóa danh mục thành công', category)
    } catch (error) {
        return sendError(res,400,error.message)
    }
}