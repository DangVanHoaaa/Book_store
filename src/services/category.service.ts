import { promises } from 'node:fs'
import { categoryModel, ICategory } from '../models'
import slugify from '../utils/slugify'
import buildCategoryTree from '../utils/categoryTree'
import { CATEGORY_STATUS } from '../constants'
// create Category
export const createCategory = async (data: Partial<ICategory>): Promise<ICategory> => {
    if(data.title || !data.slug)
    {
        data.slug = slugify(data.title)
    }
    if(data.parentId)
    {
        const parentCategory = categoryModel.findOne({_id: data.parentId, deleted: false})
        if(!parentCategory)
        {
            throw new Error('Danh mục cha không tồn tại')
        }
    }
    const category = await categoryModel.create(data)
    return category
}


// get all categories for admin
export const getAllCategoriesForAdmin = async (): Promise<ICategory[]> =>{
    return await categoryModel.find({deleted: false}).populate('parentId','title slug').sort({createAt: -1})
}


// get all categories for client
export const getAllCategoriesForClient = async (): Promise<any[]> =>{
    const categories = await categoryModel.find({deleted: false, status: CATEGORY_STATUS.ACTIVE}).sort({createAt: -1})
    return buildCategoryTree(categories)
}

//get by id
export const getCategoryById = async (id: string): Promise<ICategory | null> => {
    return (await categoryModel.findOne({_id: id, deleted: false})).populate('parentId','title slug')
}

//update category
export const updateCategory = async(id: string, data: Partial<ICategory>): Promise<ICategory | null> =>{
    if(data.title)
    {
        data.slug = slugify(data.title)
    }
    if(data.parentId && data.parentId.toString() === id)
    {
        throw new Error('Danh mục không thể làm cha của chính nó')
    }
    return await categoryModel.findByIdAndUpdate(id, data, {new: true})
}

//delete category
export const deleteCategory = async(id: string) : Promise<ICategory | null> => {
    const subCategoryCount = await categoryModel.countDocuments({parentId: id, deleted: false})
    if(subCategoryCount > 0)
    {
        throw new Error('Không thể danh mục này vì danh mục này đang chứa các danh mục con')
    }

    return await categoryModel.findByIdAndUpdate(id,{deleted: true , deletedAt: new Date()}, {new: true})

}