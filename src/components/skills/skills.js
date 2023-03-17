import React from 'react';
import './skills.css';
function Skills(props){
  return(
    <div className='skills'>
      <h2>{props.level} in these skills:</h2>
      <p>
        {props.skills.map((skill)=> (
          <span key={skill.id}>
            {skill.skillName} |
          </span> 
        ))}
      </p>
    </div>
  );
}

export default Skills;
