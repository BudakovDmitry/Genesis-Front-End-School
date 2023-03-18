import * as Styled from 'src/components/Lesson/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StatusLesson } from 'src/types'
import ReactHlsPlayer from 'react-hls-player'
import { useLesson } from 'src/components/Lesson/useLesson'

type LessonTypeProps = {
  title: string
  previewImageLink: string
  status: string
  link: string
  lessonNumber: number
  order: number
}

const Lesson = ({
  title = '',
  previewImageLink = '',
  status = '',
  link = '',
  order = 0,
  lessonNumber = 0,
}: LessonTypeProps) => {
  const { expanded, handleChange, playerRef } = useLesson()

  return (
    <Accordion
      disableGutters
      disabled={status === StatusLesson.LOCKED}
      expanded={expanded === `lesson${lessonNumber}`}
      onChange={handleChange(`lesson${lessonNumber}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ padding: '15px' }}
      >
        <Styled.LessonTitle>
          Lesson {lessonNumber}.{' '}
          <Styled.LessonTitleName>{title}</Styled.LessonTitleName>
        </Styled.LessonTitle>
      </AccordionSummary>
      <AccordionDetails>
        <ReactHlsPlayer
          playerRef={playerRef}
          src={link}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
          poster={`${previewImageLink}/lesson-${order}.webp`}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default Lesson
