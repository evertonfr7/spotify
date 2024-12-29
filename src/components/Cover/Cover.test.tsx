import { render, screen } from '@testing-library/react'
import { Cover } from './Cover'

describe('Cover Component', () => {
  const mockProps = {
    id: '1',
    image: 'test-image.jpg',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  }

  test('renders the cover with correct snapshot', () => {
    const tree = render(<Cover {...mockProps} />)

    expect(tree).toMatchSnapshot()
  })

  test('renders the component with the provided props', () => {
    render(<Cover {...mockProps} />)

    const imageElement = screen.getByRole('img', { name: mockProps.title })
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', mockProps.image)
    expect(imageElement).toHaveAttribute('alt', mockProps.title)

    const titleElement = screen.getByText(mockProps.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('font-normal')

    const subtitleElement = screen.getByText(mockProps.subtitle)
    expect(subtitleElement).toBeInTheDocument()
    expect(subtitleElement).toHaveClass('text-white/80')
  })

  test('applies responsive classes correctly', () => {
    render(<Cover {...mockProps} />)

    const imageElement = screen.getByRole('img', { name: mockProps.title })
    expect(imageElement).toHaveClass(
      'w-[48px] h-[48px] md:w-[72px] md:h-[72px]',
    )

    const subtitleElement = screen.getByText(mockProps.subtitle)
    expect(subtitleElement).toHaveClass(
      'text-[10px]/[18px] md:text-[12px]/[20px]',
    )
  })
})
