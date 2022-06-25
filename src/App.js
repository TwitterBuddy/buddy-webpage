import './App.css'
import { Header } from './components'
import {
  FactChecking,
  HelloSection,
  Motivation,
  PersonalizedHS,
  Pipeline,
  Summary,
} from './sections'

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <HelloSection />
      <Motivation />
      <PersonalizedHS />
      <FactChecking />
      <Pipeline />
      <Summary />
    </div>
  )
}

export default App
