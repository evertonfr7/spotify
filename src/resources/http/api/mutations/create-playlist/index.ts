
import { api } from '../../api'
import { CreatePlaylistRequest } from './types'

export const createPlaylist = async (
  {
    user_id,
    name,
    description,
    isPublic = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: CreatePlaylistRequest): Promise<any> => {
  const response = await api.post(`/users/${user_id}/playlists`, { name, description, public: isPublic })

  return response
}
