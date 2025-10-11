// src/pages/skills/JSPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: JavaScript Build Tools & Performance</h1>
                <p>Understand the modern JavaScript build process and learn to optimize applications for speed and performance.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Guides</h2>
                <div className="resource-item">
                    <h3>Vite - Official Guide</h3>
                    <p>The official documentation for getting started with Vite, the next-generation frontend build tool.</p>
                    <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Vite</a>
                </div>
                <div className="resource-item">
                    <h3>web.dev by Google - Fast Load Times</h3>
                    <p>An excellent and authoritative resource on all aspects of web performance optimization, from image compression to code splitting.</p>
                    <a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn Performance</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase12Resources;
