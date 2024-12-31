import { Sidebar } from '../Sidebar/Sidebar'
import { BaseNavigationProps } from './BaseNavigation.types'

export function BaseNavigation({ children }: BaseNavigationProps): JSX.Element {
  return (
    <div className="w-full h-[100dvh] flex justify-between">
      <Sidebar />
      <div className="w-full h-screen text-white p-4 md:p-8">{children}</div>
    </div>
  )
}
