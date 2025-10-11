// src/pages/skills/PythonStage14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Deployment & Packaging</h1>
                <p>Understand how to package your Python projects and deploy them as applications or services using Docker.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Deployment</h2>
                <div className="resource-item">
                    <h3>Docker for Python Developers (Real Python)</h3>
                    <p>A guide to containerizing your Python applications with Docker for consistent and portable deployments.</p>
                    <a href="https://realpython.com/docker-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage14Resources;
