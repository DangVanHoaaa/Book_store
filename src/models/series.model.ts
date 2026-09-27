import mongoose, { Schema, Document } from 'mongoose'
import { SERIES_STATUS, SeriesStatusType } from '../constants'
import { IImage } from './author.model'

export interface ISeries extends Document {
  title: string
  slug: string
  description?: string
  coverImage?: IImage
  color?: string
  status: SeriesStatusType
  isActive: boolean
  deleted: boolean
  deletedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

const seriesSchema = new Schema<ISeries>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    coverImage: {
      url: { type: String, default: '' },
      publicId: { type: String, default: '' }
    },
    color: {
      type: String,
      default: '#3b82f6', 
      trim: true
    },
    status: {
      type: String,
      enum: Object.values(SERIES_STATUS),
      default: SERIES_STATUS.ONGOING
    },
    isActive: {
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

export default mongoose.model<ISeries>('Series', seriesSchema)
 