import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { sidebarRoutes } from '@/constants'

describe('Sidebar Component', () => {
  test('renders the sidebar route with correct snapshot', () => {
    const tree = render(<Sidebar />)

    expect(tree).toMatchSnapshot()
  })

  test('renders all sidebar routes', () => {
    render(<Sidebar />)

    sidebarRoutes.forEach((route) => {
      const linkElement = screen.getByRole('link', { name: route.name })
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', route.path)
    })
  })

  test('renders the PWA install link', () => {
    render(<Sidebar />)

    const installLink = screen.getByRole('link', { name: /instalar pwa/i })
    expect(installLink).toBeInTheDocument()
    expect(installLink).toHaveAttribute('href', '/')
  })
})
