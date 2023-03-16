export type ReactChildren = {
    children: JSX.Element;
}

export type CourseType = {
  id: string
  title: string
  tags: string[]
  launchDate: string
  status: string
  description: string
  duration: number
  lessonsCount: number
  containsLockedLessons: boolean
  previewImageLink: string
  rating: number
  meta: CourseMetaType
}

export type CourseMetaType = {
  slug: string
  skills: string[]
  courseVideoPreview: CourseVideoPreviewType
}

export type CourseVideoPreviewType = {
  link: string
  duration: number
  previewImageLink: string
}

export type LessonType = {
  id: string
  title: string
  duration: number
  order: number
  type: string
  status: string
  link: string
  previewImageLink: string
  meta: number | null
}

export enum StatusLesson {
  UNLOCKED = 'unlocked',
  LOCKED = 'locked'
}