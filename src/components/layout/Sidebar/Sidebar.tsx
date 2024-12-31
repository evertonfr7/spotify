import { useEffect, useState } from 'react'
import { Download } from '@/components/ui/icons'
import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'
import { sidebarRoutes } from '@/constants'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export function Sidebar(): JSX.Element {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler as EventListener)

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        handler as EventListener,
      )
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const choice = await deferredPrompt.userChoice
      if (choice.outcome === 'accepted') {
        console.log('PWA instalado com sucesso!')
      } else {
        console.log('Usuário cancelou a instalação.')
      }
      setDeferredPrompt(null)
    }
  }

  return (
    <div className="w-[60px] h-[100dvh] bg-black p-2 py-4 text-white md:py-8 md:p-8 md:min-w-[250px]">
      <a href="/">
        <div className="mb-11 flex justify-center md:justify-start">
          <Logo autoColapse />
        </div>
      </a>
      <nav className="flex h-[calc(100%-80px)] flex-col justify-between">
        <ul className="flex flex-col gap-3 md:gap-6">
          {sidebarRoutes.map((route) => (
            <li key={route.name}>
              <a
                href={route.path}
                aria-label={route.name}
                title={route.name}
                className="flex justify-center gap-3 md:gap-4 md:justify-start"
              >
                <route.icon />
                <Typography
                  className="text-[16px]/[20px] md:text-[19px]/[24px] hidden md:block"
                  variant="link"
                >
                  {route.name}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
        {deferredPrompt && (
          <button
            className="flex items-center md:gap-4"
            onClick={handleInstallClick}
          >
            <Download />
            <Typography
              className="text-[16px]/[20px] md:text-[19px]/[24px] hidden md:block"
              variant="link"
            >
              Instalar PWA
            </Typography>
          </button>
        )}
      </nav>
    </div>
  )
}
