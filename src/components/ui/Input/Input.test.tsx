import { render, screen } from '@testing-library/react'
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
})
