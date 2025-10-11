// src/pages/skills/CPlusPlusPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Dynamic Memory Management</h1>
                <p>Learn to manually manage memory with `new`/`delete` and master modern, safer alternatives with smart pointers.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Smart Pointers</h2>
                <div className="resource-item">
                    <h3>Smart Pointers in C++ (The Cherno)</h3>
                    <p>A video tutorial explaining the modern C++ approach to memory management with `unique_ptr`, `shared_ptr`, and `weak_ptr`.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UOB7-B2MfwA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>`std::unique_ptr` (cppreference.com)</h3>
                    <p>The definitive reference for `unique_ptr`, the default smart pointer for exclusive memory ownership.</p>
                    <a href="https://en.cppreference.com/w/cpp/memory/unique_ptr" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase7Resources;
