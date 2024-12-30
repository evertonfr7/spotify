import Artist from '@/components/Artist'
import BaseNavigation from '@/components/layout/BaseNavigation'
import PageTitle from '@/components/layout/PageTitle'
import Button from '@/components/ui/Button'
import Skeleton from '@/components/ui/Skeleton'
import { ARTISTS_PER_PAGE } from '@/constants'
import { getTopUserArtists } from '@/resources/http/api/queries/top-user-artists'
import { Artist as ArtistType } from '@/resources/http/api/queries/top-user-artists/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useRef } from 'react'

const LoadingArtists = () => {
  return Array.from({ length: ARTISTS_PER_PAGE }).map((_, index) => (
    <div className="flex gap-4 items-center" key={index}>
      <Skeleton circle className="w-[64px] h-[64px]" />
      <Skeleton className="w-[150px] h-[20px]" />
    </div>
  ))
}

export function Artists(): JSX.Element {
  const limit = ARTISTS_PER_PAGE

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['top-user-artists', `limit=${limit}`],
      queryFn: ({ pageParam = 0 }) =>
        getTopUserArtists({ limit, offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.data.offset + ARTISTS_PER_PAGE,
    })

  const loaderRef = useRef<HTMLDivElement>(null)

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
      <div className="flex flex-col gap-4 overflow-y-auto h-[calc(100vh-122px)] pb-4">
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
                    href={`/artist/${artist.id}`}
                    name={artist.name}
                    image={artist.images[0].url}
                  />
                ))}
              </div>
            ))}
            {hasNextPage && (
              <div ref={loaderRef}>
                <Button disabled={isFetchingNextPage} onClick={loadMore}>
                  Carregar mais
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </BaseNavigation>
  )
}
