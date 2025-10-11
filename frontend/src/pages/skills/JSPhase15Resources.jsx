// src/pages/skills/JSPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Portfolio & Resume Strategy</h1>
                <p>Learn to market your skills effectively by creating a compelling portfolio, resume, and professional online presence.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tools</h2>
                <div className="resource-item">
                    <h3>GitHub Profile README Generator</h3>
                    <p>A tool to help you create a visually appealing and informative README for your main GitHub profile page.</p>
                    <a href="https://rahuldkjain.github.io/gh-profile-readme-generator/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Generator</a>
                </div>
                 <div className="resource-item">
                    <h3>How to Build an Awesome GitHub Portfolio (GeeksForGeeks)</h3>
                    <p>A guide with best practices for setting up and maintaining a strong GitHub portfolio that will impress recruiters.</p>
                    <a href="https://www.geeksforgeeks.org/how-to-build-a-awesome-github-developer-portfolio/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase15Resources;
