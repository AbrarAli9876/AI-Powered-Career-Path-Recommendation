// src/pages/skills/BashPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Introduction to Bash Scripting</h1>
                <p>Transition from single commands to writing your first scripts by learning about variables, user input, and basic arithmetic.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Beginner Scripting</h2>
                <div className="resource-item">
                    <h3>Bash Scripting Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>A full-length video course that is perfect for getting started. It covers creating your first script, using variables, and reading user input.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tK9Oc6AEnR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase4Resources;
