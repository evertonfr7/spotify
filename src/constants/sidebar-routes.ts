import { Disc, House, Play, User } from '../components/ui/icons'

export const sidebarRoutes = [
  {
    name: 'Home',
    path: '/',
    icon: House,
  },
  {
    name: 'Artistas',
    path: '/artistas',
    icon: Disc,
  },
  {
    name: 'Playlists',
    path: '/playlists',
    icon: Play,
  },
  {
    name: 'Perfil',
    path: '/perfil',
    icon: User,
  },
]
