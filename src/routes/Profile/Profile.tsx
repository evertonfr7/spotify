import BaseNavigation from '@/components/layout/BaseNavigation'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Typography from '@/components/ui/Typography'

export function Profile(): JSX.Element {
  return (
    <BaseNavigation>
      <div className="flex h-[100vh] flex-col justify-center items-center gap-6">
        <Avatar alt="User Avatar" size="lg" />
        <Typography className="text-[22px]/[18px] md:text-[24px]/[20px]">
          Fulano dos Santos
        </Typography>
        <Button>Logout</Button>
      </div>
    </BaseNavigation>
  )
}
