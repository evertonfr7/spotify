import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle Component', () => {
  test('renders the page title with correct snapshot', () => {
    const tree = render(
      <PageTitle title="Test Title" subtitle="Test Subtitle" />,
    )

    expect(tree).toMatchSnapshot()
  })
  test('renders title correctly', () => {
    render(<PageTitle title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  test('renders subtitle when provided', () => {
    render(<PageTitle title="Test Title" subtitle="Test Subtitle" />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  test('does not render subtitle when not provided', () => {
    render(<PageTitle title="Test Title" />)
    expect(screen.queryByText('Test Subtitle')).toBeNull()
  })

  test('renders children when provided', () => {
    render(
      <PageTitle title="Test Title">
        <button>Click Me</button>
      </PageTitle>,
    )
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  test('does not render children when not provided', () => {
    render(<PageTitle title="Test Title" />)
    expect(screen.queryByRole('button')).toBeNull()
  })

  test('renders with correct structure', () => {
    render(<PageTitle title="Test Title" subtitle="Test Subtitle" />)
    const title = screen.getByText('Test Title')
    const subtitle = screen.getByText('Test Subtitle')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(title.tagName.toLowerCase()).toBe('h1') // Presume que Typography com `variant="title"` usa `h1`.
    expect(subtitle.tagName.toLowerCase()).toBe('h2') // Presume que Typography com `variant="subtitle"` usa `h2`.
  })
})
