// src/pages/skills/DockerPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Docker Installation & Setup</h1>
                <p>Install the necessary tools, configure your environment, and run your first container.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Installation Guides</h2>
                <div className="resource-item">
                    <h3>Install Docker Desktop on Windows</h3>
                    <p>The official step-by-step guide from Docker for installing on Windows, including system requirements.</p>
                    <a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Windows Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Install Docker Desktop on Mac</h3>
                    <p>The official guide for installing on macOS, with separate instructions for Intel and Apple Silicon chips.</p>
                    <a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Mac Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>Linux Post-installation Steps</h3>
                    <p>A crucial guide for Linux users on how to manage Docker as a non-root user for security and convenience.</p>
                    <a href="https://docs.docker.com/engine/install/linux-postinstall/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Linux Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase2Resources;
