import React from 'react'
import styled from '@emotion/styled'
import BurgerButton from './BurgerButton'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [clicked, setClicked] = useState(false); //State para el burgerbutton
    //cambiar el state 
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <div className={`links ${clicked ? 'active' : ''}`} >
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'text-white')}>Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : 'text-white')}>About</NavLink>
                    <NavLink to={'/projects'} className={({ isActive }) => (isActive ? 'active' : 'text-white')}>Projects</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'active' : 'text-white')}>Contact me</NavLink>
                </div>

                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgNav className={`initial ${clicked ? 'active' : ''}`}></BgNav>
            </NavContainer>
        </>
    )
}

export default Navbar

// Styles
const NavContainer = styled.nav`
    color: #fff;
    font-weight: 400;
    margin: 10px 0 10px 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (min-width: 768px) {
        justify-content: center;
    }

    a {
        margin-right: 2rem;
        position: relative;
        z-index: 3;
        &:hover {
            color: ${props => props.theme.mainColor2};
        }
        &.active {
            color: ${props => props.theme.mainColor1};
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -12px;
                transform: translateY(-50%);
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: ${props => props.theme.mainColor1}; 
            }
        }
    }

    .burger {
        z-index: 3;
        @media (min-width: 768px) {
            display: none;

        }
    }
    .links {
        
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;

        a {
            font-size: 2rem;
            display: block;
        }

        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1.4rem;
                display: inline;
            }

        }
    }
    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 40%;
        left: -25%;
        right: 0;
        text-align: center;
    }
`

const BgNav = styled.div`
    position: absolute;
    background-color: #201d28ea;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all .6s ease;
    &.active {
       // border-radius: 0 0 70% 0;
        top: 0;
        left: 0;
        width: 70%;
        height: 100%;
    }
`