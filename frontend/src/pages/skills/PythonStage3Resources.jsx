// src/pages/skills/PythonStage3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Data Structures & Algorithms in Python</h1>
                <p>Learn to store, organize, and process data efficiently with Python's built-in data structures and core algorithms.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses & Practice</h2>
                <div className="resource-item">
                    <h3>Data Structures & Algorithms in Python (freeCodeCamp)</h3>
                    <p>A full-length course on YouTube that covers both the theory and implementation of fundamental data structures and algorithms.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pkYVOmU3MgA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>LeetCode - Top Interview Questions</h3>
                    <p>The best platform for practicing data structures and algorithms problems to prepare for technical interviews.</p>
                    <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage3Resources;

