import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar Component', () => {
  test('renders the avatar with correct snapshot', () => {
    const tree = render(
      <Avatar src="https://example.com/avatar.jpg" alt="Avatar" />,
    )

    expect(tree).toMatchSnapshot()
  })
  test('renders avatar with image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />)
    const avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg')
  })

  test('renders fallback letter when no src is provided', () => {
    render(<Avatar alt="Fallback Avatar" />)
    const avatarFallback = screen.getByText(/S/i)
    expect(avatarFallback).toBeInTheDocument()
  })

  test('applies correct class based on size prop', () => {
    const { rerender } = render(
      <Avatar
        src="https://example.com/avatar.jpg"
        size="sm"
        alt="User Avatar"
      />,
    )
    let avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toHaveClass('w-[32px] h-[32px]')

    rerender(
      <Avatar
        src="https://example.com/avatar.jpg"
        size="md"
        alt="User Avatar"
      />,
    )
    avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toHaveClass('w-[64px] h-[64px]')

    rerender(
      <Avatar
        src="https://example.com/avatar.jpg"
        size="lg"
        alt="User Avatar"
      />,
    )
    avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toHaveClass('w-[128px] h-[128px]')
  })

  test('applies alt, title, and aria-label attributes correctly', () => {
    render(
      <Avatar
        src="https://example.com/avatar.jpg"
        alt="User Avatar"
        title="Avatar of User"
        ariaLabel="Avatar of User"
      />,
    )
    const avatarImage = screen.getByAltText(/User Avatar/i)

    expect(avatarImage).toHaveAttribute('alt', 'User Avatar')
    expect(avatarImage).toHaveAttribute('title', 'Avatar of User')
    expect(avatarImage).toHaveAttribute('aria-label', 'Avatar of User')
  })

  test('renders default fallback text when no src is provided', () => {
    render(<Avatar alt="Fallback Avatar" />)
    const fallbackText = screen.getByText(/S/i)
    expect(fallbackText).toBeInTheDocument()
  })
})
