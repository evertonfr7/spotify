import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography component', () => {
  test('renders the typography with correct snapshot', () => {
    const tree = render(<Typography>Default Text</Typography>)

    expect(tree).toMatchSnapshot()
  })

  test('renders with default props', () => {
    render(<Typography>Default Text</Typography>)
    const element = screen.getByText('Default Text')

    expect(element.tagName).toBe('P')
    expect(element).toHaveClass(
      'font-default text-[12px]/[18px] font-medium text-white md:text-[14px]/[20px]',
    )
  })

  test('renders with a custom variant', () => {
    render(<Typography variant="title">Title Text</Typography>)
    const element = screen.getByText('Title Text')

    expect(element).toHaveClass(
      'font-default text-[26px]/[30px] font-semibold md:text-[28px]/[32px]',
    )
  })

  test('renders with a custom "as" prop', () => {
    render(
      <Typography as="h1" variant="title">
        Heading 1
      </Typography>,
    )
    const element = screen.getByText('Heading 1')

    expect(element.tagName).toBe('H1')
    expect(element).toHaveClass(
      'font-default text-[26px]/[30px] font-semibold md:text-[28px]/[32px]',
    )
  })

  test('applies additional className', () => {
    render(<Typography className="custom-class">Custom Class</Typography>)
    const element = screen.getByText('Custom Class')

    expect(element).toHaveClass(
      'font-default text-[12px]/[18px] font-medium text-white md:text-[14px]/[20px] custom-class',
    )
  })

  test('renders with children', () => {
    render(<Typography>Children Text</Typography>)
    const element = screen.getByText('Children Text')

    expect(element).toBeInTheDocument()
  })

  test('renders all variants correctly', () => {
    const variants = {
      title:
        'font-default text-[26px]/[30px] font-semibold md:text-[28px]/[32px]',
      subtitle:
        'font-default text-[14px]/[16px] font-normal text-[#D3DADD] md:text-base/[18px]',
      paragraph:
        'font-default text-[12px]/[18px] font-medium text-white md:text-[14px]/[20px]',
      link: 'font-default text-[12px]/[18px] font-medium underline md:text-[14px]/[20px]',
    }

    Object.entries(variants).forEach(([variant, expectedClass]) => {
      render(
        <Typography variant={variant as keyof typeof variants}>
          {variant} Text
        </Typography>,
      )
      const element = screen.getByText(`${variant} Text`)

      expect(element).toHaveClass(expectedClass)
    })
  })
})
