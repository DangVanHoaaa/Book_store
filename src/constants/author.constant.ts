export const AUTHOR_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
} as const

export type AuthorStatusType = typeof AUTHOR_STATUS[keyof typeof AUTHOR_STATUS]