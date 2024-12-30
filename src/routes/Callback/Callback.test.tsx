import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Callback } from './Callback'

describe('Callback Component', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('renders Logo and Typography components', () => {
    render(
      <MemoryRouter>
        <Callback />
      </MemoryRouter>,
    )

    expect(screen.getByText(/Redirecionando\.../i)).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })

  it('navigates to the home page after 1 second', () => {
    const mockNavigate = jest.fn()

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }))

    act(() => {
      render(
        <MemoryRouter>
          <Callback />
        </MemoryRouter>,
      )
    })

    expect(mockNavigate).not.toHaveBeenCalled()

    act(() => {
      jest.runAllTimers()
    })

    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    }, 1000)
  })
})
