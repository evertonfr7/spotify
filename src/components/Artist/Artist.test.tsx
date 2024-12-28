import { render, screen } from '@testing-library/react'
import { Artist } from './Artist'
import '@testing-library/jest-dom'

describe('Artist Component', () => {
  const mockProps = {
    id: 'artist-1',
    href: '/artist/1',
    name: 'Test Artist',
    image: '/images/test-artist.jpg',
  }

  test('renders the artist name correctly', () => {
    render(<Artist {...mockProps} />)
    const artistName = screen.getByText(mockProps.name)
    expect(artistName).toBeInTheDocument()
  })

  test('renders the artist avatar with correct alt text and src', () => {
    render(<Artist {...mockProps} />)
    const avatarImage = screen.getByRole('img', { name: mockProps.name })
    expect(avatarImage).toHaveAttribute('src', mockProps.image)
    expect(avatarImage).toHaveAttribute('alt', mockProps.name)
  })

  test('renders the link with correct href', () => {
    render(<Artist {...mockProps} />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', mockProps.href)
  })

  test('applies the correct class names to the container', () => {
    render(<Artist {...mockProps} />)
    const container = screen.getByRole('link').firstChild
    expect(container).toHaveClass('flex items-center gap-2 md:gap-4 text-white')
  })
})
