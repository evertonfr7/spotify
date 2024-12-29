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
    'rounded-full aspect-auto object-cover flex items-center justify-center font-default font-bold text-[20px]',
    size === 'sm' && 'w-[32px] h-[32px] md:w-[48px] md:h-[48px]',
    size === 'md' && 'w-[48px] h-[48px] md:w-[64px] md:h-[64px]',
    size === 'lg' && 'w-[64px] h-[64px] md:w-[128px] md:h-[128px]',
    !src && 'bg-[#ff6437]',
  )
  if (!src) {
    return <div className={className}>{title?.charAt(0).toUpperCase()}</div>
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
