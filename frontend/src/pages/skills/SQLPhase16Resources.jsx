// src/pages/skills/SQLPhase16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Portfolio & Resume Strategy</h1>
                <p>Learn to professionally document and present your projects to demonstrate your skills to employers.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Effectively Showcase Your Projects on GitHub (Medium)</h3>
                    <p>Tips for creating a compelling README.md file that clearly explains your project's purpose, process, and findings.</p>
                    <a href="https://medium.com/mlearning-ai/effectively-showcase-your-projects-on-github-b35246757917" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase16Resources;
