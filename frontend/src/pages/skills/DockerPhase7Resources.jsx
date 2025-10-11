// src/pages/skills/DockerPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Docker Compose</h1>
                <p>Learn to define and run multi-container applications declaratively with a single YAML file.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Tutorials & Examples</h2>
                <div className="resource-item">
                    <h3>Docker Compose Tutorial (TechWorld with Nana)</h3>
                    <p>A clear and practical YouTube tutorial explaining how to set up a multi-container application with Docker Compose.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qxxQY-Y-Y-g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Awesome Compose (GitHub)</h3>
                    <p>A curated list of sample Docker Compose applications for various technology stacks, perfect for real-world examples.</p>
                    <a href="https://github.com/docker/awesome-compose" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Examples</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase7Resources;
