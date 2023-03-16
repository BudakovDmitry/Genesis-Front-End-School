import { useAllCourses } from 'src/pages/AllCourses/useAllCourses'
import * as Styled from 'src/pages/AllCourses/styles'
import Loader from 'src/components/Loader'
import CoursePreview from 'src/components/CoursePreview'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import { CourseType } from 'src/types'

const AllCourses = () => {
  const {
    courses,
    isLoading,
    ITEMS_PER_PAGE,
    onChangePage,
    currentPage,
    countCourses,
    openCourse,
  } = useAllCourses()

  if (isLoading || !courses) return <Loader />

  return (
    <Styled.AllCoursesContainer>
      <Styled.AllCoursesTitle>All Courses</Styled.AllCoursesTitle>
      <Styled.CoursesPreview>
        {courses.map(
          (course: CourseType): JSX.Element => (
            <CoursePreview
              key={course.id}
              previewImageLink={course.previewImageLink}
              title={course.title}
              description={course.description}
              lessonsCount={course.lessonsCount}
              rating={course.rating}
              skills={course.meta.skills}
              openCourse={openCourse}
              id={course.id}
            />
          ),
        )}
      </Styled.CoursesPreview>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={countCourses ? Math.ceil(countCourses / ITEMS_PER_PAGE) : 0}
          variant="outlined"
          shape="rounded"
          size="large"
          page={currentPage}
          onChange={(event, newPage) => onChangePage(newPage)}
        />
      </Box>
    </Styled.AllCoursesContainer>
  )
}

export default AllCourses
