import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Disc, House, Play, User, Download, ArrowLeft, Close } from './index'

describe('Icons components', () => {
  test('renders the icons with correct snapshot', () => {
    const tree = render(
      <div className="text-white">
        <House className="w-10 h-10" />
        <Disc className="w-10 h-10" />
        <Play className="w-10 h-10" />
        <User className="w-10 h-10" />
        <Download className="w-10 h-10" />
        <ArrowLeft className="w-10 h-10" />
        <Close className="w-10 h-10" />
      </div>,
    )

    expect(tree).toMatchSnapshot()
  })
})
