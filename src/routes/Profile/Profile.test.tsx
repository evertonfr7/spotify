import { render } from '@testing-library/react'
import { Profile } from './Profile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('Profile component', () => {
  test('renders the profile route with correct snapshot', () => {
    const tree = render(
      <QueryClientProvider client={queryClient}>
        <Profile />
      </QueryClientProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
