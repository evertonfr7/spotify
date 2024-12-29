import ReactDOM from 'react-dom'
import { PlaylistModalProps } from './PlaylistModal.types'
import { useState } from 'react'
import Typography from '../ui/Typography'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Close } from '../ui/icons'

export function PlaylistModal({ isOpen, onClose }: PlaylistModalProps) {
  const [open, setOpen] = useState(isOpen)
  if (!isOpen) return null

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return ReactDOM.createPortal(
    <div
      data-testid="playlist-modal-background"
      className={`fixed inset-0 p-6 bg-black bg-opacity-40 flex justify-center items-center z-50 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={handleClose}
    >
      <div
        data-testid="playlist-modal-content"
        className="relative rounded-[32px] bg-[#303030] p-6 md:p-8 h-[250px] md:w-[600px] md:h-[346px] flex flex-col justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full items-center justify-between pt-7 md:pt-16">
          <div className="w-full">
            <Typography className="text-center mb-4 md:mb-6">
              Dê um nome a sua playlist
            </Typography>
            <Input />
          </div>

          <Button className="w-[fit-content]">Criar</Button>
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
