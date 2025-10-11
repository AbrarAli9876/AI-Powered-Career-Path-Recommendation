// src/pages/skills/CPlusPlusPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Functions</h1>
                <p>Master the fundamental unit of code organization, including parameters, return values, and pass-by-reference vs. pass-by-value.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Documentation</h2>
                <div className="resource-item">
                    <h3>Functions in C++ (The Cherno)</h3>
                    <p>A clear video tutorial explaining how to declare, define, and call functions in C++.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pgaHk-t6u_4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Functions (cplusplus.com)</h3>
                    <p>A detailed text-based tutorial covering function parameters, default values, and overloading.</p>
                    <a href="https://cplusplus.com/doc/tutorial/functions/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase4Resources;
