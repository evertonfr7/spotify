import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo component', () => {
  test('renders the logo with correct snapshot', () => {
    const tree = render(<Logo />)

    expect(tree).toMatchSnapshot()
  })

  test('renders the logo with correct attributes', () => {
    render(<Logo />)

    const logoImg = screen.getByAltText('Spotify Logo')

    expect(logoImg).toBeInTheDocument()
    expect(logoImg).toHaveAttribute('title', 'Spotify')
  })
})
