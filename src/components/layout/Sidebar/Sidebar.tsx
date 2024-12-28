import { Download } from '@/components/ui/icons'
import Logo from '@/components/ui/Logo'
import Typography from '@/components/ui/Typography'
import { sidebarRoutes } from '@/constants'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export function Sidebar() {
  return (
    <div className="w-[60px] h-screen bg-black p-2 py-4 text-white md:py-8 md:p-8 md:w-[250px] ">
      <div className="mb-11 flex justify-center md:justify-start">
        <Logo autoColapse />
      </div>
      <Router>
        <nav className="flex h-[calc(100%-80px)] flex-col justify-between">
          <ul className="flex flex-col gap-3 md:gap-6">
            {sidebarRoutes.map((route) => (
              <li key={route.name}>
                <Link
                  aria-label={route.name}
                  title={route.name}
                  to={route.path}
                  className="flex justify-center gap-3 md:gap-4 md:justify-start"
                >
                  <route.icon />
                  <Typography
                    className="text-[16px]/[20px] md:text-[19px]/[24px] hidden md:block"
                    variant="link"
                  >
                    {route.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            className="flex justify-center items-center gap-3 md:gap-4 md:justify-start"
          >
            <Download />
            <Typography
              className="text-[16px]/[20px] md:text-[19px]/[24px] hidden md:block"
              variant="link"
            >
              Instalar PWA
            </Typography>
          </Link>
        </nav>
      </Router>
    </div>
  )
}
