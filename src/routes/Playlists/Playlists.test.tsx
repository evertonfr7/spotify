import { render, screen, fireEvent } from '@testing-library/react'
import { Playlists } from './Playlists'

describe('Playlists Component', () => {
  test('renders the playlists route with correct snapshot', () => {
    const tree = render(<Playlists />)

    expect(tree).toMatchSnapshot()
  })

  test('renders the base navigation with title and subtitle', () => {
    render(<Playlists />)
    expect(screen.getByText('Minhas Playlists')).toBeInTheDocument()
    expect(
      screen.getByText('Sua coleção pessoal de playlists'),
    ).toBeInTheDocument()
  })

  test('renders the "Criar playlist" button', () => {
    render(<Playlists />)
    const createButton = screen.getByText('Criar playlist')
    expect(createButton).toBeInTheDocument()
  })

  test('renders a playlist cover', () => {
    render(<Playlists />)
    expect(screen.getByText('Test Playlist')).toBeInTheDocument()
    expect(screen.getByText('lalalal')).toBeInTheDocument()
  })

  test('does not render PlaylistModal initially', () => {
    render(<Playlists />)
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })

  test('opens PlaylistModal when "Criar playlist" button is clicked', () => {
    render(<Playlists />)
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    expect(screen.getByText('Dê um nome a sua playlist')).toBeInTheDocument()
  })

  test('closes PlaylistModal when close button is clicked', () => {
    render(<Playlists />)
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    const closeButton = screen.getByTestId('playlist-modal-close-button')
    fireEvent.click(closeButton)
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })

  test('closes PlaylistModal when clicking on the background', () => {
    render(<Playlists />)
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    const modalBackground = screen.getByTestId('playlist-modal-background')
    fireEvent.click(modalBackground)
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })
})
