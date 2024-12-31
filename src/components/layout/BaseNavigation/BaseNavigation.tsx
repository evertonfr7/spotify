import useOnlineStatus from '@/hooks/useOnlineStatus'
import { Sidebar } from '../Sidebar/Sidebar'
import { BaseNavigationProps } from './BaseNavigation.types'
import Typography from '@/components/ui/Typography'
import { Offline } from '@/components/ui/icons'

export function BaseNavigation({ children }: BaseNavigationProps): JSX.Element {
  const isOnline = useOnlineStatus()

  if (!isOnline) {
    return (
      <div className="w-full h-[100dvh] flex justify-between">
        <Sidebar />
        <div className="flex flex-col gap-4 justify-center items-center w-full h-screen text-white p-4 md:p-8">
          <Offline className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
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
