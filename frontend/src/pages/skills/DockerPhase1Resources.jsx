// src/pages/skills/DockerPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Introduction to Containers & Virtualization</h1>
                <p>Understand the "why" behind Docker and how containerization solves fundamental problems in software development.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Overviews</h2>
                <div className="resource-item">
                    <h3>What is Docker? (TechWorld with Nana)</h3>
                    <p>A clear and concise YouTube video explaining the core concepts of Docker, containers, and their benefits for beginners.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3c-iBn73dDE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Docker Docs: Get Started Overview</h3>
                    <p>The official documentation from Docker, providing a high-level overview of the platform and its components.</p>
                    <a href="https://docs.docker.com/get-started/overview/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase1Resources;