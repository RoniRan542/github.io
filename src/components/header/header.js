import React from 'react';
import './header.css'

function Header({name}) {
  return (
   
    <header id="top">
        <div className='left-section'>
              <a href="/path/to/resume.pdf" download className="resume-button">
                Download Resume
              </a>
        </div>
      <div className='right-section'>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
           
          </ul>
        </nav>
       
      </div>
      
    </header>
  );
}

export default Header;
