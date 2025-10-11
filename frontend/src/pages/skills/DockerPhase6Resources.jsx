// src/pages/skills/DockerPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Networking in Docker</h1>
                <p>Demystify how containers communicate with each other and the outside world.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Labs</h2>
                <div className="resource-item">
                    <h3>Docker Docs: Networking Tutorial</h3>
                    <p>An official hands-on tutorial that explains user-defined bridge networks and DNS resolution between containers.</p>
                    <a href="https://docs.docker.com/engine/tutorials/networkingcontainers/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>Play with Docker - Networking Labs</h3>
                    <p>A free, in-browser environment where you can practice Docker networking concepts with multiple virtual nodes.</p>
                    <a href="https://training.play-with-docker.com/dev-networking-basics/" target="_blank" rel="noopener noreferrer" className="resource-link">Start Labs</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase6Resources;
