import * as Styled from 'src/components/CoursePreview/styles'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

type CoursePreviewProps = {
  title: string
  description: string
  lessonsCount: number
  previewImageLink: string
  rating: number
  skills?: string[]
}

const CoursePreview = ({
  title = '',
  description = '',
  lessonsCount = 0,
  previewImageLink = '',
  rating = 0,
  skills = [],
}: CoursePreviewProps) => {
  return (
    <Styled.CoursePreviewContainer>
      <Styled.CoursePreviewCover>
        <Styled.CoursePreviewImage src={`${previewImageLink}/cover.webp`} />
      </Styled.CoursePreviewCover>
      <Styled.CoursePreviewInfo>
        <Styled.CoursePreviewTitle>{title}</Styled.CoursePreviewTitle>
        <Styled.CoursePreviewRating>
          <Box mr={1}>
            <Rating name="read-only" value={rating} readOnly precision={0.5} />
          </Box>
          <Styled.CoursePreviewRatingText
            color={rating < 3 ? 'red' : rating < 4 ? 'orange' : 'green'}
          >
            {rating}
          </Styled.CoursePreviewRatingText>
        </Styled.CoursePreviewRating>
        <Styled.CoursePreviewCountLessons>
          Count lessons: {lessonsCount}
        </Styled.CoursePreviewCountLessons>
        <Stack
          direction="row"
          alignItems="start"
          mb={2}
          sx={{ flexWrap: 'wrap' }}
        >
          {skills &&
            skills.map((item: string) => (
              <Chip
                key={item}
                label={item}
                variant="outlined"
                color="warning"
                sx={{ marginBottom: 1, marginRight: 1 }}
              />
            ))}
        </Stack>
        <Styled.CoursePreviewDescription>
          {description}
        </Styled.CoursePreviewDescription>
      </Styled.CoursePreviewInfo>
      <Styled.CoursePreviewButtonContainer>
        <Button variant="contained" color="warning" size="large">
          Details
        </Button>
      </Styled.CoursePreviewButtonContainer>
    </Styled.CoursePreviewContainer>
  )
}

export default CoursePreview
