import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();
    const isProjectsRoute = location.pathname === '/projects'; // Verifica si la ruta es '/projects'

    return (
        <AnimatePresence>
            <div className={`md:h-screen flex flex-col justify-center items-center ${isProjectsRoute ? 'overflow-visible' : ''}`}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default AnimatedRoutes