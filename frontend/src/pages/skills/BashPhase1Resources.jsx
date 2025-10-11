// src/pages/skills/BashPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: The Shell Environment & Basic Commands</h1>
                <p>Understand the role of the shell and master the fundamental commands for navigating and interacting with a Linux/macOS filesystem.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Interactive Learning & Videos</h2>
                <div className="resource-item">
                    <h3>The Command Line Crash Course (freeCodeCamp)</h3>
                    <p>An excellent video tutorial for absolute beginners that covers the most essential commands like `ls`, `cd`, `pwd`, `mkdir`, and `rm`.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z-81WdzzltM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>OverTheWire - Bandit Wargame</h3>
                    <p>A fun, gamified way to learn Linux commands in a progressive, challenge-based format. This is one of the best hands-on resources available.</p>
                    <a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Wargame</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase1Resources;
