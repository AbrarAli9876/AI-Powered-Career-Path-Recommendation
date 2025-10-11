// src/pages/skills/PythonStage5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: File Handling & OS Interaction</h1>
                <p>Learn to read from and write to various file formats and interact with the underlying operating system.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>Reading and Writing Files in Python (Real Python)</h3>
                    <p>An in-depth guide to working with text files, including best practices like using the `with` statement for automatic file closing.</p>
                    <a href="https://realpython.com/read-write-files-python/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Working With JSON Data in Python</h3>
                    <p>A guide to using Python's built-in `json` module to serialize and deserialize JSON data, a crucial skill for working with web APIs.</p>
                    <a href="https://realpython.com/python-json/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Automate Everything with Python (freeCodeCamp)</h3>
                    <p>A comprehensive video course that covers interacting with the OS, manipulating files, sending emails, and much more.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_k-e_fi-g-g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage5Resources;

