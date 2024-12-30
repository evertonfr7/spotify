
export interface ArtistAlbunsRequest {
  id: string
  limit?: number
  offset?: number
}

export interface Album {
  id: string
  name: string
  release_date: string
  images: { url: string }[]
}
export interface ArtistAlbuns {
  data: {
    offset: number
    items: Album[]
  }
}
