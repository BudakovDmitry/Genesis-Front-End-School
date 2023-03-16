import { useState, useEffect } from 'react'
import { useCourses } from "src/hooks/useCourses"
import { CourseType } from 'src/types'
import { usePage } from 'src/hooks/usePage'

export const useAllCourses = () => {
  const { data, isLoading } = useCourses();
  const ITEMS_PER_PAGE: number = 10;
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [slicedCourses, setSlicedCourses] = useState([] as CourseType[])
  const { navigate } = usePage();

  const onChangePage = (newPage: number): void => {
    setCurrentPage(newPage)
  }

  const sliceCourses = (): void => {
    if (currentPage === 1) {
      setSlicedCourses(data?.courses.slice(0, ITEMS_PER_PAGE))
    }
    if (currentPage !== 1) {
      setSlicedCourses(data?.courses.slice(ITEMS_PER_PAGE * (currentPage - 1), ITEMS_PER_PAGE * currentPage))
    }
  }

  const openCourse = (id: string): void => {
    navigate(`/${id}`)
  }

  useEffect(() => {
    sliceCourses()
  }, [currentPage])

  return {
    courses: slicedCourses ? slicedCourses : data?.courses.slice(0, ITEMS_PER_PAGE),
    countCourses: data?.courses.length,
    isLoading,
    ITEMS_PER_PAGE,
    currentPage,
    onChangePage,
    openCourse
  }
}