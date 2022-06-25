import './App.css'
import { Header } from './components'
import {
  Examples,
  FactChecking,
  HelloSection,
  Motivation,
  PersonalizedHS,
  Summary,
} from './sections'

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <HelloSection />
      <Motivation />
      <PersonalizedHS />
      <Examples />
      <FactChecking />
      <Summary />
    </div>
  )
}

export default App
