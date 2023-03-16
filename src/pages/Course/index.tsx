import * as Styled from 'src/pages/Course/styles'
import { useCourse } from 'src/pages/Course/useCourse'
import Loader from 'src/components/Loader'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import LessonsList from 'src/components/LessonsList'

const Course = () => {
  const { course, isLoading } = useCourse()

  if (isLoading || !course) return <Loader />

  return (
    <Styled.CourseContainer>
      <Styled.CourseTitle>{course.title}</Styled.CourseTitle>
      <Styled.CourseCover>
        <Styled.CourseImage src={`${course.previewImageLink}/cover.webp`} />
      </Styled.CourseCover>
      <Styled.CourseInfo>
        <Styled.CourseRating>
          <Box mr={1}>
            <Rating
              name="read-only"
              value={course.rating}
              readOnly
              precision={0.5}
            />
          </Box>
          <Styled.CourseRatingText
            color={
              course.rating < 3 ? 'red' : course.rating < 4 ? 'orange' : 'green'
            }
          >
            {course.rating}
          </Styled.CourseRatingText>
        </Styled.CourseRating>
        <Styled.CourseInfoBlock>
          <Stack
            direction="row"
            alignItems="center"
            mb={2}
            sx={{ flexWrap: 'wrap' }}
          >
            <Styled.CourseSkillsText>Skills:</Styled.CourseSkillsText>
            {course.meta.skills &&
              course.meta.skills.map((item: string) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  color="warning"
                  sx={{ marginRight: 1, marginBottom: '10px' }}
                />
              ))}
          </Stack>
          <Styled.CourseDescription>
            {course.description}
          </Styled.CourseDescription>
        </Styled.CourseInfoBlock>
        <LessonsList lessons={course.lessons} />
      </Styled.CourseInfo>
    </Styled.CourseContainer>
  )
}

export default Course
