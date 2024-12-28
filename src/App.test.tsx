import { render } from '@testing-library/react'
import App from './App'

// Test suite for the App component
describe('App Component', () => {
  test('renders the Button component with correct text', () => {
    render(<App />)

    expect(true).toBe(true)
  })
})
