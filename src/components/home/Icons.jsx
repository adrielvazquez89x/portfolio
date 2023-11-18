import React from 'react'
import html5 from '../../img/icons/html.png'
import css3 from '../../img/icons/css.png'
import JS from '../../img/icons/js.png'
import TS from '../../img/icons/ts.png'
import react from '../../img/icons/react.png'
import sass from '../../img/icons/sass.png'
import cpp from '../../img/icons/cpp.png'
import cSharp from '../../img/icons/csharp.png'
import dotnet from '../../img/icons/dotnet.png'
import github from '../../img/icons/github.png'


const Icons = () => {
    return (
        <div className='flex justify-center gap-2'>
            <img src={html5} className='tm' alt="" />
            <img src={css3} className='tm' alt="" />
            <img src={JS} className='tm' alt="" />
            <img src={TS} className='tm' alt="" />
            <img src={react} className='tm' alt="" />
            <img src={sass} className='tm' alt="" />
            <img src={cpp} className='tm' alt="" />
            <img src={cSharp} className='tm' alt="" />
            <img src={dotnet} className='tm' alt="" />
            <img src={github} className='tm' alt="" />
        </div>
    )
}

export default Icons

