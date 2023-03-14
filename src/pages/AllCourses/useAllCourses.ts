import { usePage } from "src/hooks/usePage"
import { useCourses } from "src/hooks/useCourses"

export const useAllCourses = () => {
  const { navigate } = usePage()
  const { courses, mutate } = useCourses();

    return {
      courses
    }
}