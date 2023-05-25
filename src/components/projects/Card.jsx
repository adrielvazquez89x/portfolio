import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons'
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
                        <Button text='Deploy' />
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
        transition: transform 0.7s ease;
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
    width: 509%;
    height: auto;
`;

const CardContainer = styled.div`

    border: 1px;
    border-radius: 8px;
    overflow: hidden;
    width:300px;
    h3{
        color: ${props => props.theme.mainColor2};
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    p {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const CardContent = styled.div`
    background-color: #fff;
    padding: 16px;
`;

const IconContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
`;





