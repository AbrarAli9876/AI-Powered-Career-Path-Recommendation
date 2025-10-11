// src/pages/skills/PythonStage10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Python for Databases</h1>
                <p>Understand how to connect Python to SQL databases and use Object-Relational Mappers (ORMs) for data management.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Libraries</h2>
                <div className="resource-item">
                    <h3>SQLAlchemy 2.0 Tutorial (Mike Driscoll)</h3>
                    <p>A video tutorial on the most popular Object-Relational Mapper (ORM) for Python, allowing you to interact with databases using Python objects.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/woH8D-IeC2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage10Resources;
