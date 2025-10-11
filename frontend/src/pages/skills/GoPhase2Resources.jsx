// src/pages/skills/GoPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core Programming Constructs</h1>
                <p>Master control flow with loops and conditionals, and understand how to organize code with functions and packages.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>A Tour of Go</h3>
                    <p>An interactive, official tour that lets you write and run Go code in your browser. The sections on "Flow control" and "More types" are perfect for this stage.</p>
                    <a href="https://go.dev/tour/flowcontrol/1" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Tour</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase2Resources;
