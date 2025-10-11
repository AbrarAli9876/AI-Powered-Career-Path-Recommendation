// src/pages/skills/PythonStage4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Object-Oriented Programming (OOP)</h1>
                <p>Understand the principles of OOP to write modular, reusable, and scalable applications using classes and objects.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Python OOP Tutorial (Corey Schafer)</h3>
                    <p>A comprehensive 6-part series that is widely considered one of the best resources for learning Object-Oriented Programming in Python. It covers classes, instances, inheritance, and more.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDa-Z5JzLYM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Object-Oriented Programming (OOP) in Python 3 (Real Python)</h3>
                    <p>An in-depth, text-based guide that explains all the core concepts of OOP with clear examples and best practices.</p>
                    <a href="https://realpython.com/python3-object-oriented-programming/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage4Resources;

