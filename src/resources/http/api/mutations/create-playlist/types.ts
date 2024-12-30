export interface CreatePlaylistRequest {
  user_id: string
  name: string
  description: string
  isPublic?: boolean
}
