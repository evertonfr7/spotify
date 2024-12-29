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

  test('calls expected logic when "Criar" button is clicked', () => {
    const onCreateMock = jest.fn()
    render(<PlaylistModal isOpen={true} onClose={onCloseMock} />)

    const createButton = screen.getByText(/Criar/i)
    fireEvent.click(createButton)

    expect(onCreateMock).not.toHaveBeenCalled()
  })

  test('applies correct classes to modal elements when isOpen changes', () => {
    const { rerender } = render(
      <PlaylistModal isOpen={true} onClose={onCloseMock} />,
    )

    const modalContent = screen.getByTestId('playlist-modal-content')
    expect(modalContent).toHaveClass('flex')

    rerender(<PlaylistModal isOpen={false} onClose={onCloseMock} />)
    expect(modalContent).toHaveClass(
      'relative rounded-[32px] bg-[#303030] p-6 md:p-8 h-[250px] md:w-[600px] md:h-[346px] flex flex-col justify-center gap-4',
    )
  })
})
