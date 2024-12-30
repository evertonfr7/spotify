
import { api } from "../../api"
import { Artists, TopUserArtistsRequest } from "./types"

export const getTopUserArtists = async ({
  limit = 5,
  offset = 0,
}: TopUserArtistsRequest): Promise<Artists> => {
  const response = await api.get('/me/top/artists', { params: { limit: limit, offset: offset } }) as Artists

  return response
}
