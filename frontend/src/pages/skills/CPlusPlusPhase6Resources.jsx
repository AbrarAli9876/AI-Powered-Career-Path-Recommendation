// src/pages/skills/CPlusPlusPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Pointers & References</h1>
                <p>Gain a deep understanding of C++'s most powerful features for direct memory control.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Pointers in C++ (The Cherno)</h3>
                    <p>An excellent video that demystifies pointers by explaining them as variables that simply hold memory addresses.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DTxHyVn0ODg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Pointers and References in C++ (GeeksforGeeks)</h3>
                    <p>A clear article that explains the syntax and, more importantly, the key differences in behavior between pointers and references.</p>
                    <a href="https://www.geeksforgeeks.org/pointers-vs-references-cpp/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase6Resources;
