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