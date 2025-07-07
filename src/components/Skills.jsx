import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode, faGitAlt, faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const skills = [
    { icon: faHtml5, label: 'HTML5', color: 'Orange'},
    { icon: faCss3Alt, label: 'CSS3', color: 'Blue'},
    { icon: faJs, label: 'JavaScript', color: 'Yellow'},
    { icon: faReact, label: 'React.js', color: 'DarkBlue'},
    { icon: faNode, label: 'Node.js', color: 'Green'},
    { icon: faDatabase, label: 'MySQL', color: 'lightblue'},
    { icon: faGitAlt, label: 'Git', color: 'black'},
    { icon: faPhp, label: 'PHP', color: 'indigo'}
  ];

  return (
    <section id="skills" className="skills-section py-5 px-4" style={{backgroundColor: 'rgb(230, 230, 230)'}}>
      <div className="container text-center">
        <h2 className="mb-5 display-4 fw-bold">Skills</h2>
        <div className="row justify-content-center gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-md-2 my-3 icon-skill">
              <FontAwesomeIcon icon={skill.icon} size="3x" className="" style={{color: skill.color}} />
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
