import Artist from '@/components/Artist'
import BaseNavigation from '@/components/layout/BaseNavigation'
import PageTitle from '@/components/layout/PageTitle'

export function Artists(): JSX.Element {
  return (
    <BaseNavigation>
      <PageTitle
        title="Top Artistas"
        subtitle="Aqui você encontra seus artistas preferidos"
      />
      <div>
        <Artist id="artist-1" href="/artist/1" name="Test Artist" image="" />
      </div>
    </BaseNavigation>
  )
}
