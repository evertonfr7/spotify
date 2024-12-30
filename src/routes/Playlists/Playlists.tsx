import Cover from '@/components/Cover'
import BaseNavigation from '@/components/layout/BaseNavigation'
import PageTitle from '@/components/layout/PageTitle'
import PlaylistModal from '@/components/PlaylistModal'
import Button from '@/components/ui/Button'
import Skeleton from '@/components/ui/Skeleton'
import { PLAYLISTS_PER_PAGE } from '@/constants'
import { getUserPlaylists } from '@/resources/http/api/queries/playlists'
import { Playlist } from '@/resources/http/api/queries/playlists/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'

const LoadingPlaylists = () => {
  return Array.from({ length: PLAYLISTS_PER_PAGE }).map((_, index) => (
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
export function Playlists(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const handleCreatePlaylist = () => {
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const limit = PLAYLISTS_PER_PAGE

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['playlists', `limit=${limit}`],
      queryFn: ({ pageParam = 0 }) =>
        getUserPlaylists({ limit, offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.data.offset + limit,
    })

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <BaseNavigation>
        <PageTitle
          title="Minhas Playlists"
          subtitle="Sua coleção pessoal de playlists"
        >
          <Button onClick={handleCreatePlaylist}>Criar playlist</Button>
        </PageTitle>
        <div className="flex flex-col gap-4 overflow-y-auto h-[calc(100vh-122px)] pb-4">
          {isLoading ? (
            <LoadingPlaylists />
          ) : (
            <>
              {data?.pages.map((page, index) => (
                <div key={index} className="flex flex-col gap-4">
                  {page?.data?.items?.map((playlist: Playlist) => (
                    <Cover
                      type="playlist"
                      key={playlist.id}
                      id={playlist.id}
                      title={playlist.name}
                      subtitle={playlist.owner.display_name || 'Sem etiqueta'}
                      image={playlist.images?.[0].url}
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
      <PlaylistModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  )
}
