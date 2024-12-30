export interface TopUserArtistsRequest {
  limit?: number
  offset?: number
}

export interface Artist {
  id: string
  name: string
  images: { url: string }[]
}

export interface Artists {
  data: {
    offset: number
    items: Artist[]
  }
}
