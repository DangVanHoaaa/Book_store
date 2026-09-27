import mongoose, { Schema, Document, Types } from 'mongoose'


export interface ICategory extends Document {
  title: string
  slug: string
  parentId?: Types.ObjectId | null
  status: boolean
  deleted: boolean
  deletedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}


const categorySchema: Schema<ICategory> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Tên danh mục không được để trống'],
      trim: true
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true
    },
    
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null
    },
    status: {
      type: Boolean,
      default: true 
    },
    deleted: {
      type: Boolean,
      default: false 
    },
    deletedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true 
  }
)


export default mongoose.model<ICategory>('Category', categorySchema)