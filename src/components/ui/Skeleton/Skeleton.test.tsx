import { render, screen } from '@testing-library/react'
import { Skeleton } from './Skeleton'

describe('Skeleton component', () => {
  test('renders with default styles', () => {
    render(<Skeleton className="h-8 w-full" />)

    const skeletonElement = screen.getByRole('presentation')
    expect(skeletonElement).toHaveClass('animate-pulse')
    expect(skeletonElement).toHaveClass('bg-gray-200')
    expect(skeletonElement).toHaveClass('rounded')
    expect(skeletonElement).toHaveClass('h-8')
    expect(skeletonElement).toHaveClass('w-full')
  })

  test('renders with additional className', () => {
    render(<Skeleton className="h-8 w-1/2" />)

    const skeletonElement = screen.getByRole('presentation')
    expect(skeletonElement).toHaveClass('h-8')
    expect(skeletonElement).toHaveClass('w-1/2')
  })

  test('renders as a circle when "circle" prop is true', () => {
    render(<Skeleton className="h-8 w-8" circle />)

    const skeletonElement = screen.getByRole('presentation')
    expect(skeletonElement).toHaveClass('rounded-full')
  })

  test('does not render as a circle when "circle" prop is false', () => {
    render(<Skeleton className="h-8 w-8" circle={false} />)

    const skeletonElement = screen.getByRole('presentation')
    expect(skeletonElement).not.toHaveClass('rounded-full')
  })
})
