
export interface ArtistRequest {
  id: string
  limit?: number
  offset?: number
}

export interface Artist {
  data: {
    id: string
    name: string
    release_date: string
    images: { url: string }[]
  }
}
