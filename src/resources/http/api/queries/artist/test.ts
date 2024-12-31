import { api } from '../../api'
import { getArtist } from './index'

jest.mock('../../api')

describe('getArtist', () => {
  const mockedApi = api as jest.Mocked<typeof api>

  it('should return the artist data when API call is successful', async () => {
    const mockArtist = {
      id: '123',
      name: 'Test Artist',
      genre: 'Rock',
    }

    mockedApi.get.mockResolvedValue(mockArtist)

    const result = await getArtist({ id: '123' })

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123')
    expect(result).toEqual(mockArtist)
  })

  it('should throw an error when API call fails', async () => {
    const mockError = new Error('Network Error')
    mockedApi.get.mockRejectedValue(mockError)

    await expect(getArtist({ id: '123' })).rejects.toThrow('Network Error')

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123')
  })

  it('should call the API with the correct URL', async () => {
    const mockArtist = {
      id: '123',
      name: 'Test Artist',
      genre: 'Rock',
    }

    mockedApi.get.mockResolvedValue(mockArtist)

    await getArtist({ id: '123' })

    expect(mockedApi.get).toHaveBeenCalledWith('/artists/123')
  })
})
