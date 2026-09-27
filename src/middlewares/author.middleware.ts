import { Request,Response,NextFunction } from "express";
import { authorModel } from "../models";
import { sendError } from "../utils";

export const checkDuplicateAuthorName = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { name } = req.body
        const id = req.params.id as string

        if(name)
        {
            const query: any = {
                name: name.trim(),
                deleted: false
            }
            if(id)
            {
                query._id = {$ne: id}
            }
            const existingAuthor = await authorModel.findOne(query)
            if(existingAuthor)
            {
                return sendError(res,400,'Tên tác giả đã tồn tại')
            }
        }
        next()
    } catch (error: any) {
        return sendError(res,500,error.message)
    }
}
