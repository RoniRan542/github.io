import React from 'react';
import './index.scss';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import PopupButton from '../PopupButton';
import projects from './data'



const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)    
    }, [])

   


  return (
    <div className="container projects-page">
    
      <div className='text-zone projects-content'>
      <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
        idx={15}
        />
      </h1>

      
      <div className="proj-container">
        {projects.map((project) => (
          <div key={project.id}  className="box">
            {/* <img src={project.imageUrl} alt={project.name} className='project-image' /> */}
            <h2 className='project-name'>{project.name}</h2>
            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-technology">{technology}</span>
              ))}
            </div>
            <div className='descrip'><p>{project.description}</p></div>
            <div className="project-buttons">
              <a href={project.codeUrl} className="project-button project-button--code">View Code</a>
        {project.name === 'Snake' && <PopupButton name="Demo" url={project.liveUrl}/>}
            </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
