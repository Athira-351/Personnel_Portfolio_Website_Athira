import React, { useEffect, useState } from 'react';

const ExperienceList = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const fetchExperience = async () => {
            const response = await axios.get('http://localhost:5000/api/experience');
            setExperience(response.data);
        };

        fetchExperience();
    }, []);

    return (
        <div>
            <h2>Experience</h2>
            <ul>
                {experience.map((exp) => (
                    <li key={exp.id}>
                        <h3>{exp.role} at {exp.companyName}</h3>
                        <p>{exp.description}</p>
                        <span>{exp.startDate} - {exp.endDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceList;
