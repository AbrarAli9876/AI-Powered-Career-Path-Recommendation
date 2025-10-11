// src/pages/skills/GoPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Setup & Go Fundamentals</h1>
                <p>Install Go, set up your workspace, and learn the basic syntax, variables, and primitive data types.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Installation & First Steps</h2>
                <div className="resource-item">
                    <h3>Go Official Website - Getting Started</h3>
                    <p>The official documentation is the best place to start. It guides you through installing Go, setting up your environment, and running your first program.</p>
                    <a href="https://go.dev/doc/install" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Installation Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Go Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>A comprehensive, full-length video course on YouTube that covers everything from installation to the core concepts of the language.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YS4e4q9oBaU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase1Resources;
