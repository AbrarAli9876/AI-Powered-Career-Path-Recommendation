// src/pages/skills/CPlusPlusPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Introduction to C++ & Development Setup</h1>
                <p>Understand the philosophy of C++, the compilation process, and set up a professional development environment.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses & Tutorials</h2>
                <div className="resource-item">
                    <h3>C++ Tutorial for Beginners (freeCodeCamp)</h3>
                    <p>A comprehensive, full-length course on YouTube that covers everything from the history of C++ to setting up your environment and writing your first program.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vLnPwxZdW4Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Learn C++ (Codecademy)</h3>
                    <p>An interactive, hands-on course that is excellent for beginners to learn the basic syntax and concepts in a structured way.</p>
                    <a href="https://www.codecademy.com/learn/learn-c-plus-plus" target="_blank" rel="noopener noreferrer" className="resource-link">Start on Codecademy</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase1Resources;
