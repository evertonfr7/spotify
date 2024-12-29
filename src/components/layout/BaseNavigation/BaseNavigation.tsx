import { Sidebar } from '../Sidebar/Sidebar'

export function BaseNavigation(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4">
      <Sidebar />
    </div>
  )
}
