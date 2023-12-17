import About from './components/About'
import Header from './components/Header'
import Work from './components/Work'
import './index.css'
import Card from './shared/Card'

function App() {

  return (
    <Card>
      <div className="snowflakes" aria-hidden="true">
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
    <div className="snowflake">
      ❅
    </div>
    <div className="snowflake">
      ❆
    </div>
  </div>
      <Header />
      <About />
      <Work />
    </Card>
  )
}

export default App
