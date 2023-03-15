import { useAllCourses } from 'src/pages/AllCourses/useAllCourses'
import * as Styled from 'src/pages/AllCourses/styles'
import Loader from 'src/components/Loader'
import CoursePreview from 'src/components/CoursePreview'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import { CourseType } from 'src/types'

const AllCourses = () => {
  const { data, isLoading } = useAllCourses()

  if (isLoading) return <Loader />

  console.log(data.courses)

  return (
    <Styled.AllCoursesContainer>
      <Styled.AllCoursesTitle>All Courses</Styled.AllCoursesTitle>
      <Styled.CoursesPreview>
        {data.courses.slice(0, 9).map((course: CourseType) => (
          <CoursePreview
            key={course.id}
            previewImageLink={course.previewImageLink}
            title={course.title}
            description={course.description}
            lessonsCount={course.lessonsCount}
            rating={course.rating}
            skills={course.meta.skills}
          />
        ))}
      </Styled.CoursesPreview>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Styled.AllCoursesContainer>
  )
}

export default AllCourses
