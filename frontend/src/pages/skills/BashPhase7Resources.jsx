// src/pages/skills/BashPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Advanced Scripting Techniques</h1>
                <p>Explore more advanced topics like arrays, string manipulation, and best practices for writing robust scripts.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Bash Arrays (Linuxize)</h3>
                    <p>A detailed guide explaining how to declare, use, and iterate over arrays in Bash scripting.</p>
                    <a href="https://linuxize.com/post/bash-arrays/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>ShellCheck - A static analysis tool for shell scripts</h3>
                    <p>An essential tool for any Bash developer. ShellCheck analyzes your scripts and points out common bugs and bad practices.</p>
                    <a href="https://www.shellcheck.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Use ShellCheck</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase7Resources;
