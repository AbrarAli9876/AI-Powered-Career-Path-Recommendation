// src/pages/skills/DockerPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Security & Best Practices</h1>
                <p>Learn fundamental security practices for building and running containers responsibly.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Guides & Tools</h2>
                 <div className="resource-item">
                    <h3>OWASP Docker Security Cheat Sheet</h3>
                    <p>A comprehensive checklist of security best practices from the Open Web Application Security Project (OWASP).</p>
                    <a href="https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Cheat Sheet</a>
                </div>
                <div className="resource-item">
                    <h3>Trivy - Open Source Vulnerability Scanner</h3>
                    <p>A popular, simple, and fast open-source tool for scanning your container images for known vulnerabilities.</p>
                    <a href="https://aquasecurity.github.io/trivy/" target="_blank" rel="noopener noreferrer" className="resource-link">Get Trivy</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase9Resources;
