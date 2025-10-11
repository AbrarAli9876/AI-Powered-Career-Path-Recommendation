// src/pages/skills/PythonStage8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Intermediate to Advanced Concepts</h1>
                <p>Dive into powerful Python features like decorators, context managers, and concurrency (multithreading/asyncIO).</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Decorators & Context Managers</h2>
                <div className="resource-item">
                    <h3>Python Decorators (Real Python)</h3>
                    <p>A comprehensive article that explains how decorators work by wrapping other functions, and how to create your own.</p>
                    <a href="https://realpython.com/primer-on-python-decorators/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Python Decorators Tutorial (Corey Schafer)</h3>
                    <p>A clear video tutorial that walks through the concept of decorators, starting from the foundational principles of functions.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FsAPt_9Bf3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="resource-section">
                <h2>Concurrency</h2>
                 <div className="resource-item">
                    <h3>Async IO in Python: A Complete Walkthrough (Real Python)</h3>
                    <p>An in-depth look at Python's modern approach to concurrency for I/O-bound tasks using `async` and `await` syntax.</p>
                    <a href="https://realpython.com/async-io-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Threading vs Multiprocessing (Corey Schafer)</h3>
                    <p>An essential video that explains the difference between threading and multiprocessing in Python and when to use each for concurrent tasks.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G-_1dM-2V1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage8Resources;

