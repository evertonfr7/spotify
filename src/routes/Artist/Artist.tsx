import Cover from '@/components/Cover'
import BaseNavigation from '@/components/layout/BaseNavigation'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import { ArrowLeft } from '@/components/ui/icons'
import Skeleton from '@/components/ui/Skeleton'
import Typography from '@/components/ui/Typography'
import { ALBUMS_PER_PAGE } from '@/constants'
import { getArtist } from '@/resources/http/api/queries/artist'
import { getArtistAlbuns } from '@/resources/http/api/queries/artist-albuns'
import { Album } from '@/resources/http/api/queries/artist-albuns/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'

const LoadingAlbums = () => {
  return Array.from({ length: ALBUMS_PER_PAGE }).map((_, index) => (
    <div className="flex gap-2 md:gap-4 items-center" key={index}>
      <div>
        <Skeleton className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]" />
      </div>
      <div>
        <Skeleton className="w-[150px] h-[18px] mb-1" />
        <Skeleton className="w-[100px] h-[18px]" />
      </div>
    </div>
  ))
}

export function Artist(): JSX.Element {
  const id = window.location.pathname.split('/').pop()

  const limit = ALBUMS_PER_PAGE

  const { data: artist, isLoading: isLoadingArtist } = useQuery({
    queryKey: ['artist', id],
    queryFn: () => getArtist({ id: id as string }),
  })

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['artist-albuns', `limit=${limit}`],
      queryFn: ({ pageParam = 0 }) =>
        getArtistAlbuns({ id: id as string, limit, offset: pageParam }),
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
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <div
          className="flex items-center gap-2"
          role="button"
          tabIndex={0}
          aria-label="Voltar"
          onKeyDown={() => window.history.back()}
          onClick={() => window.history.back()}
        >
          <ArrowLeft />
          {isLoadingArtist ? (
            <Skeleton className="w-[90px] h-[18px] md:w-[100px] md:h-[20px]" />
          ) : (
            <Typography className="font-bold">{artist?.data?.name}</Typography>
          )}
        </div>

        {isLoadingArtist ? (
          <Skeleton
            circle
            className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
          />
        ) : (
          <Avatar
            src={artist?.data?.images[0].url}
            alt={artist?.data?.name}
            ariaLabel={artist?.data?.name}
          />
        )}
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto h-[calc(100dvh-122px)] pb-4">
        {isLoading ? (
          <LoadingAlbums />
        ) : (
          <>
            {data?.pages?.map((page, index) => (
              <div key={index} className="flex flex-col gap-4">
                {page?.data?.items?.map((album: Album) => (
                  <Cover
                    type="album"
                    key={album.id}
                    id={album.id}
                    title={album.name}
                    subtitle={`${album.release_date.split('-')[2]}/${album.release_date.split('-')[1]}/${album.release_date.split('-')[0]}`}
                    image={album.images[0].url}
                  />
                ))}
              </div>
            ))}
            {hasNextPage && (
              <Button
                className="w-[fit-content]"
                disabled={isFetchingNextPage}
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
