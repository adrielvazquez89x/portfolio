import React from 'react'
import styled from '@emotion/styled'


const Greeting = () => {
    return (
        <div>
            <Hello>
                <h1>Hello there I'm Adriel Vazquez <span>Frontend Developer</span> </h1>
                <p>My focus is on continuous learning and growth in the field of web development.
                    I work with technologies like React and  I'd like to take up new challenges while expanding my skill set. <br />

                    I wish to secure a position where I can apply my knowledge and contribute to exciting projects.
                    I'm genuinely excited about the future of web development and I eagerly embrace new opportunities and challenges.</p>
            </Hello>
        </div>
    )
}

export default Greeting

const Hello = styled.div`
    
    h1 {
        color: /* #fff; */ ${props => props.theme.mainColor2};
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 2px;

        span {
            color: #fff;
        }
    }
    p {
        color: #fff;
        padding: 2px;
    }
`