import { render } from '@testing-library/react'
import { Artist } from './Artist'

describe('Artist component', () => {
  test('renders the artist route with correct snapshot', () => {
    const tree = render(<Artist />)

    expect(tree).toMatchSnapshot()
  })
})
