import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home component', () => {
  test('renders the home route with correct snapshot', () => {
    const tree = render(<Home />)

    expect(tree).toMatchSnapshot()
  })
})
