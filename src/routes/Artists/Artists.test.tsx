import { render } from '@testing-library/react'
import { Artists } from './Artists'

describe('Artists component', () => {
  test('renders the artists route with correct snapshot', () => {
    const tree = render(<Artists />)

    expect(tree).toMatchSnapshot()
  })
})
