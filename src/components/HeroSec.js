import React, { useEffect, useRef } from 'react';
/*import { Link } from 'react-router-dom';*/
import './HeroSec.css';

function HeroSec(){
    const listElement = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            debugger;
            listElement.current.classList.add("hidden-text");
        }, 450);
        return () => {};
    });
    
    return(
    
    <div className='hero-container'>

        {/*<h1>Example Name </h1> */}

    <div className='list-container'>
        <ul ref={listElement} id="foo">
        <li> D </li>
        <li class="hidden">o</li>
        <li class="hidden">m</li>
        <li class="hidden"style={{'margin-left':'15px'}}>i</li>
        <li class="hidden"style={{'margin-left':'-10px'}}>n</li>
        <li class="hidden">i</li>
        <li class="hidden"style={{'margin-left':'-10px'}}>c</li>
        <li class="spaced">R</li>
        <li class="hidden">e</li>
        <li class="hidden"style={{'margin-left':'-5px'}}>g</li>
        <li class="hidden">o</li>
        </ul>
    </div>   
        
        <div className='resume'>
            <a href="https://my.indeed.com/api/3/profile/files/resume/mostRecent" className="resume-hover"> 
                <h3>My Resume</h3>
            </a>
        </div>
        {/*}
        <div className='portfolio'>       
            <Link to='' className='portfolio-link'>
               <h3> My Portfolio </h3>
            </Link>
    </div> */}

    </div>
    );
}


export default HeroSec;

