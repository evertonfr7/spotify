import logo from '@/assets/logo.svg'
import miniLogo from '@/assets/mini-logo.svg'
import { LogoProps } from './Logo.types'
import { cn } from '@/utils/cn'

export function Logo({ autoColapse = false }: LogoProps): JSX.Element {
  const collapseConfig = autoColapse
  return (
    <div>
      <img
        src={logo}
        data-testid="logo"
        className={cn('w-[114.8px] h-[35px] md:w-[164px] md:h-[50px]', {
          'hidden md:block': collapseConfig,
          block: !collapseConfig,
        })}
        alt="Spotify Logo"
        title="Spotify"
        width={164}
        height={50}
        role="img"
        aria-label="Spotify Logo"
      />
      {collapseConfig && (
        <img
          src={miniLogo}
          className={cn('w-[32px] h-[32px]', {
            'block md:hidden': collapseConfig,
            hidden: !collapseConfig,
          })}
          alt="Spotify Logo"
          title="Spotify"
          width={24}
          height={24}
          role="img"
          aria-label="Spotify Logo"
        />
      )}
    </div>
  )
}
