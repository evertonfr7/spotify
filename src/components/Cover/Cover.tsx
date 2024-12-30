import { Disc, Play } from '../ui/icons'
import Typography from '../ui/Typography'
import { CoverProps } from './Cover.types'

export function Cover({
  id,
  image,
  title,
  subtitle,
  type,
}: CoverProps): JSX.Element {
  return (
    <div className="flex items-center gap-2 md:gap-4 text-white" key={id}>
      {image ? (
        <img
          src={image}
          alt={title}
          aria-label={title}
          width={48}
          height={48}
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
        />
      ) : (
        <div className="bg-slate-500 flex justify-center items-center w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
          {type === 'playlist' ? <Play /> : <Disc />}
        </div>
      )}

      <div>
        <Typography className="font-normal">{title}</Typography>
        <Typography className="font-normal text-white/80 text-[10px]/[18px] md:text-[12px]/[20px]">
          {subtitle}
        </Typography>
      </div>
    </div>
  )
}
