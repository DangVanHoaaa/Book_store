import { authorModel, IAuthor } from "../models";
import { slugify } from "../utils";
import { AUTHOR_STATUS } from "../constants";
import { create } from "node:domain";
//create author
export const createAuthor = async(data: Partial<IAuthor>): Promise<IAuthor> => {
    if(data.name && !data.slug)
    {
        data.slug = slugify(data.name)
    }
    const author = await authorModel.create(data)
    return author
}

// get authors for admin
export const getAuthorsForAdmin = async(): Promise<IAuthor[]> => {
    return await authorModel.find({deleted: false}).sort({createAt: -1})
}

//get authors for client
export const getAuthorsForClient = async(): Promise<IAuthor[]> => {
    return await authorModel
    .find({deleted: false, status: AUTHOR_STATUS.ACTIVE})
    .select('name slug bio avatar')
    .sort({createAt: -1})
}

//get author by id
export const getAuthorById = async(id: string): Promise<IAuthor | null> => {
    return await authorModel.findOne({_id:id, deleted: false})
}

//update author
export const updateAuthor = async(id: string, data: Partial<IAuthor>): Promise<IAuthor | null> => {
    if(data.name)
    {
        data.slug = slugify(data.name)
    }
    return await authorModel.findByIdAndUpdate(id,data,{new: true})
}

//delete author
export const deleteAuthor = async(id: string): Promise<IAuthor | null> => {
    return await authorModel.findByIdAndUpdate(id,{deleted: true, deletedAt: new Date()},{new: true})
}