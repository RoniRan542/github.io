import React from 'react';
import './index.scss';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';



const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)    
    }, [])

   const projects = [
    {
      id: 1,
      name: 'Task Organaizer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/1/300/200',
      technologies: ['Python', 'Flask', 'Javascript','css'],
      liveUrl: 'https://example.com/project1',
      codeUrl: 'https://github.com/RoniRan542/todo-list-rest-api',
    },
    {
      id: 2,
      name: 'Snake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/2/300/200',
      technologies: ['C', 'C++'],
      liveUrl: 'https://example.com/project2',
      codeUrl: 'https://github.com/RoniRan542/snake_cpp',
    },
    {
      id: 3,
      name: 'Checkers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/3/300/200',
      technologies: ['C', 'C++'],
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/RoniRan542/checkers_cpp',
    },
    {
      id: 4,
      name: 'Url-Shortener',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/5/300/200',
      technologies: ['Python', 'Flask', 'Jinja2'],
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/RoniRan542/url-shoertener-python',
    },
    {
      id: 5,
      name: 'Garage System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/6/300/200',
      technologies: ['C', 'C++', 'cppJson'],
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/RoniRan542/garage_system_git',
    },
    {
      id: 6,
      name: 'Local Cloud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lorem vitae lacus iaculis semper. Nulla facilisi. Nullam vel purus sed massa maximus placerat. Donec ut tempor mi, sit amet ultricies mauris.',
      imageUrl: 'https://picsum.photos/seed/7/300/200',
      technologies: ['C', 'C++', 'NBD','bash'],
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/RoniRan542/Embedded-project',
    },
  ];

  

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
            <img src={project.imageUrl} alt={project.name} className='project-image' />
            <h2 className='project-name'>{project.name}</h2>
            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-technology">{technology}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.codeUrl} className="project-button project-button--code">View Code</a>
            </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
