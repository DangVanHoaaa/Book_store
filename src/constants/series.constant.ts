export const SERIES_STATUS = {
  ONGOING: 'ongoing',     
  COMPLETED: 'completed'  
} as const

export type SeriesStatusType = typeof SERIES_STATUS[keyof typeof SERIES_STATUS]