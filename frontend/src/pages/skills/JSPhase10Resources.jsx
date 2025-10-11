// src/pages/skills/JSPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: State Management & Architecture</h1>
                <p>Master patterns and libraries for managing complex application state to build maintainable apps.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Libraries & Guides</h2>
                 <div className="resource-item">
                    <h3>Zustand - Official Documentation</h3>
                    <p>Clear and concise documentation for getting started with Zustand, a popular lightweight state management library.</p>
                    <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a>
                </div>
                <div className="resource-item">
                    <h3>Redux Toolkit - Official Quick Start</h3>
                    <p>The modern, recommended way to learn and use Redux, which significantly reduces boilerplate code.</p>
                    <a href="https://redux-toolkit.js.org/tutorials/quick-start" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase10Resources;
