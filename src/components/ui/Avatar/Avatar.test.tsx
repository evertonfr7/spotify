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
    render(
      <Avatar
        src="https://example.com/avatar.jpg"
        title="Avatar"
        alt="Avatar"
      />,
    )
    const avatarImage = screen.getByAltText(/Avatar/i)
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg')
  })

  test('renders fallback letter when no src is provided', () => {
    render(<Avatar alt="Fallback Avatar" title="Fallback Avatar" />)
    const avatarFallback = screen.getByText(/F/i)
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
    expect(avatarImage).toHaveClass(
      'rounded-full aspect-auto object-cover flex items-center justify-center font-default font-normal text-black text-[24px] md:text-[42px] w-[32px] h-[32px] md:w-[48px] md:h-[48px]',
    )

    rerender(
      <Avatar
        src="https://example.com/avatar.jpg"
        size="md"
        alt="User Avatar"
      />,
    )
    avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toHaveClass(
      'rounded-full aspect-auto object-cover flex items-center justify-center font-default font-normal text-black text-[24px] md:text-[42px] w-[48px] h-[48px] md:w-[64px] md:h-[64px]',
    )

    rerender(
      <Avatar
        src="https://example.com/avatar.jpg"
        size="lg"
        alt="User Avatar"
      />,
    )
    avatarImage = screen.getByAltText(/User Avatar/i)
    expect(avatarImage).toHaveClass(
      'rounded-full aspect-auto object-cover flex items-center justify-center font-default font-normal text-black text-[24px] md:text-[42px] w-[64px] h-[64px] md:w-[128px] md:h-[128px]',
    )
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
    render(<Avatar alt="Fallback Avatar" title="Fallback Avatar" />)
    const fallbackText = screen.getByText(/F/i)
    expect(fallbackText).toBeInTheDocument()
  })
})
