import Avatar from '../ui/Avatar'
import Typography from '../ui/Typography'
import { ArtistProps } from './Artist.types'

export function Artist({ id, href, name, image }: ArtistProps) {
  return (
    <a href={href}>
      <div className="flex items-center gap-2 md:gap-4 text-white" key={id}>
        <Avatar src={image} alt={name} ariaLabel={name} />
        <Typography className="font-normal">{name}</Typography>
      </div>
    </a>
  )
}
