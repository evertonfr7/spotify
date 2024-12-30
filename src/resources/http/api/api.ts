import { API_ENDPOINT } from '@/constants'
import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Cookies.get('spotify_token')}`
  }
})
