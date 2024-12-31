import ReactDOM from 'react-dom'
import { PlaylistModalProps } from './PlaylistModal.types'
import Typography from '../ui/Typography'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Close } from '../ui/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createPlaylist } from '@/resources/http/api/mutations/create-playlist'
import { useState } from 'react'
import { getMe } from '@/resources/http/api/queries/me'

export function PlaylistModal({
  isOpen,
  onClose,
}: PlaylistModalProps): JSX.Element | null {
  const [playlistName, setPlaylistName] = useState('')

  const handleClose = () => {
    onClose()
  }

  const { data: response } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const mutation = useMutation({
    mutationFn: () =>
      createPlaylist({
        user_id: response?.data?.id as string,
        name: playlistName,
        description: '',
      }),
    onSuccess: () => {
      window.location.href = `/playlists`
    },
  })

  if (!isOpen) return null

  if (mutation.isSuccess) {
    handleClose()
  }

  return ReactDOM.createPortal(
    <div
      data-testid="playlist-modal-background"
      className={`fixed inset-0 p-6 bg-black bg-opacity-40 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
      onClick={handleClose}
      tabIndex={-1}
    >
      <div
        data-testid="playlist-modal-content"
        className="relative rounded-[32px] bg-[#303030] p-6 md:p-8 h-[250px] md:w-[600px] md:h-[346px] flex flex-col justify-center gap-4"
        aria-modal="true"
        aria-labelledby="playlist-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full items-center justify-between pt-7 md:pt-16">
          <div className="w-full">
            <Typography className="text-center mb-4 md:mb-6">
              Dê um nome a sua playlist
            </Typography>
            <Input
              data-testid="playlist-modal-input"
              onChange={(e) => {
                setPlaylistName(e.target.value)
              }}
            />
          </div>

          <Button
            className="w-[fit-content]"
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
          >
            Criar
          </Button>
        </div>

        <button
          data-testid="playlist-modal-close-button"
          className="absolute top-4 right-4"
          onClick={handleClose}
        >
          <Close className=" text-white w-4 h-4  md:w-6 md:h-6" />
        </button>
      </div>
    </div>,
    document.body,
  )
}

export default PlaylistModal
