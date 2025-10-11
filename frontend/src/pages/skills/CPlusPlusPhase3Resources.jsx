// src/pages/skills/CPlusPlusPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Control Structures</h1>
                <p>Learn to dictate the flow of execution in your program with conditional logic (if, switch) and loops (for, while).</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Videos</h2>
                <div className="resource-item">
                    <h3>C++ Control Flow (Programiz)</h3>
                    <p>Clear, concise tutorials with simple examples for if, else, for, while, and switch statements.</p>
                    <a href="https://www.programiz.com/cpp-programming/if-else" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>C++ For Loops (The Cherno)</h3>
                    <p>A video from a highly respected C++ educator that explains the for loop in detail, a fundamental control structure.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p1-6D_v3aEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase3Resources;
