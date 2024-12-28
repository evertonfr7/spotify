import logo from '@/assets/logo.svg'

export function Logo() {
  return (
    <img
      src={logo}
      className="w-[114.8px] h-[35px] md:w-[164px] md:h-[50px]"
      alt="Spotify Logo"
      title="Spotify"
      width={164}
      height={50}
      role="img"
      aria-label="Spotify Logo"
    />
  )
}
