import mongoose, { Schema, Document, Types } from 'mongoose'

// 1. Định nghĩa Interface kiểu dữ liệu cho Category trong TypeScript
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

// 2. Khởi tạo Mongoose Schema khớp với Interface ở trên
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
    // Danh mục cha (cho phép danh mục đa cấp: Cha -> Con)
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null
    },
    status: {
      type: Boolean,
      default: true // true: Đang hiện, false: Đang ẩn
    },
    deleted: {
      type: Boolean,
      default: false // Xóa mềm (Soft delete)
    },
    deletedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true // Tự động sinh 2 cột createdAt và updatedAt
  }
)

// 3. Xuất Model với kiểu ICategory
export default mongoose.model<ICategory>('Category', categorySchema)