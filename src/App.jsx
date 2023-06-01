import './App.css'
import { ThemeProvider } from '@emotion/react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import AnimatedRoutes from './components/animated/AnimatedRoutes'


const theme = {
  mainColor1: "#f6002d",
  mainColor2: "#ff6200"
}

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>

    </>
  )


}

export default App
