// src/pages/skills/PythonRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const pythonStages = [
    { id: 1, title: 'Stage 1: Absolute Basics of Programming & Python Setup', objective: 'Install Python and set up your development environment while learning the core syntax, variables, and data types.' },
    { id: 2, title: 'Stage 2: Core Python Programming', objective: 'Master the fundamental logic of programming with operators, conditionals, loops, functions, and exception handling.' },
    { id: 3, title: 'Stage 3: Data Structures & Algorithms in Python', objective: 'Learn to store, organize, and process data efficiently with Python\'s built-in data structures and core algorithms.' },
    { id: 4, title: 'Stage 4: Object-Oriented Programming (OOP)', objective: 'Understand the principles of OOP to write modular, reusable, and scalable applications using classes and objects.' },
    { id: 5, title: 'Stage 5: File Handling & OS Interaction', objective: 'Learn to read from and write to various file formats and interact with the underlying operating system.' },
    { id: 6, title: 'Stage 6: Python Standard Library – Must-Know Modules', objective: 'Explore the powerful modules included with Python for handling common tasks with collections, dates, math, and more.' },
    { id: 7, title: 'Stage 7: Functional Programming Concepts', objective: 'Learn to write more concise and expressive code using functional patterns like map, filter, and list comprehensions.' },
    { id: 8, title: 'Stage 8: Intermediate to Advanced Concepts', objective: 'Dive into powerful Python features like decorators, context managers, and concurrency (multithreading/asyncIO).' },
    { id: 9, title: 'Stage 9: Working with APIs & Networking', objective: 'Learn to interact with web services and APIs, and scrape data from websites using popular Python libraries.' },
    { id: 10, title: 'Stage 10: Python for Databases', objective: 'Understand how to connect Python to SQL databases and use Object-Relational Mappers (ORMs) for data management.' },
    { id: 11, title: 'Stage 11: Python Specializations', objective: 'Choose a professional path and develop deep, job-ready skills in a specific domain like Web Development or Data Science.' },
    { id: 12, title: 'Stage 12: Version Control & Collaboration', objective: 'Master the essential tools for professional software development: Git and GitHub.' },
    { id: 13, title: 'Stage 13: Testing & Debugging', objective: 'Learn to write automated tests to ensure code quality and use debugging tools to find and fix errors efficiently.' },
    { id: 14, title: 'Stage 14: Deployment & Packaging', objective: 'Understand how to package your Python projects and deploy them as applications or services using Docker.' },
    { id: 15, title: 'Stage 15: Best Practices & Clean Code', objective: 'Learn the principles of writing professional, readable, and maintainable code, including PEP8 and type hints.' },
    { id: 16, title: 'Stage 16: Real-World Projects (Beginner → Advanced)', objective: 'Synthesize your knowledge by building a portfolio of tangible, real-world projects that demonstrate your skills.' },
    { id: 17, title: 'Stage 17: Portfolio & Resume Strategy', objective: 'Learn to market your skills effectively by creating a compelling portfolio, resume, and professional online presence.' },
    { id: 18, title: 'Stage 18: Interview Prep', objective: 'Prepare for technical interviews by practicing coding challenges, system design, and behavioral questions.' },
];

const PythonRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Python Roadmap</h1>
                <p>From zero to professional, this roadmap provides a structured path to mastering the Python programming language and its vast ecosystem.</p>
            </header>
            <div className="skill-page-stages">
                {pythonStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/python/stage-${stage.id}`} className="stage-resources-button">
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

export default PythonRoadmap;

