import { Sidebar } from '../Sidebar/Sidebar'
import { BaseNavigationProps } from './BaseNavigation.types'

export function BaseNavigation({ children }: BaseNavigationProps): JSX.Element {
  return (
    <div className="w-full h-screen flex justify-between">
      <Sidebar />
      <div className="w-full h-screen text-white">{children}</div>
    </div>
  )
}
