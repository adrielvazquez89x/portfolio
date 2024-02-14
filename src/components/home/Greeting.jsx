import styled from '@emotion/styled'


const Greeting = () => {
    return (
        <div>
            <Hello>
                <h1>Hello there I'm Adriel Vazquez <span>Fullstack Developer</span> </h1>
                <p>My focus is on continuous learning and growth across various programming domains, particularly in web development where I specialize in technologies like React.
                    Additionally, I'm expanding my expertise into backend technologies.
                    <br /><br />
                    Apart from web development, I'm delving into programming in general, eager to broaden my skill set and take on new challenges.
                    <br /><br />
                    I aspire to secure a position where I can apply my knowledge in diverse programming fields, contributing to innovative projects.
                    I'm genuinely excited about the future of programming and web development, embracing new opportunities with enthusiasm.</p>
            </Hello>
        </div>
    )
}

export default Greeting

const Hello = styled.div`
    
    h1 {
        color: /* #fff; */ ${props => props.theme.mainColor2};
        font-size: 20px;
        font-weight: bold;
        margin-top: 5rem;
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