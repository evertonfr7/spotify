import { cn } from '@/utils/cn'
import { TypographyProps } from './Typography.types'

export function Typography({
  variant = 'paragraph',
  as: Component = 'p',
  children,
  className,
}: TypographyProps): JSX.Element {
  const variantClasses = {
    title:
      'font-default text-[26px]/[30px] font-semibold md:text-[28px]/[32px]',
    subtitle:
      'font-default text-[14px]/[16px] font-normal text-[#D3DADD] md:text-base/[18px]',
    paragraph:
      'font-default text-[12px]/[18px] font-medium text-white md:text-[14px]/[20px]',
    link: 'font-link text-[12px]/[18px] font-bold md:text-[14px]/[20px]',
  }

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {children}
    </Component>
  )
}
