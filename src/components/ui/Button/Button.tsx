import { cn } from '@/utils/cn'
import { ButtonProps } from './Button.types'

export function Button({
  children,
  className,
  disabled,
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  type = 'button',
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'bg-[#57B660] text-[#181414] rounded-3xl px-8 min-h-[32px] font-default text-[14px]/[18px] font-bold md:min-h-[42px] md:px-10 md:text-base/[20px]',
        className,
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled &&
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#57B660]',
      )}
      type={type}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
