import { cn } from '@/utils/cn'
import { SkeletonProps } from './Skeleton.types'

export function Skeleton({ className, circle }: SkeletonProps): JSX.Element {
  return (
    <div
      role="presentation"
      className={cn(
        'animate-pulse bg-gray-200 rounded',
        {
          'rounded-full': circle,
        },
        className,
      )}
    ></div>
  )
}
