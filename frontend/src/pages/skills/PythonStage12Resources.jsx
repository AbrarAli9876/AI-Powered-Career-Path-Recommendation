// src/pages/skills/PythonStage12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Version Control & Collaboration</h1>
                <p>Master the essential tools for professional software development: Git and GitHub.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Version Control</h2>
                 <div className="resource-item">
                    <h3>Git & GitHub for Beginners (freeCodeCamp)</h3>
                    <p>A full video course that covers all the essential commands and concepts you need to start using Git and hosting your code on GitHub.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RGOj5yH7evk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage12Resources;
