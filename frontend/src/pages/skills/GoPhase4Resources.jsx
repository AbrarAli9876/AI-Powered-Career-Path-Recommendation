// src/pages/skills/GoPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Composite Types & Methods</h1>
                <p>Understand how to create custom data types with structs and attach behavior to them using methods.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Structs and Methods in Go (Go by Example)</h3>
                    <p>A concise, hands-on tutorial with runnable code examples that clearly demonstrates how to define structs and attach methods.</p>
                    <a href="https://gobyexample.com/structs" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Example</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase4Resources;
