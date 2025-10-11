// src/pages/skills/PythonStage18Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage18Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 18: Interview Prep</h1>
                <p>Prepare for technical interviews by practicing coding challenges, system design, and behavioral questions.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice Platforms</h2>
                <div className="resource-item">
                    <h3>LeetCode</h3>
                    <p>The premier platform for practicing data structures and algorithm problems, a key part of technical interviews for Python roles.</p>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
                <div className="resource-item">
                    <h3>HackerRank</h3>
                    <p>Offers a wide range of Python-specific challenges and interview preparation kits.</p>
                    <a href="https://www.hackerrank.com/domains/python" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on HackerRank</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage18Resources;

