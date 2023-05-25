import React from 'react'
import Greeting from './Greeting'
import profile from '../../img/profile.png'
import Icons from './Icons'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col items-center gap-10'>
                    <Greeting />
                    <Link to={'/contact'}>
                        <Button text='Contact me' />
                    </Link>
                    <Icons />
                </div>

                <div className='m-auto'>
                    <img src={profile} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home

