import {
  useNavigate,
  useParams,
} from 'react-router-dom'

export const usePage = () => {
  const navigate = useNavigate();
  const params = useParams()

  return {
    navigate,
    params
  }
}
