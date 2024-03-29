import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styled from '@emotion/styled';



const Card = ({ name, desc, git, deploy, img, tech }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={img} alt={name} />
            </ImageContainer>

            <CardContent>
                <h3>{name}</h3>
                {desc && <p>{desc}</p>}
                <p className='font-bold'>{tech}</p>
                <IconContainer>
                    <Link to={git} target="_blank">
                        <FontAwesomeIcon className='main-color2' size='2xl' icon={faGithub} />
                    </Link>
                    <Link to={deploy} target="_blank">
                        <Button text='Demo' />
                    </Link>
                </IconContainer>

            </CardContent>

        </CardContainer>
    );


};

export default Card;

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:hover { //animation in
        img {
        transform: scale(1.1);    
        transition: transform 0.5s ease;
    }
    
    }
    &:not(:hover) {
        img { //animation out
        transition: transform 0.7s ease-out;
        transform: scale(1);
        }
    }

    
`;

const CardImage = styled.img` //image
    width: 100%;
    height: 150px;
`;

const CardContainer = styled.div`

    border: 1px;
    border-radius: 8px;
    overflow: hidden;
    width: 200px;
    
    h3{
        color: ${props => props.theme.mainColor2};
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    p {
        font-size: 12px;
        margin-bottom: 10px;
    }
`;

const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background-color: #fff;
    height:200px;
    padding: 14px;
    
`;

const IconContainer = styled.div`
        display: flex;
        gap: 2px;
        width: 100%;
        margin-bottom: 10px;
`;





