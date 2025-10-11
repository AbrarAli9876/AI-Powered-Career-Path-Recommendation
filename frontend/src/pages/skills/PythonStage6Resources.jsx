// src/pages/skills/PythonStage6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Python Standard Library – Must-Know Modules</h1>
                <p>Explore the powerful modules included with Python for handling common tasks with collections, dates, math, and more.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Module Tutorials</h2>
                <div className="resource-item">
                    <h3>Python's `collections` Module (Real Python)</h3>
                    <p>Learn about high-performance container datatypes that are alternatives to the built-in containers. This guide covers `Counter`, `deque`, `defaultdict`, and more.</p>
                    <a href="https://realpython.com/python-collections-module/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>Using the `datetime` module (Corey Schafer)</h3>
                    <p>A clear and practical video tutorial on how to work with dates, times, and timezones in Python using the essential `datetime` module.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eirjjyP2qcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Python `re` Module for Regular Expressions (Real Python)</h3>
                    <p>A comprehensive guide to using regular expressions in Python for powerful pattern matching and text manipulation.</p>
                     <a href="https://realpython.com/regex-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn Regular Expressions</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage6Resources;

