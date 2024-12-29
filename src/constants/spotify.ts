const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'
const SHOW_DIALOG = true
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-top-read',
  'user-library-read',
  'user-library-modify',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
  'streaming',
  'user-follow-read',
  'user-follow-modify',
].join(' ')

export const LOGIN_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}`
