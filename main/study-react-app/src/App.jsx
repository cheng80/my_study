import './App.css'
import JSXExample from './components/01-jsx'
import ComponentsExample from './components/02-components'
import ExpressionExample from './components/03-expression'
import CityList from './components/04-list'
import EventExample from './components/05-event'

function Header() {
  return (
    <header>
      <h1>헤더 영역</h1>
    </header>
  )
}

function App() {
    return (    
        <>
        <Header />
        <JSXExample />
        <ComponentsExample />
        <ExpressionExample />
        <CityList />
        <EventExample />
        </>
    )
}

export default App
