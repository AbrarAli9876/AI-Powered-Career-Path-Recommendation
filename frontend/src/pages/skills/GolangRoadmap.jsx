// src/pages/skills/GolangRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const goStages = [
    { id: 1, title: 'Stage 1: Setup & Go Fundamentals', objective: 'Install Go, set up your workspace, and learn the basic syntax, variables, and primitive data types.' },
    { id: 2, title: 'Stage 2: Core Programming Constructs', objective: 'Master control flow with loops and conditionals, and understand how to organize code with functions and packages.' },
    { id: 3, title: 'Stage 3: Aggregate Data Structures', objective: 'Learn to work with Go\'s powerful built-in collections: arrays, slices, and maps.' },
    { id: 4, title: 'Stage 4: Composite Types & Methods', objective: 'Understand how to create custom data types with structs and attach behavior to them using methods.' },
    { id: 5, title: 'Stage 5: Pointers & Interfaces', objective: 'Grasp Go\'s approach to memory management with pointers and its powerful system for abstraction with interfaces.' },
    { id: 6, title: 'Stage 6: The Power of Concurrency', objective: 'Dive into Go\'s most famous feature: lightweight concurrency with goroutines and channels for building highly concurrent applications.' },
    { id: 7, title: 'Stage 7: Go Modules & Testing', objective: 'Learn the modern standard for dependency management and how to write and run automated tests for your code.' },
    { id: 8, title: 'Stage 8: Web Development with the Standard Library', objective: 'Build web servers and REST APIs using Go\'s powerful and efficient built-in `net/http` package.' },
    { id: 9, title: 'Stage 9: Working with Databases', objective: 'Understand how to connect your Go applications to SQL databases to persist and retrieve data.' },
    { id: 10, title: 'Stage 10: Professional Tooling & Deployment', objective: 'Learn to containerize your Go applications with Docker and prepare for production deployment.' },
];

const GolangRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Golang Roadmap</h1>
                <p>From beginner to professional, a structured path to mastering Google's fast and concurrent programming language.</p>
            </header>
            <div className="skill-page-stages">
                {goStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/golang/stage-${stage.id}`} className="stage-resources-button">
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

export default GolangRoadmap;
