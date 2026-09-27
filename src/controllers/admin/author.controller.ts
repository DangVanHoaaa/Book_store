import { authorService } from "../../services";
import { Request, Response } from "express";
import { sendSuccess, sendError } from "../../utils";

//create author
export const createAuthor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const author = await authorService.createAuthor(req.body)
        return sendSuccess(res,201,'Tạo tác giả thành công',author)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

// get authors
export const getAuthors = async (req: Request, res: Response): Promise<Response> => {
    try {
        const authors = await authorService.getAuthorsForAdmin()
        return sendSuccess(res,200,'Lấy danh sách tác giả thành công',authors)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

// get author by id
export const getAuthorById = async (req:Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id as string
        const author = await authorService.getAuthorById(id)
        if(!author)
        {
            return sendError(res,404,'Không tìm thấy tác giả')
        }
        return sendSuccess(res,200,'Lấy tác giả thành công',author)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

// update author
export const updateAuthor = async( req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id as string
        const author = await authorService.updateAuthor(id, req.body)
        if(!author)
        {
            return sendError(res,404,'Không tìm thấy tác giả')
        }
        return sendSuccess(res,200,'Cập nhật tác giả thành công',author)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}

//delete author
export const deleteAuthor = async( req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id as string
        const author = await authorService.deleteAuthor(id)
        if(!author)
        {
            return sendError(res,404,'Không tìm thấy tác giả')
        }
        return sendSuccess(res,200,'Xóa tác giả thành công',author)
    } catch (error: any) {
        return sendError(res,400,error.message)
    }
}