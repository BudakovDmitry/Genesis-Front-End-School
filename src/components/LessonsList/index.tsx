import Lesson from 'src/components/Lesson'
import * as Styled from 'src/components/LessonsList/styles'

import { LessonType } from 'src/types'

type LessonsListProps = {
  lessons: LessonType[]
}

const LessonsList = ({ lessons = [] }: LessonsListProps) => {
  return (
    <Styled.LessonsListContainer>
      {lessons.map((lesson: LessonType, index: number) => (
        <Lesson
          key={lesson.id}
          title={lesson.title}
          status={lesson.status}
          previewImageLink={lesson.previewImageLink}
          link={lesson.link}
          lessonNumber={index + 1}
          order={lesson.order}
          index={index}
        />
      ))}
    </Styled.LessonsListContainer>
  )
}

export default LessonsList
