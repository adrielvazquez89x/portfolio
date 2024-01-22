import React from 'react'
import Card from './Card'
import projects from '../../data/projects'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'


const Projects = () => {

    const slideVariants = {
        hidden: { x: '100%' },
        visible: { x: 0, opacity: 1, transition: { duration: .3, ease: 'easeOut' } }
    };

    const sites = projects

    return (

        <motion.div
            initial={'hidden'}
            animate={'visible'}
            variants={slideVariants}
        >

            <div className='md:max-h-screen mb-20 pb-10 '>
                <TitleProject>My projects</TitleProject>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10'>

                    {sites.map((site) => (<Card key={site.id} {...site} />))}

                </div>
            </div>
        </motion.div>
    )
}

export default Projects

const TitleProject = styled.h1`

        color: /* #fff; */ ${props => props.theme.mainColor1};
        font-size: 32px;
        font-weight: bold;
        margin-top: 5rem;
        margin-bottom: 1rem;
        padding: 2px;
        text-align: center;

`