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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Cookies from 'js-cookie'
import { MutationCache, QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 2000,
      retry: 0,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  }),
})

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
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries()
        })
      }}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/artistas" element={<Artists />} />
            <Route path="/artista/:id" element={<Artist />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/perfil" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </PersistQueryClientProvider>
  )
}

export default App
