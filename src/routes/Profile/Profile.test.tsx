import { render } from '@testing-library/react'
import { Profile } from './Profile'

describe('Profile component', () => {
  test('renders the profile route with correct snapshot', () => {
    const tree = render(<Profile />)

    expect(tree).toMatchSnapshot()
  })
})
