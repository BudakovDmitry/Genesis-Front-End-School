import { useAllCourses } from 'src/pages/AllCourses/useAllCourses'

const AllCourses = () => {
  const { courses } = useAllCourses()
  console.log(courses)
  return <h1>AllCourses</h1>
}

export default AllCourses
