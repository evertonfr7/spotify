import { render, screen, fireEvent } from '@testing-library/react'
import PlaylistModal from './PlaylistModal'

describe('PlaylistModal Component', () => {
  const onCloseMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the playlist modal with correct snapshot', () => {
    const tree = render(<PlaylistModal isOpen={false} onClose={onCloseMock} />)

    expect(tree).toMatchSnapshot()
  })

  test('does not render when isOpen is false', () => {
    render(<PlaylistModal isOpen={false} onClose={onCloseMock} />)
    expect(screen.queryByText(/Dê um nome a sua playlist/i)).toBeNull()
  })

  test('renders when isOpen is true', () => {
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)
    expect(screen.getByText(/Dê um nome a sua playlist/i)).toBeInTheDocument()
  })

  test('calls onClose when background is clicked', () => {
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)
    const modalBackground = screen.getByTestId('playlist-modal-background')
    fireEvent.click(modalBackground)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  test('does not close when clicking inside the modal', () => {
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)
    const modalContent = screen.getByTestId('playlist-modal-content')
    fireEvent.click(modalContent)
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  test('closes when close button is clicked', () => {
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)
    const closeButton = screen.getByTestId('playlist-modal-close-button')
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  test('renders input field and "Criar" button', () => {
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)
    const inputField = screen.getByRole('textbox')
    const createButton = screen.getByText(/Criar/i)

    expect(inputField).toBeInTheDocument()
    expect(createButton).toBeInTheDocument()
  })
})
