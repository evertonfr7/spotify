import { cn } from '@/utils/cn'
import { TypographyProps } from './Typography.types'

export function Typography({
  variant = 'paragraph',
  as: Component = 'p',
  children,
  className,
}: TypographyProps) {
  const variantClasses = {
    title: 'font-default text-[28px]/[32px] font-semibold',
    subtitle: 'font-default text-base/[18px] font-normal text-[#D3DADD]',
    paragraph: 'font-default text-[14px]/[20px] font-medium',
    link: 'font-default text-[14px]/[20px] font-medium underline',
  }

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {children}
    </Component>
  )
}
