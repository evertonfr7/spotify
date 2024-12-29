import { render } from '@testing-library/react'
import { Playlists } from './Playlists'

describe('Playlists component', () => {
  test('renders the playlists route with correct snapshot', () => {
    const tree = render(<Playlists />)

    expect(tree).toMatchSnapshot()
  })
})
