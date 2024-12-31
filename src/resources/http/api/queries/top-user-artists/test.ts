import { api } from '../../api'
import { getTopUserArtists } from './index'
import { ARTISTS_PER_PAGE } from '@/constants'

jest.mock('../../api')

describe('getTopUserArtists', () => {
  const mockedApi = api as jest.Mocked<typeof api>

  it('should return artists data when API call is successful', async () => {
    const mockArtists = {
      items: [
        { id: '1', name: 'Artist 1' },
        { id: '2', name: 'Artist 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockArtists)

    const result = await getTopUserArtists({})

    expect(mockedApi.get).toHaveBeenCalledWith('/me/top/artists', {
      params: { limit: ARTISTS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockArtists)
  })

  it('should allow custom limit and offset parameters', async () => {
    const mockArtists = {
      items: [
        { id: '3', name: 'Artist 3' },
        { id: '4', name: 'Artist 4' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockArtists)

    const result = await getTopUserArtists({ limit: 5, offset: 10 })

    expect(mockedApi.get).toHaveBeenCalledWith('/me/top/artists', {
      params: { limit: 5, offset: 10 },
    })
    expect(result).toEqual(mockArtists)
  })

  it('should throw an error when API call fails', async () => {
    const mockError = new Error('Network Error')
    mockedApi.get.mockRejectedValue(mockError)

    await expect(getTopUserArtists({})).rejects.toThrow('Network Error')

    expect(mockedApi.get).toHaveBeenCalledWith('/me/top/artists', {
      params: { limit: ARTISTS_PER_PAGE, offset: 0 },
    })
  })

  it('should use default limit and offset when not provided', async () => {
    const mockArtists = {
      items: [
        { id: '1', name: 'Artist 1' },
        { id: '2', name: 'Artist 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockArtists)

    const result = await getTopUserArtists({})

    expect(mockedApi.get).toHaveBeenCalledWith('/me/top/artists', {
      params: { limit: ARTISTS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockArtists)
  })
})
