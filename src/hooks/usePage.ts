import {
  NavigateFunction,
  Params,
  useNavigate,
  useParams,
} from 'react-router-dom'

export const usePage = () => {
  const navigate: NavigateFunction = useNavigate();
  const params: Readonly<Params<string>> = useParams()

  return {
    navigate,
    params
  }
}
