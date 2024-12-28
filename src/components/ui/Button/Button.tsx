import { cn } from '@/utils/cn'
import { ButtonProps } from './Button.types'

export function Button({
  children,
  className,
  disabled,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'bg-[#57B660] text-[#181414] rounded-3xl px-10 h-[42px] font-default text-base/[20px] font-bold',
        className,
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      {children}
    </button>
  )
}
