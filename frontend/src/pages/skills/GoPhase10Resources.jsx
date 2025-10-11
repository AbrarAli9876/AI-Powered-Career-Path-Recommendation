// src/pages/skills/GoPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Professional Tooling & Deployment</h1>
                <p>Learn to containerize your Go applications with Docker and prepare for production deployment.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Dockerizing a Go Application (Docker Docs)</h3>
                    <p>The official guide from Docker on how to write a multi-stage Dockerfile to create a small, optimized container image for a Go application.</p>
                    <a href="https://docs.docker.com/language/golang/build-images/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase10Resources;
