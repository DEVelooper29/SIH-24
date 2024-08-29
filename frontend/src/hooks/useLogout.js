
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
    const navigate = useNavigate();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')
    navigate('/login')
    window.location.reload();
  }

  return { logout }
}