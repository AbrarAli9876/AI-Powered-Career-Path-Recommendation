// src/pages/skills/PythonStage13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Testing & Debugging</h1>
                <p>Learn to write automated tests to ensure code quality and use debugging tools to find and fix errors efficiently.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Testing & Debugging</h2>
                <div className="resource-item">
                    <h3>Getting Started with Testing in Python (Real Python)</h3>
                    <p>A comprehensive guide that introduces the concepts of automated testing and the `pytest` framework.</p>
                    <a href="https://realpython.com/python-testing/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage13Resources;
