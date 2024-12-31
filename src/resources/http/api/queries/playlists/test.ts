import { api } from '../../api'
import { getUserPlaylists } from './index'
import { PLAYLISTS_PER_PAGE } from '@/constants'

jest.mock('../../api')

describe('getUserPlaylists', () => {
  const mockedApi = api as jest.Mocked<typeof api>

  it('should return playlists data when API call is successful', async () => {
    const mockPlaylists = {
      items: [
        { id: '1', name: 'Playlist 1' },
        { id: '2', name: 'Playlist 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockPlaylists)

    const result = await getUserPlaylists({})

    expect(mockedApi.get).toHaveBeenCalledWith('/me/playlists', {
      params: { limit: PLAYLISTS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockPlaylists)
  })

  it('should allow custom limit and offset parameters', async () => {
    const mockPlaylists = {
      items: [
        { id: '3', name: 'Playlist 3' },
        { id: '4', name: 'Playlist 4' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockPlaylists)

    const result = await getUserPlaylists({ limit: 5, offset: 10 })

    expect(mockedApi.get).toHaveBeenCalledWith('/me/playlists', {
      params: { limit: 5, offset: 10 },
    })
    expect(result).toEqual(mockPlaylists)
  })

  it('should throw an error when API call fails', async () => {
    const mockError = new Error('Network Error')
    mockedApi.get.mockRejectedValue(mockError)

    await expect(getUserPlaylists({})).rejects.toThrow('Network Error')

    expect(mockedApi.get).toHaveBeenCalledWith('/me/playlists', {
      params: { limit: PLAYLISTS_PER_PAGE, offset: 0 },
    })
  })

  it('should use default limit and offset when not provided', async () => {
    const mockPlaylists = {
      items: [
        { id: '1', name: 'Playlist 1' },
        { id: '2', name: 'Playlist 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockPlaylists)

    const result = await getUserPlaylists({})

    expect(mockedApi.get).toHaveBeenCalledWith('/me/playlists', {
      params: { limit: PLAYLISTS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockPlaylists)
  })
})
