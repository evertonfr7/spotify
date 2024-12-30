import { render } from '@testing-library/react'
import { Artists } from './Artists'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('Artists component', () => {
  test('renders the artists route with correct snapshot', () => {
    const tree = render(
      <QueryClientProvider client={queryClient}>
        <Artists />
      </QueryClientProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
