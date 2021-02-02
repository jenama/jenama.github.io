import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function Navbar(props) {
    const { children, value, index, ...other } = props;
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