// src/pages/skills/PythonStage2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core Python Programming</h1>
                <p>Master the fundamental logic of programming with operators, conditionals, loops, functions, and exception handling.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>Python Functions Tutorial (Corey Schafer)</h3>
                    <p>Corey Schafer's tutorials are legendary for their clarity and depth. This video is a perfect explanation of how to write and use functions in Python, covering arguments, return values, and scope.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Os0o3wzS_I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Python Exception Handling (Real Python)</h3>
                    <p>A comprehensive guide to using `try...except` blocks to handle errors gracefully in your programs, a crucial skill for writing robust code.</p>
                    <a href="https://realpython.com/python-exceptions/" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Real Python</a>
                </div>
                <div className="resource-item">
                    <h3>Python For Loops (w3schools)</h3>
                    <p>An interactive, text-based resource for practicing the syntax of conditional statements and loops, with a "Try it Yourself" editor.</p>
                    <a href="https://www.w3schools.com/python/python_for_loops.asp" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on w3schools</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage2Resources;

