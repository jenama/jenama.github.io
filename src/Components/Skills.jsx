import React from 'react';

const Skills = () => {
    return (
        <div className='skills'>
            <h1>skill sets</h1>
            <div className='list'>
                <div className='javascript'> Javascript
                 <img src='https://clipartart.com/images/javascript-icon-clipart-6.png' alt='js'/>
                </div>
                <div className='react'> React 
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='react'/>
                </div>
                <div className='HTML'> HTML
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='html'/>
                </div>
                 <div className='css'> CSS 
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='css'/>
                </div>
                 <div className='postgres'> PostgreSQL
                    <img src='https://apprecs.org/ios/images/app-icons/256/fd/390298877.jpg' alt='postgres'/>
                </div>
                 <div className='git'> GIT
                    <img src='https://i.ya-webdesign.com/images/github-logo-png-16.png' alt='git'/>
                </div>
                 {/* <div>
                    <img src=''/>
                </div>
                 <div>
                    <img src=''/>
                </div> */}
             </div>       
           
        </div>
    )
}

export default Skills;