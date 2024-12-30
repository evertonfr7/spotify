
import { api } from '../../api'
import { Artist, ArtistRequest } from './types'

export const getArtist = async ({
  id,
}: ArtistRequest): Promise<Artist> => {
  const response = await api.get(`/artists/${id}`) as Artist

  return response
}
