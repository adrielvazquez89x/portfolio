import Greeting from './Greeting'
import profile from '../../img/profile.jpg'
import Icons from './Icons'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CV from '../../cv/CV - Adriel Alejandro Vazquez.pdf'

const Home = () => {

    const slideVariants = {
        hidden: { x: '100%' },
        visible: { x: 0, opacity: 1, transition: { duration: .3, ease: 'easeOut' } }
    };


    return (

        <motion.div
            initial={'hidden'}
            animate={'visible'}
            variants={slideVariants}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col items-center gap-10'>
                    <Greeting />
                    <div className='flex gap-10'>
                        <Link to={'/contact'}>
                            <Button text='Contact me' />
                        </Link>
                        <Link to={CV} target='_blank' >
                            <Button text='Download my CV' />
                        </Link>
                    </div>


                    <Icons />
                </div>

                <div className='flex justify-center m-auto'>
                    <img src={profile} alt="profile" className='img-home ' />
                </div>

            </div>
        </motion.div>
    )
}

export default Home

