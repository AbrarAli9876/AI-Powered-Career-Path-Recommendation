// src/pages/skills/JSPhase16Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase16Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 16: Interview Preparation</h1>
                <p>Prepare for technical interviews by practicing coding problems, communication, and system design.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice Platforms & Books</h2>
                <div className="resource-item">
                    <h3>LeetCode</h3>
                    <p>The industry standard for practicing coding problems. Focus on "Easy" and "Medium" problems related to arrays, strings, and trees.</p>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
                <div className="resource-item">
                    <h3>"Cracking the Coding Interview" by Gayle Laakmann McDowell</h3>
                    <p>The classic guide to preparing for technical interviews at top tech companies, covering DSA and problem-solving strategies.</p>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase16Resources;
