// src/pages/skills/DockerPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Docker Registry & Image Distribution</h1>
                <p>Understand how to store, share, and distribute your container images using registries.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Quickstart Guides</h2>
                <div className="resource-item">
                    <h3>Docker Hub Quickstart</h3>
                    <p>The official guide to getting started with Docker Hub, the default public registry.</p>
                    <a href="https://docs.docker.com/docker-hub/quickstart/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docker Hub</a>
                </div>
                <div className="resource-item">
                    <h3>GitHub Container Registry (GHCR)</h3>
                    <p>The official documentation for working with GHCR, which is tightly integrated with GitHub repositories and Actions.</p>
                    <a href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase8Resources;
