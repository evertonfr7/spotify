import './App.css'
import PlaylistModal from './components/PlaylistModal/PlaylistModal'

function App() {
  return (
    <>
      <PlaylistModal
        isOpen={true}
        onClose={() => {
          alert('onClose')
        }}
      />
    </>
  )
}

export default App
