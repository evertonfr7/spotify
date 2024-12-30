import { render } from '@testing-library/react'
import { Artist } from './Artist'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('Artist component', () => {
  test('renders the artist route with correct snapshot', () => {
    const tree = render(
      <QueryClientProvider client={queryClient}>
        <Artist />
      </QueryClientProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
