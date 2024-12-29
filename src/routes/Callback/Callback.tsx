import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Callback(): JSX.Element {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      <Typography>Redirecionando...</Typography>
    </div>
  )
}
