import { act, render } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders the Button component with correct text', () => {
    const tree = act(() => {
      render(<App />)
    })

    expect(tree).toMatchSnapshot()
  })
})
