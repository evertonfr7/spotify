import { render, screen, fireEvent } from '@testing-library/react'
import { Playlists } from './Playlists'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    useHistory: jest.fn(),
  }
})

describe('Playlists Component', () => {
  test('renders the playlists route with correct snapshot', () => {
    const tree = render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )

    expect(tree).toMatchSnapshot()
  })

  test('renders the base navigation with title and subtitle', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    expect(screen.getByText('Minhas Playlists')).toBeInTheDocument()
    expect(
      screen.getByText('Sua coleção pessoal de playlists'),
    ).toBeInTheDocument()
  })

  test('renders the "Criar playlist" button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    const createButton = screen.getByText('Criar playlist')
    expect(createButton).toBeInTheDocument()
  })

  test('does not render PlaylistModal initially', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })

  test('opens PlaylistModal when "Criar playlist" button is clicked', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    expect(screen.getByText('Dê um nome a sua playlist')).toBeInTheDocument()
  })

  test('closes PlaylistModal when close button is clicked', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    const closeButton = screen.getByTestId('playlist-modal-close-button')
    fireEvent.click(closeButton)
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })

  test('closes PlaylistModal when clicking on the background', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Playlists />
      </QueryClientProvider>,
    )
    const createButton = screen.getByText('Criar playlist')
    fireEvent.click(createButton)
    const modalBackground = screen.getByTestId('playlist-modal-background')
    fireEvent.click(modalBackground)
    expect(screen.queryByText('Dê um nome a sua playlist')).toBeNull()
  })
})
