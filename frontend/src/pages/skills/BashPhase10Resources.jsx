// src/pages/skills/BashPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Portfolio & Interview Preparation</h1>
                <p>Solidify your knowledge by building portfolio projects and preparing for common Bash-related interview questions.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Interview Prep</h2>
                <div className="resource-item">
                    <h3>Bash Scripting Interview Questions (GeeksForGeeks)</h3>
                    <p>A list of common questions asked in interviews for roles that require Bash scripting, from basic commands to scripting logic.</p>
                    <a href="https://www.geeksforgeeks.org/bash-scripting-interview-questions/" target="_blank" rel="noopener noreferrer" className="resource-link">See Questions</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase10Resources;
