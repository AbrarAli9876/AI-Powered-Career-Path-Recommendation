// src/pages/skills/DockerPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Troubleshooting & Debugging</h1>
                <p>Develop a systematic approach to diagnosing and resolving common Docker errors and issues.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Debugging Guides</h2>
                 <div className="resource-item">
                    <h3>How to Debug Docker Containers Locally (Gravitee.io)</h3>
                    <p>A blog post that provides a practical overview of common debugging commands like logs, exec, and inspect.</p>
                    <a href="https://www.gravitee.io/blog/how-to-debug-docker-containers-locally" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Blog</a>
                </div>
                <div className="resource-item">
                    <h3>Debug your app in a container using VS Code</h3>
                    <p>Official documentation for setting up an advanced debugging workflow by attaching the VS Code debugger to a Node.js process running inside a container.</p>
                    <a href="https://code.visualstudio.com/docs/containers/debug-node" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase14Resources;
