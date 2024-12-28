import { render } from '@testing-library/react'
import { Login } from './Login'

describe('Login component', () => {
  test('renders the login route with correct snapshot', () => {
    const tree = render(<Login />)

    expect(tree).toMatchSnapshot()
  })
})
