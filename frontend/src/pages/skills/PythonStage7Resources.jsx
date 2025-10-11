// src/pages/skills/PythonStage7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Functional Programming Concepts</h1>
                <p>Learn to write more concise and expressive code using functional patterns like map, filter, and list comprehensions.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Videos</h2>
                <div className="resource-item">
                    <h3>List Comprehensions in Python (Real Python)</h3>
                    <p>A guide to using one of Python's most beloved features for creating concise and readable lists, a core concept in functional-style programming.</p>
                    <a href="https://realpython.com/list-comprehension-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Python Generators (Corey Schafer)</h3>
                    <p>A video tutorial explaining how generators and the `yield` keyword work for creating memory-efficient iterators, which is a key advanced functional concept.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bD05uGo_sVI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage7Resources;

