
import { api } from '../../api'
import { Me } from './types'

export const getMe = async (): Promise<Me> => {
  const response = await api.get('/me') as Me

  return response
}
