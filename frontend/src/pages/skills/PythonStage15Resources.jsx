// src/pages/skills/PythonStage15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Best Practices & Clean Code</h1>
                <p>Learn the principles of writing professional, readable, and maintainable code, including PEP8 and type hints.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Code Quality</h2>
                <div className="resource-item">
                    <h3>PEP 8 – Style Guide for Python Code</h3>
                    <p>The official style guide for Python code. Adhering to it is the first sign of a professional.</p>
                    <a href="https://peps.python.org/pep-0008/" target="_blank" rel="noopener noreferrer" className="resource-link">Read PEP 8</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage15Resources;
