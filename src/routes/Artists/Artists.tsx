import Artist from '@/components/Artist'
import BaseNavigation from '@/components/layout/BaseNavigation'
import PageTitle from '@/components/layout/PageTitle'
import Button from '@/components/ui/Button'
import Skeleton from '@/components/ui/Skeleton'
import { ARTISTS_PER_PAGE } from '@/constants'
import useOnlineStatus from '@/hooks/useOnlineStatus'
import { getTopUserArtists } from '@/resources/http/api/queries/top-user-artists'
import { Artist as ArtistType } from '@/resources/http/api/queries/top-user-artists/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback } from 'react'

const LoadingArtists = () => {
  return Array.from({ length: ARTISTS_PER_PAGE }).map((_, index) => (
    <div className="flex gap-2 md:gap-4 items-center" key={index}>
      <Skeleton circle className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]" />
      <Skeleton className="w-[100px] h-[18px]" />
    </div>
  ))
}

export function Artists(): JSX.Element {
  const isOnline = useOnlineStatus()
  const limit = ARTISTS_PER_PAGE

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['top-user-artists', `limit=${limit}`],
      queryFn: ({ pageParam = 0 }) =>
        getTopUserArtists({ limit, offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.data.offset + limit,
    })

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <BaseNavigation>
      <PageTitle
        title="Top Artistas"
        subtitle="Aqui você encontra seus artistas preferidos"
      />
      <div className="flex flex-col gap-4 overflow-y-auto pb-4 h-[calc(100dvh-122px)]">
        {isLoading ? (
          <LoadingArtists />
        ) : (
          <>
            {data?.pages.map((page, index) => (
              <div key={index} className="flex flex-col gap-4">
                {page.data.items.map((artist: ArtistType) => (
                  <Artist
                    key={artist.id}
                    id={artist.id}
                    href={`/artista/${artist.id}`}
                    name={artist.name}
                    image={artist.images[0].url}
                  />
                ))}
              </div>
            ))}
            {hasNextPage && (
              <Button
                className="w-[fit-content]"
                disabled={isFetchingNextPage || !isOnline || !hasNextPage}
                onClick={loadMore}
              >
                Carregar mais
              </Button>
            )}
          </>
        )}
      </div>
    </BaseNavigation>
  )
}
