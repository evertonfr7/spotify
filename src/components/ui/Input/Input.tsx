import { InputProps } from './Input.types'
import { cn } from '@/utils/cn'

export function Input({
  className,
  placeholder,
  required,
  readOnly,
  disabled,
  ariaLabel,
  ariaDescribedBy,
  type = 'text',
  id,
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: InputProps): JSX.Element {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
      className={cn(
        'w-full h-9 bg-transparent border-b border-white/20 outline-none font-default text-[24px]/[20px] font-bold text-white',
        className,
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled &&
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50',
      )}
      type={type}
      {...rest}
    />
  )
}
