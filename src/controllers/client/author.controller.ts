import { authorService } from "../../services";
import { Request, Response } from "express";
import { sendSuccess, sendError } from "../../utils";

// get authors
export const getAuthors = async (req: Request, res: Response): Promise<Response> => {
    try {
        const authors = await authorService.getAuthorsForClient()
        return sendSuccess(res,200,'Lấy danh sách tác giả thành công',authors)
    } catch (error: any) {
        return sendError(res,400,error.massage)
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
        return sendError(res,400,error.massage)
    }
}