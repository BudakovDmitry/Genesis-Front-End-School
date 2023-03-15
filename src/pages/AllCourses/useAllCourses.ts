import { usePage } from "src/hooks/usePage"
import { useCourses } from "src/hooks/useCourses"

export const useAllCourses = () => {
  const { navigate } = usePage()
  const { data, isLoading } = useCourses();

    return {
      data,
      isLoading
    }
}