import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink}>GitHub</a>
                        <a href={project.liveDemo}>Live Demo</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
