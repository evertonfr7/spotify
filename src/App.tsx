import './App.css'
import {
  Disc,
  House,
  Play,
  User,
  Download,
  ArrowLeft,
  Close,
} from './components/ui/icons'

function App() {
  return (
    <div className="text-white">
      <House className="w-10 h-10" />
      <Disc className="w-10 h-10" />
      <Play className="w-10 h-10" />
      <User className="w-10 h-10" />
      <Download className="w-10 h-10" />
      <ArrowLeft className="w-10 h-10" />
      <Close className="w-10 h-10" />
    </div>
  )
}

export default App
