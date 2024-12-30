import { Download } from '@/components/ui/icons'
import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'
import { sidebarRoutes } from '@/constants'

export function Sidebar(): JSX.Element {
  return (
    <div className="w-[60px] h-screen bg-black p-2 py-4 text-white md:py-8 md:p-8 md:min-w-[250px] ">
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
        <a
          href="/"
          className="flex justify-center items-center gap-3 md:gap-4 md:justify-start"
        >
          <Download />
          <Typography
            className="text-[16px]/[20px] md:text-[19px]/[24px] hidden md:block"
            variant="link"
          >
            Instalar PWA
          </Typography>
        </a>
      </nav>
    </div>
  )
}
