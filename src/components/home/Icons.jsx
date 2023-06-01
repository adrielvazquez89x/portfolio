import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faGithub, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const Icons = () => {
    return (
        <div className='flex justify-center gap-2'>
            <FontAwesomeIcon className='main-color2 ' size='2xl' icon={faHtml5} />
            <FontAwesomeIcon className='text-blue-600' size='2xl' icon={faCss3Alt} />
            <FontAwesomeIcon className='text-yellow-500' size='2xl' icon={faSquareJs} />
            <FontAwesomeIcon className='text-blue-300' size='2xl' icon={faReact} />
            <FontAwesomeIcon className='text-pink-500' size='2xl' icon={faSass} />
            <FontAwesomeIcon className='text-violet-700' size='2xl' icon={faBootstrap} />
            <FontAwesomeIcon className='text-white' size='2xl' icon={faGithub} />
        </div>
    )
}

export default Icons

