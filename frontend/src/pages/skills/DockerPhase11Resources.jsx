// src/pages/skills/DockerPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Docker for Deployment</h1>
                <p>Learn to run containers in a production-like environment and get an introduction to orchestration with Docker Swarm.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Orchestration Tutorials</h2>
                <div className="resource-item">
                    <h3>Docker Swarm Tutorial</h3>
                    <p>The official documentation provides a hands-on tutorial for initializing a swarm and deploying services.</p>
                    <a href="https://docs.docker.com/engine/swarm/swarm-tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase11Resources;
