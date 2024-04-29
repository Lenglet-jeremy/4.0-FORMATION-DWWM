import './App.css'
import NavBar from './components/NavBar/NavBar'
import { NavBarProvider } from './components/NavBar/NavBarContext'


function App() {

  return (
    <NavBarProvider>
      <NavBar />
    </NavBarProvider>
  )
}

export default App
