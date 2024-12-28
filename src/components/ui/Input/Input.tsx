import { InputProps } from './Input.types'
import { cn } from '@/utils/cn'

export function Input({
  className,
  placeholder,
  required,
  readOnly,
}: InputProps): JSX.Element {
  return (
    <input
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      className={cn(
        'w-full h-9 bg-transparent border-b border-white/20 outline-none font-default text-[24px]/[20px] font-bold text-white',
        className,
      )}
      type="text"
    />
  )
}
