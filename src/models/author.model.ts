import mongoose, { Schema, Document } from 'mongoose'
import { AUTHOR_STATUS, AuthorStatusType } from '../constants'


export interface IImage {
  url: string
  publicId?: string
}


export interface IAuthor extends Document {
  name: string
  slug: string
  bio?: string
  avatar?: IImage
  status: AuthorStatusType
  deleted: boolean
  deletedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

const authorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    },
    avatar: {
      url: { type: String, default: '' },
      publicId: { type: String, default: '' }
    },
    status: {
      type: String,
      enum: Object.values(AUTHOR_STATUS),
      default: AUTHOR_STATUS.ACTIVE
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

export default mongoose.model<IAuthor>('Author', authorSchema)
 