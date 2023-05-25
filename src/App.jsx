import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


const theme = {
  mainColor1: "#f6002d",
  mainColor2: "#ff6200"
}

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          
          <div className='md:h-screen flex flex-col justify-center items-center aca'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />

            </Routes>
          </div>

        </BrowserRouter>
      </ThemeProvider>

    </>
  )


}

export default App
