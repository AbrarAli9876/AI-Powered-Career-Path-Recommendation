// src/pages/skills/BashRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const bashStages = [
    { id: 1, title: 'Stage 1: The Shell Environment & Basic Commands', objective: 'Understand the role of the shell and master the fundamental commands for navigating and interacting with a Linux/macOS filesystem.' },
    { id: 2, title: 'Stage 2: Permissions, Users, and Processes', objective: 'Learn to manage file permissions, user accounts, and running processes—the core of system administration.' },
    { id: 3, title: 'Stage 3: I/O Redirection & Text Processing', objective: 'Master the powerful concept of I/O streams and use classic Unix tools to filter, search, and manipulate text data.' },
    { id: 4, title: 'Stage 4: Introduction to Bash Scripting', objective: 'Transition from single commands to writing your first scripts by learning about variables, user input, and basic arithmetic.' },
    { id: 5, title: 'Stage 5: Logic and Control Flow in Scripts', objective: 'Add decision-making and repetition to your scripts with conditional statements (if) and loops (for, while).' },
    { id: 6, title: 'Stage 6: Functions and Script Structure', objective: 'Learn to write modular, reusable, and readable scripts by organizing code into functions and handling arguments.' },
    { id: 7, title: 'Stage 7: Advanced Scripting Techniques', objective: 'Explore more advanced topics like arrays, string manipulation, and best practices for writing robust and professional scripts.' },
    { id: 8, title: 'Stage 8: Automation and Scheduling', objective: 'Learn to automate the execution of your scripts at specific times or intervals using `cron`.' },
    { id: 9, title: 'Stage 9: Real-World Applications (DevOps & Cybersecurity)', objective: 'Apply your Bash skills to practical scenarios in system administration, DevOps automation, and cybersecurity tasks.' },
    { id: 10, title: 'Stage 10: Portfolio & Interview Preparation', objective: 'Solidify your knowledge by building portfolio projects and preparing for common Bash-related interview questions.' },
];

const BashRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Bash Roadmap</h1>
                <p>From beginner to professional, a structured path to mastering the command-line for automation, DevOps, and cybersecurity.</p>
            </header>
            <div className="skill-page-stages">
                {bashStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/bash/stage-${stage.id}`} className="stage-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BashRoadmap;
