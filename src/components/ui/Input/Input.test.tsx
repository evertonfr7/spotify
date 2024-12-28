import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './Input'

describe('Input component', () => {
  test('renders the input with correct snapshot', () => {
    const tree = render(<Input />)

    expect(tree).toMatchSnapshot()
  })

  test('renders the input with the correct placeholder', () => {
    render(<Input placeholder="Enter your name" />)
    const inputElement = screen.getByPlaceholderText('Enter your name')
    expect(inputElement).toBeInTheDocument()
  })

  test('applies required attribute when specified', () => {
    render(<Input required />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeRequired()
  })

  test('applies readOnly attribute when specified', () => {
    render(<Input readOnly />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute('readonly')
  })

  test('applies additional classes via className prop', () => {
    render(<Input className="custom-class" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('custom-class')
  })

  test('combines default and custom classes', () => {
    render(<Input className="custom-class" />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('custom-class')
    expect(inputElement).toHaveClass('w-full')
  })

  test('renders with default styles', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass(
      'w-full h-9 bg-transparent border-b border-white/20 outline-none font-default text-[24px]/[20px] font-bold text-white',
    )
  })

  test('fires onFocus event correctly', () => {
    const handleFocus = jest.fn()
    render(<Input placeholder="Focus me" onFocus={handleFocus} />)
    const inputElement = screen.getByPlaceholderText(/Focus me/i)

    fireEvent.focus(inputElement)
    expect(handleFocus).toHaveBeenCalled()
  })

  test('fires onBlur event correctly', () => {
    const handleBlur = jest.fn()
    render(<Input placeholder="Blur me" onBlur={handleBlur} />)
    const inputElement = screen.getByPlaceholderText(/Blur me/i)

    fireEvent.blur(inputElement)
    expect(handleBlur).toHaveBeenCalled()
  })

  test('sets input type correctly', () => {
    render(<Input placeholder="Email" type="email" />)
    const inputElement = screen.getByPlaceholderText(/Email/i)
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  test('sets input type to text by default', () => {
    render(<Input placeholder="Default Type" />)
    const inputElement = screen.getByPlaceholderText(/Default Type/i)
    expect(inputElement).toHaveAttribute('type', 'text')
  })
})
