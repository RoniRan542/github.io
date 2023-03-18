// import logo from './logo.svg';
import './App.scss';
import Projects from './components/projects';
import About from './components/About';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './components/layout/index'
import Home from './components/home';
import Contact from './components/Contact';


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
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
