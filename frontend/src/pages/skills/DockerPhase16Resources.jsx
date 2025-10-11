// src/pages/skills/DockerPhase16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const DockerPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Interview Preparation & Certification</h1>
                <p>Translate your skills into career opportunities by preparing for technical interviews and validating your expertise.</p>
                <Link to="/skills/docker" className="back-link">← Back to Docker Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Certification & Practice</h2>
                <div className="resource-item">
                    <h3>KodeKloud - Docker Certified Associate (DCA) Exam Course</h3>
                    <p>A highly recommended course with hands-on labs specifically designed to prepare you for the DCA certification exam.</p>
                    <a href="https://kodekloud.com/courses/docker-certified-associate-dca-exam-course/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to KodeKloud</a>
                </div>
                <div className="resource-item">
                    <h3>GitHub - Docker Interview Questions</h3>
                    <p>A community-curated list of common Docker interview questions, covering conceptual, practical, and security topics.</p>
                    <a href="https://github.com/bregman-arie/devops-exercises/blob/master/questions-and-answers/docker.md" target="_blank" rel="noopener noreferrer" className="resource-link">See Questions on GitHub</a>
                </div>
            </div>
        </div>
    </>
);
export default DockerPhase16Resources;
