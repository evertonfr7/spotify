import { render } from '@testing-library/react'
import { BaseNavigation } from './BaseNavigation'

describe('BaseNavigation component', () => {
  test('renders the base navigation route with correct snapshot', () => {
    const tree = render(<BaseNavigation>children</BaseNavigation>)

    expect(tree).toMatchSnapshot()
  })
})
