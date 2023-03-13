import { useNavigate } from "react-router-dom";

export const usePage = () => {
  const navigate = useNavigate();

  return {
    navigate
  }
}
