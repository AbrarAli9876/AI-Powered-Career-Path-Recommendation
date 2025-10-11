// src/pages/skills/PythonStage16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Real-World Projects</h1>
                <p>Synthesize your knowledge by building a portfolio of tangible, real-world projects that demonstrate your skills.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Project Inspiration</h2>
                <div className="resource-item">
                    <h3>42 Exciting Python Project Ideas (GeeksForGeeks)</h3>
                    <p>A large list of project ideas for all skill levels, from beginner to advanced.</p>
                    <a href="https://www.geeksforgeeks.org/python-projects-beginner-to-advanced/" target="_blank" rel="noopener noreferrer" className="resource-link">Get Ideas</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage16Resources;
