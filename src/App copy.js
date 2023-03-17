// import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import AboutMe from './components/about-me/AboutMe';


const skillset = [
        "javascript",
        "html5",
        "css",
        "react",
        "Java",
        "C/C++",
        "python",
        "Linux",
        "R",
        "jQuery",
        "flask",
        "git"
      ]
const skillsObj = skillset.map((skill,i) =>({
        id: i,
        skillName: skill
      }));
      

function Main(props){
  return(
    <section>
      <h2>{props.level} in these skills:</h2>
      <ul>
        {props.skills.map((skill)=> (
          <li key={skill.id}>
            {skill.skillName}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  
  return (
    <div className="App">
      <Header name="Ran"/>
      <AboutMe />
      <Skills level="proficient" skills={skillsObj} />
      <Projects />
      
      <Footer name ="Aharon Ran Cohen" year={ new Date().getFullYear()} />
    </div>
  );
}

export default App;
