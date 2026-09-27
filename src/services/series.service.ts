import { create } from "node:domain";
import { seriesModel, ISeries } from "../models";
import { slugify } from "../utils";

//create series
export const createSeries = async (data: Partial<ISeries> ): Promise<ISeries> => {
    if(data.title && !data.slug)
    {
        data.slug = slugify(data.title)
    }
    const series = await seriesModel.create(data)
    return series
}

// get all series for admin
export const getSeriesForAdmin = async (): Promise<ISeries[]> => {
    return await seriesModel.find({ deleted: false}).sort({createAt: -1})
}

//get all series for client
export const getSeriesForClient = async (): Promise<ISeries[]> => {
    return await seriesModel.find({ deleted: false, isActive: true}).select('title slug description coverImage color status').sort({createAt: -1})
}

//get series by id
export const getSeriesById = async (id: string): Promise<ISeries | null> => {
  return await seriesModel.findOne({ _id: id, deleted: false })
}
// update series
export const updateSeries = async (id: string, data: Partial<ISeries>): Promise<ISeries | null> => {
  if (data.title) {
    data.slug = slugify(data.title)
  }
  return await seriesModel.findByIdAndUpdate(id, data, { new: true })
}
// delete series
export const deleteSeries = async (id: string): Promise<ISeries | null> => {
  return await seriesModel.findByIdAndUpdate(
    id,
    { deleted: true, deletedAt: new Date() },
    { new: true }
  )
}