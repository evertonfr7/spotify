import { api } from '../../api'
import { getArtistAlbuns } from './index'
import { ALBUMS_PER_PAGE } from '@/constants'

jest.mock('../../api')

describe('getArtistAlbuns', () => {
  const mockedApi = api as jest.Mocked<typeof api>

  it('should return the albums data when API call is successful', async () => {
    const mockAlbums = {
      items: [
        { id: '1', name: 'Album 1' },
        { id: '2', name: 'Album 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockAlbums)

    const result = await getArtistAlbuns({ id: '123' })

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123/albums', {
      params: { limit: ALBUMS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockAlbums)
  })

  it('should allow custom limit and offset parameters', async () => {
    const mockAlbums = {
      items: [
        { id: '3', name: 'Album 3' },
        { id: '4', name: 'Album 4' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockAlbums)

    const result = await getArtistAlbuns({ id: '123', limit: 5, offset: 10 })

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123/albums', {
      params: { limit: 5, offset: 10 },
    })
    expect(result).toEqual(mockAlbums)
  })

  it('should throw an error when API call fails', async () => {
    const mockError = new Error('Network Error')
    mockedApi.get.mockRejectedValue(mockError)

    await expect(getArtistAlbuns({ id: '123' })).rejects.toThrow('Network Error')

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123/albums', {
      params: { limit: ALBUMS_PER_PAGE, offset: 0 },
    })
  })

  it('should use default limit and offset when not provided', async () => {
    const mockAlbums = {
      items: [
        { id: '1', name: 'Album 1' },
        { id: '2', name: 'Album 2' },
      ],
      total: 2,
    }

    mockedApi.get.mockResolvedValue(mockAlbums)

    const result = await getArtistAlbuns({ id: '123' })

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123/albums', {
      params: { limit: ALBUMS_PER_PAGE, offset: 0 },
    })
    expect(result).toEqual(mockAlbums)
  })
})
