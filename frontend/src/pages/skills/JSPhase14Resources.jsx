// src/pages/skills/JSPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Real-World Projects</h1>
                <p>Synthesize all learned skills into a portfolio of tangible, real-world projects that demonstrate job-ready capabilities.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Project Ideas & Inspiration</h2>
                 <div className="resource-item">
                    <h3>Frontend Mentor</h3>
                    <p>A platform that provides professional design files for web projects. You build them with your own code, which is a perfect way to practice and build your portfolio.</p>
                    <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Find a Challenge</a>
                </div>
                <div className="resource-item">
                    <h3>Build a MERN Stack Project (freeCodeCamp)</h3>
                    <p>A complete, hands-on tutorial for building a full-stack application with MongoDB, Express, React, and Node.js—a cornerstone portfolio project.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CvCiNeLnZ00" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase14Resources;
