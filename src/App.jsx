import About from './components/About'
import Header from './components/Header'
import Work from './components/Work'
import './index.css'
import Card from './shared/Card'

function App() {

  return (
    <Card>
      <Header />
      <About />
      <Work />
    </Card>
  )
}

export default App
