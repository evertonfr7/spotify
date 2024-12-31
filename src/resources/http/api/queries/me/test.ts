import { api } from '../../api'
import { getMe } from './index'

jest.mock('../../api')

describe('getMe', () => {
  const mockedApi = api as jest.Mocked<typeof api>

  it('should return the user data when API call is successful', async () => {
    const mockMe = {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@example.com',
    }

    mockedApi.get.mockResolvedValue(mockMe)

    const result = await getMe()

    expect(mockedApi.get).toHaveBeenCalledWith('/me')
    expect(result).toEqual(mockMe)
  })

  it('should throw an error when API call fails', async () => {
    const mockError = new Error('Network Error')
    mockedApi.get.mockRejectedValue(mockError)

    await expect(getMe()).rejects.toThrow('Network Error')

    expect(mockedApi.get).toHaveBeenCalledWith('/me')
  })
})
