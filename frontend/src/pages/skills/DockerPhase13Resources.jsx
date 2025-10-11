// src/pages/skills/DockerPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Performance Optimization</h1>
                <p>Refine Docker images and container configurations for production efficiency, speed, and resource management.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Optimization Guides</h2>
                <div className="resource-item">
                    <h3>Docker Build Best Practices</h3>
                    <p>The official documentation on optimizing your build process with techniques like layer caching and multi-stage builds.</p>
                    <a href="https://docs.docker.com/build/building/best-practices/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>Runtime options with Memory, CPUs, and GPUs</h3>
                    <p>The official guide to applying resource constraints to your running containers to ensure stability.</p>
                     <a href="https://docs.docker.com/config/containers/resource_constraints/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase13Resources;
