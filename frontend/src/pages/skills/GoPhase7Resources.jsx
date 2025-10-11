// src/pages/skills/GoPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Go Modules & Testing</h1>
                <p>Learn the modern standard for dependency management and how to write and run automated tests for your code.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Using Go Modules (Official Go Blog)</h3>
                    <p>The official tutorial on how to create and manage dependencies in a Go project using modules.</p>
                    <a href="https://go.dev/blog/using-go-modules" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>Go by Example: Testing</h3>
                    <p>A hands-on tutorial for writing basic unit tests using Go's built-in `testing` package.</p>
                    <a href="https://gobyexample.com/testing" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Example</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase7Resources;
