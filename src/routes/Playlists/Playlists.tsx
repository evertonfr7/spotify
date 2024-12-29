import Cover from '@/components/Cover'
import BaseNavigation from '@/components/layout/BaseNavigation'
import PageTitle from '@/components/layout/PageTitle'
import PlaylistModal from '@/components/PlaylistModal'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export function Playlists(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const handleCreatePlaylist = () => {
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <BaseNavigation>
        <PageTitle
          title="Minhas Playlists"
          subtitle="Sua coleção pessoal de playlists"
        >
          <Button onClick={handleCreatePlaylist}>Criar playlist</Button>
        </PageTitle>
        <div>
          <Cover
            id="playlist-1"
            image=""
            title="Test Playlist"
            subtitle="lalalal"
          />
        </div>
      </BaseNavigation>
      <PlaylistModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  )
}
