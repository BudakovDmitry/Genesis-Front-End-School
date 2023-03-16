import * as Styled from 'src/components/Lesson/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StatusLesson } from 'src/types'
import { Player, BigPlayButton } from 'video-react'

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
  return (
    <Accordion disableGutters disabled={status === StatusLesson.LOCKED}>
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
        <Player poster={`${previewImageLink}/${order}.webp`}>
          <source src={link} />
          <BigPlayButton position="center" />
        </Player>
      </AccordionDetails>
    </Accordion>
  )
}

export default Lesson
