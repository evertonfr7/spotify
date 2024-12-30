import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './routes/Home'
import Artist from './routes/Artist'
import Artists from './routes/Artists'
import Login from './routes/Login'
import Profile from './routes/Profile'
import Playlists from './routes/Playlists'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { useEffect } from 'react'
import { getTokenFromUrl } from './utils/getTokenFromUrl'

import Callback from './routes/Callback'
import Cookies from 'js-cookie'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  const savedToken = Cookies.get('spotify_token')
  useEffect(() => {
    const _spotifyToken = getTokenFromUrl().access_token
    window.location.hash = ''

    if (_spotifyToken) {
      Cookies.set('spotify_token', _spotifyToken, {
        expires: new Date(Date.now() + 3600 * 1000),
      })
    }
  }, [savedToken])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/artistas" element={<Artists />} />
            <Route path="/artistas/:id" element={<Artist />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/perfil" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
