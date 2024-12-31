import useOnlineStatus from '@/hooks/useOnlineStatus'
import { Sidebar } from '../Sidebar/Sidebar'
import { BaseNavigationProps } from './BaseNavigation.types'
import Typography from '@/components/ui/Typography'

export function BaseNavigation({ children }: BaseNavigationProps): JSX.Element {
  const isOnline = useOnlineStatus()

  if (!isOnline) {
    return (
      <div className="w-full h-[100dvh] flex justify-between">
        <Sidebar />
        <div className="flex justify-center items-center w-full h-screen text-white p-4 md:p-8">
          <Typography>Você está offline</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[100dvh] flex justify-between">
      <Sidebar />
      <div className="w-full h-screen text-white p-4 md:p-8">{children}</div>
    </div>
  )
}
