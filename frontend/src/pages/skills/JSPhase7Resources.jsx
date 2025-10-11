// src/pages/skills/JSPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: JavaScript in the Browser vs. Node.js</h1>
                <p>Understand the key differences between running JavaScript on the client-side and the server-side.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Articles & Videos</h2>
                <div className="resource-item">
                    <h3>What exactly is Node.js? (freeCodeCamp)</h3>
                    <p>A clear explanation of what Node.js is, how its event-driven architecture works, and how it differs from browser JavaScript.</p>
                    <a href="https://www.freecodecamp.org/news/what-exactly-is-node-js-1a212d2c1a64/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                <div className="resource-item">
                    <h3>Node.js Crash Course (Traversy Media)</h3>
                    <p>A practical, hands-on video tutorial covering the core concepts of Node.js, including its module system and building a simple server.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fBNz5xF-Kx4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase7Resources;
