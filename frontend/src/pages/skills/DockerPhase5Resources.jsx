// src/pages/skills/DockerPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Managing Data with Docker</h1>
                <p>Learn to manage stateful data using Docker Volumes and Bind Mounts to ensure data persistence.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Storage Guides</h2>
                 <div className="resource-item">
                    <h3>Docker Docs: Storage Overview</h3>
                    <p>The official documentation explaining the differences between volumes, bind mounts, and tmpfs mounts.</p>
                    <a href="https://docs.docker.com/storage/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>Docker Volumes Explained in 10 Minutes</h3>
                    <p>A quick video that visually explains what volumes are and why they are the preferred way to manage persistent data.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p2PH_e_uW-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase5Resources;
