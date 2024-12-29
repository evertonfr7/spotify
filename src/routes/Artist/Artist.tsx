import Cover from '@/components/Cover'
import BaseNavigation from '@/components/layout/BaseNavigation'
import Avatar from '@/components/ui/Avatar'
import { ArrowLeft } from '@/components/ui/icons'
import Typography from '@/components/ui/Typography'

export function Artist(): JSX.Element {
  return (
    <BaseNavigation>
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <a href="/search">
          <div className="flex items-center gap-2">
            <ArrowLeft />
            <Typography className="font-bold">Artista</Typography>
          </div>
        </a>
        <Avatar alt="User Avatar" />
      </div>
      <div>
        <Cover id="1" image="" title="Test Title" subtitle="Test Subtitle" />
      </div>
    </BaseNavigation>
  )
}
