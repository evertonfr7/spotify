
import { PLAYLISTS_PER_PAGE } from '@/constants'
import { api } from '../../api'
import { Playlists, PlaylistsRequest } from './types'

export const getUserPlaylists = async ({
  limit = PLAYLISTS_PER_PAGE,
  offset = 0 }: PlaylistsRequest): Promise<Playlists> => {
  const response = await api.get('/me/playlists', { params: { limit: limit, offset: offset } }) as Playlists

  return response
}
