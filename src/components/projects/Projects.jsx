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
                <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8'>

                    {sites.map((site) => (<Card key={site.id} {...site} />))}

                </div>
            </div>
        </motion.div>
    )
}

export default Projects
