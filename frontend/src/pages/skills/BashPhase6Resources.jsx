// src/pages/skills/BashPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Functions and Script Structure</h1>
                <p>Learn to write modular, reusable, and readable scripts by organizing code into functions and handling arguments.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Bash Functions (Linuxize)</h3>
                    <p>A comprehensive guide on how to define and use functions in Bash, including how to pass arguments and return values.</p>
                    <a href="https://linuxize.com/post/bash-functions/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase6Resources;
