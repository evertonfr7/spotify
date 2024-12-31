import BaseNavigation from '@/components/layout/BaseNavigation'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Skeleton from '@/components/ui/Skeleton'
import Typography from '@/components/ui/Typography'
import { getMe } from '@/resources/http/api/queries/me'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'

export function Profile(): JSX.Element {
  const handleLogout = () => {
    Cookies.remove('spotify_token')
    window.location.href = '/login'
  }

  const { data: response, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  })

  return (
    <BaseNavigation>
      <div className="flex h-[100vh] flex-col justify-center items-center gap-6">
        {isLoading ? (
          <>
            <Skeleton
              circle
              className="w-[64px] h-[64px] md:w-[128px] md:h-[128px]"
            />
            <Skeleton className="w-[120px] h-[18px] md:w-[150px] md:h-[20px]" />
          </>
        ) : (
          <>
            <Avatar
              title={response?.data?.display_name}
              alt={response?.data?.display_name}
              size="lg"
              src={response?.data?.images[0]?.url}
            />
            <Typography className="text-[22px]/[18px] md:text-[24px]/[20px]">
              {response?.data?.display_name}
            </Typography>
          </>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </BaseNavigation>
  )
}
