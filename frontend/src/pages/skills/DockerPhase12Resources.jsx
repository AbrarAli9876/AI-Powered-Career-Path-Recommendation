// src/pages/skills/DockerPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Real-World Docker Use Cases</h1>
                <p>Apply your knowledge to containerize common application architectures, from web apps to databases.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Use Case Guides</h2>
                <div className="resource-item">
                    <h3>How To Build a Node.js Application with Docker (DigitalOcean)</h3>
                    <p>A classic, step-by-step community tutorial for containerizing a Node.js web application.</p>
                    <a href="https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>How To Use the Postgres Docker Official Image (Docker Blog)</h3>
                    <p>A blog post from Docker explaining the best practices for running a PostgreSQL database in a container.</p>
                     <a href="https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Blog</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase12Resources;
