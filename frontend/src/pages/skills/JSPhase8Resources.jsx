// src/pages/skills/JSPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Modern JavaScript (ES6+)</h1>
                <p>Become fluent in the modern syntax and features that make JavaScript a powerful and expressive language.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Courses</h2>
                <div className="resource-item">
                    <h3>ES6 Features Guide (GitHub)</h3>
                    <p>A comprehensive overview of all major ES6 features with clear code examples, perfect for a quick reference.</p>
                    <a href="https://github.com/lukehoban/es6features" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Guide</a>
                </div>
                <div className="resource-item">
                    <h3>ES6 JavaScript: The Complete Developer's Guide (Udemy)</h3>
                    <p>A highly-rated paid course that provides a deep dive into every modern JavaScript feature with practical examples.</p>
                    <a href="https://www.udemy.com/course/ecmascript-6-development/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase8Resources;
