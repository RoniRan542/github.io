import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faHtml5, faJsSquare, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import { useState,useEffect } from 'react';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)    
    }, [])

  return (
    <div className="container about-page">
      <div className='text-zone'>

      <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['A','b','o','u','t',' ','m','e']}
        idx={15}
        />
      </h1>
      <p>My name is Ran Aharon Cohen (but my friends call me Rani) and I am a skilled software developer. <br/>
        I have 4 years of experience as a frontend developer and 2 years of experience backend development and embedded software development.</p>
      <p>It seems like a lot of qualifications, I know, but I truly am interested in many aspects of software. Realy excited and passionate about it.</p>
      <p>In addition to that, my interests are in philosophy of science and technology, with a focus on integrating ideas.I love sports, going out with friends and Netflix, so I'm also a fun guy to be with :).</p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faJava} color='#DD0031' />
          </div>

          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>

          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>

          <div className='face4'>
            <FontAwesomeIcon icon={faPython} color='#28A4D9' />
          </div>

          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>

          <div className='face6'>
            <FontAwesomeIcon icon={faGit} color='#EC4D28' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
