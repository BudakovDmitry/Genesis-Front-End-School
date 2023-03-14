import { createHashRouter } from 'react-router-dom'
import Course from 'src/pages/Course'
import AllCourses from 'src/pages/AllCourses'
import Error from 'src/pages/Error'

export const router = createHashRouter([
  {
    path: '/',
    element: <AllCourses />,
    errorElement: <Error />,
  },
  {
    path: '/:id',
    element: <Course />,
  },
])
