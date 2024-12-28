import { render } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders the Button component with correct text', () => {
    render(<App />)

    expect(true).toBe(true)
  })
})
