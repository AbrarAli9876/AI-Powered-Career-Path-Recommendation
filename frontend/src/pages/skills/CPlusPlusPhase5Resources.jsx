// src/pages/skills/CPlusPlusPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Arrays & Strings</h1>
                <p>Learn to use both low-level C-style arrays/strings and the modern, safer `std::vector` and `std::string`.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Modern C++ Collections</h2>
                <div className="resource-item">
                    <h3>std::string (cplusplus.com)</h3>
                    <p>The reference documentation for the modern C++ string class, showcasing its rich functionality for text manipulation.</p>
                    <a href="https://cplusplus.com/reference/string/string/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                <div className="resource-item">
                    <h3>std::vector in C++ (The Cherno)</h3>
                    <p>A video explaining how to use `std::vector`, the dynamic array that is one of the most essential containers in the C++ Standard Library.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ryaeu5f-JI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase5Resources;
