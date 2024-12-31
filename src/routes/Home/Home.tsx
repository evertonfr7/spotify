import BaseNavigation from '@/components/layout/BaseNavigation'
import Typography from '@/components/ui/Typography'

export function Home(): JSX.Element {
  return (
    <BaseNavigation>
      <div className="flex h-[100vh] flex-col justify-center items-center gap-4">
        <Typography className="text-white text-lg">
          Seja bem-vindo ao Spotify Luizalabs Challenge!
        </Typography>
      </div>
    </BaseNavigation>
  )
}
