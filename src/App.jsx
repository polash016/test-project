import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

function App() {

// show.show.id 
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
