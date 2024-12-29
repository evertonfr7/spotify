import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'

export function Login(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <Typography>
        Entra com sua conta Spotify clicando no botão abaixo
      </Typography>
      <Button>Entrar</Button>
    </div>
  )
}
