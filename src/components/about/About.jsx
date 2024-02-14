import styled from '@emotion/styled'
import profile from '../../img/profile2.jpg'
import { motion } from 'framer-motion'



const About = () => {

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
                <Bio >
                    <h1>Discover More About Me</h1>
                    <p>
                    I'm Adriel Alejandro Vazquez, and I've recently completed the first semester of the <i>Técnico Universitario en Programación</i> degree at <i>Universidad Tecnológica Nacional</i> (UTN) with outstanding grades.
                     I also undertook a 6-month Frontend development course at Coderhouse to expand my knowledge in this field. <br /> <br />
                        I've also been exploring other courses on my own.
                        Perseverance is key for me. Although I don't have professional experience yet, I'm determined to learn and grow in the web development field.
                        When it comes to tech, React is my go-to tool. I'm well-versed in HTML, CSS, and JS too. Also, I have to say I'm really drawn to .NET technology lately. Its versatility and potential have truly captivated me.
                        I'm thoroughly enjoying diving into the world of .NET. <br /><br />
                        I find web development incredibly fun and fulfilling.
                        Outside of coding, I have a passion for music and I play the guitar. Video games are also a big part of my life.
                        My main goal is to land a job in web development and keep pushing my skills to the next level. If you're looking for a dedicated and enthusiastic web developer, I'd love to connect!
                        Feel free to reach out if you have any questions or exciting projects in mind.
                    </p>
                </Bio>
                <div className='m-auto'>
                    <img src={profile} alt="" />
                    <p className='text-white text-xs'>This is me, playing guitar in my previous band</p>
                </div>
            </div>
        </motion.div>

    )
}

export default About

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
        color: ${props => props.theme.mainColor1};
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 2px;
    }
    p{
        color: #fff;
    }
    
`