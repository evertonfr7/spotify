import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'
import { LOGIN_URL } from '@/constants/spotify'

export function Login(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <Typography>
        Entra com sua conta Spotify clicando no botão abaixo
      </Typography>
      <a href={LOGIN_URL}>
        <Button>Entrar</Button>
      </a>
    </div>
  )
}
