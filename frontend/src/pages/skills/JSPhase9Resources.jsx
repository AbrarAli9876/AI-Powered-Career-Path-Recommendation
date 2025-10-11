// src/pages/skills/JSPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: JavaScript Frameworks (React)</h1>
                <p>Learn a modern frontend framework to build complex, scalable single-page applications.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Learning Resources for React</h2>
                <div className="resource-item">
                    <h3>React Official Docs - "Learn React"</h3>
                    <p>The new, official React documentation is the best place to start. It offers excellent interactive examples and a well-structured tutorial.</p>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="resource-link">Start Learning</a>
                </div>
                <div className="resource-item">
                    <h3>React - The Complete Guide (Udemy)</h3>
                    <p>An exhaustive and highly-rated course by Maximilian Schwarzmüller, covering everything from the basics to advanced topics like Redux.</p>
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase9Resources;
