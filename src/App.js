import './App.css'
import { Header } from './components'
import { HelloSection, Motivation } from './sections'

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <HelloSection />
      <Motivation />
    </div>
  )
}

export default App
