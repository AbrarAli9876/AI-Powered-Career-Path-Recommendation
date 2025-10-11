// src/pages/skills/DockerPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Docker Images & Dockerfiles</h1>
                <p>Learn to write Dockerfiles, the blueprints for building custom, reproducible application environments.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Best Practices & Tutorials</h2>
                <div className="resource-item">
                    <h3>Dockerfile Best Practices</h3>
                    <p>The official guide from Docker on how to write efficient, secure, and maintainable Dockerfiles.</p>
                    <a href="https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Docker Curriculum - Webapps with Docker</h3>
                    <p>A practical, hands-on tutorial that walks you through creating a Dockerfile for a sample web application.</p>
                    <a href="https://docker-curriculum.com/#-webapps-with-docker" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase4Resources;
