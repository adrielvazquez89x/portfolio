import React from 'react'
import Card from './Card'
import projects from '../../data/projects'
import styled from '@emotion/styled'

const Projects = () => {

    const sites = projects

    return (
        <div className='md:max-h-screen '>
            <TitleProject>My projects</TitleProject>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {sites.map( (site)=> (<Card key={site.id} {...site}/>) )}
                
            </div>
        </div>
    )
}

export default Projects

const TitleProject = styled.h1`

        color: /* #fff; */ ${props => props.theme.mainColor1};
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 2px;
        text-align: center;

`