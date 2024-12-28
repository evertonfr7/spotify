import { cn } from '@/utils/cn'
import { AvatarProps } from './Avatar.types'

export function Avatar({
  src,
  size = 'md',
  alt,
  title,
  ariaLabel,
}: AvatarProps): JSX.Element {
  const className = cn(
    'rounded-full bg-[#ff6437] aspect-auto object-cover flex items-center justify-center font-default font-bold text-[20px]',
    size === 'sm' && 'w-[32px] h-[32px]',
    size === 'md' && 'w-[64px] h-[64px]',
    size === 'lg' && 'w-[128px] h-[128px]',
  )
  if (!src) {
    return <div className={className}>S</div>
  }
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      role="img"
      aria-label={ariaLabel}
      width={128}
      height={128}
      className={className}
    />
  )
}
