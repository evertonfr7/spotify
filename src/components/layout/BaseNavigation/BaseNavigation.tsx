import useOnlineStatus from '@/hooks/useOnlineStatus'
import { Sidebar } from '../Sidebar/Sidebar'
import { BaseNavigationProps } from './BaseNavigation.types'
import Typography from '@/components/ui/Typography'
import { Offline } from '@/components/ui/icons'

export function BaseNavigation({ children }: BaseNavigationProps): JSX.Element {
  const isOnline = useOnlineStatus()

  return (
    <div className="w-full h-[100dvh] flex justify-between">
      <Sidebar />

      <div className="w-full h-screen text-white p-4 md:p-8">
        {!isOnline && (
          <div className="flex items-center justify-center gap-4">
            <Offline />
            <Typography>Voce esta offline</Typography>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
