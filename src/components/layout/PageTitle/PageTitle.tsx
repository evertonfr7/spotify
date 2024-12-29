import Typography from '@/components/ui/Typography'
import { PageTitleProps } from './PageTitle.types'

export function PageTitle({
  title,
  subtitle,
  children,
}: PageTitleProps): JSX.Element {
  return (
    <div className="flex justify-between items-center flex-wrap mb-4 md:mb-8">
      <div className="flex flex-col gap-2">
        <Typography variant="title" as="h1">
          {title}
        </Typography>
        {subtitle && (
          <Typography className="mb-2 md:mb-0" variant="subtitle" as="h2">
            {subtitle}
          </Typography>
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}
