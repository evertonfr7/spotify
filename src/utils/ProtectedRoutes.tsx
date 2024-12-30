import Cookies from 'js-cookie'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const savedToken = Cookies.get('spotify_token')
  return savedToken ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
