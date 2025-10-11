// src/pages/skills/DockerPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Real-World Projects</h1>
                <p>Synthesize all acquired knowledge to build and deploy complete, non-trivial projects for a professional portfolio.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Project Inspiration</h2>
                <div className="resource-item">
                    <h3>Awesome Compose (GitHub)</h3>
                    <p>A curated list of sample multi-container applications using Docker Compose, perfect for inspiration and learning best practices.</p>
                    <a href="https://github.com/docker/awesome-compose" target="_blank" rel="noopener noreferrer" className="resource-link">Browse on GitHub</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase15Resources;
