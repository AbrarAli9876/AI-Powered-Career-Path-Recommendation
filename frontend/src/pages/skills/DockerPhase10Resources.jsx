// src/pages/skills/DockerPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Docker for Development & CI/CD</h1>
                <p>Streamline local development workflows and automate the build, test, and deployment of your applications.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Guides & Documentation</h2>
                <div className="resource-item">
                    <h3>VS Code Dev Containers</h3>
                    <p>The official documentation for using containers as a full-featured development environment inside VS Code.</p>
                    <a href="https://code.visualstudio.com/docs/devcontainers/containers" target="_blank" rel="noopener noreferrer" className="resource-link">Go to VS Code Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>Docker with GitHub Actions</h3>
                    <p>The official guide on how to build a CI/CD pipeline to automatically build and push Docker images using GitHub Actions.</p>
                    <a href="https://docs.docker.com/build/ci/github-actions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase10Resources;
