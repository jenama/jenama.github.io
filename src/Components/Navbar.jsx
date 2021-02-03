import React from 'react';

function Navbar(props) {
    // const { children, value, index, ...other } = props;
    return(
        <div className='nav-bar'>
            <h3>
                <a className='link1' href='/'>
                JE
                    {/* <img src='/images/JE-logos/JE-logos.png' width='50px'/> */}
                </a>
            </h3>
            <nav>
                {/* <a className='link1' href='/'>Home</a>  */}
                <a className='link2' href='/#about'>About</a> {" "}
                <a className='link3' href='/#skills'>Skills</a> {" "}
                <a className='link4' href='/#projects'>Projects</a> {" "}
                <a className='link5' href='/#contact'>Contact Me</a>
            </nav>  
        </div>
    ) 
    
}

export default Navbar;