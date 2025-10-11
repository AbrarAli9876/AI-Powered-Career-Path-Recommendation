// src/pages/skills/DockerPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Core Docker Concepts</h1>
                <p>Master the fundamental CLI commands for managing the lifecycle of containers and images.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Commands & Cheatsheets</h2>
                <div className="resource-item">
                    <h3>Learn Docker in 2 Hours (KodeKloud)</h3>
                    <p>A free YouTube video that provides a practical walkthrough of the most essential Docker commands for beginners.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LkW-33325xI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Docker CLI Cheat Sheet</h3>
                    <p>The official cheatsheet from Docker, a perfect quick reference for all the core commands.</p>
                    <a href="https://docs.docker.com/get-started/docker_cheatsheet.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">Download PDF</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase3Resources;
