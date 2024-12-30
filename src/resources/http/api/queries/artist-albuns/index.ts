
import { ALBUMS_PER_PAGE } from '@/constants'
import { api } from '../../api'
import { ArtistAlbuns, ArtistAlbunsRequest } from './types'

export const getArtistAlbuns = async ({
  id,
  limit = ALBUMS_PER_PAGE,
  offset = 0,
}: ArtistAlbunsRequest): Promise<ArtistAlbuns> => {
  const response = await api.get(`/artists/${id}/albums`, { params: { limit: limit, offset: offset } }) as ArtistAlbuns

  return response
}
