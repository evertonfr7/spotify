import Typography from '../ui/Typography'
import { CoverProps } from './Cover.types'

export function Cover({ id, image, title, subtitle }: CoverProps) {
  return (
    <div className="flex items-center gap-2 md:gap-4 text-white" key={id}>
      <img
        src={image}
        alt={title}
        aria-label={title}
        width={72}
        height={72}
        className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
      />
      <div>
        <Typography className="font-normal">{title}</Typography>
        <Typography className="font-normal text-white/80 text-[10px]/[18px] md:text-[12px]/[20px]">
          {subtitle}
        </Typography>
      </div>
    </div>
  )
}
