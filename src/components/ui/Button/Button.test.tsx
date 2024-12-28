import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button component', () => {
  test('renders the button with correct snapshot', () => {
    const tree = render(<Button>Click Me</Button>)

    expect(tree).toMatchSnapshot()
  })

  test('renders the button with children text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  test('applies additional class names', () => {
    render(
      <Button className="extra-class" onClick={() => {}}>
        Styled Button
      </Button>,
    )

    const button = screen.getByText('Styled Button')
    expect(button).toHaveClass('extra-class')
  })

  test('disables the button when disabled prop is true', () => {
    render(
      <Button disabled={true} onClick={() => {}}>
        Disabled Button
      </Button>,
    )

    const button = screen.getByText('Disabled Button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50')
    expect(button).toHaveClass('cursor-not-allowed')
  })

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)

    const button = screen.getByText('Clickable Button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('does not call onClick when button is disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button disabled={true} onClick={handleClick}>
        Non-Clickable Button
      </Button>,
    )

    const button = screen.getByText('Non-Clickable Button')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
