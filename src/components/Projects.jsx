import React from 'react';
import Button from './subs/ButtonPrimary.jsx'
import clock from '../assets/clock.png'

export default function Projects() {
    const projectList = [
        {
            name: 'Kitabo',
            description: 'An advanced, modular Discord bot',
            image: 'https://raw.githubusercontent.com/RafeyAhmed/Kitabo/main/kitaboLogo.png',
            tech: ['Node.js', 'Discord.js', 'JavaScript'],
            link: 'https://github.com/RafeyAhmed/Kitabo',
        },
        {
            name: 'Healthy Mind',
            description: 'A Meditation related webtsite',
            image: 'https://raw.githubusercontent.com/RafeyAhmed/Healthy-Mind/main/assets/logoircularbackground.png',
            tech: ['HTML', 'CSS', 'BootStrap'],
            link: 'https://github.com/RafeyAhmed/Healthy-Mind',
        },
        {
            name: 'React Portfolio',
            description: 'Portfolio built with React',
            image: 'https://raw.githubusercontent.com/RafeyAhmed/React-Portfolio/master/src/assets/facey.png',
            tech: ['React.js', 'Bootstrap'],
            link: 'https://github.com/RafeyAhmed/React-Portfolio',
        },
    ];

    return (
        <section id="projects" className="projects-section py-5 px-4">
            <div className="container">
                <h2 className="mb-4 display-3 text-center my-3 fw-bold">Projects</h2>
                <div className="row">
                    {projectList.map((project, index) => (
                        <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
                            <div className="project-card p-4 border rounded shadow-sm text-center" style={{ maxWidth: '280px' }}>
                                <img src={project.image} alt="image not found" style={{ maxWidth: '150px' }} />
                                <h4 className="my-2">{project.name}</h4>
                                <p>{project.description}</p>
                                <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
                                {project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button label='View project' />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
