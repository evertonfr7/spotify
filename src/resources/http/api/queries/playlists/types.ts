export interface PlaylistsRequest {
  limit?: number
  offset?: number
}
export interface Playlist {
  id: string
  name: string
  owner: {
    display_name: string
  }
  images: { url: string }[]
}
export interface Playlists {
  data: {
    offset: number
    items: Playlist[]
  }
}

