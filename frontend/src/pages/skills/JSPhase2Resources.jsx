// src/pages/skills/JSPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Core JavaScript Concepts</h1>
                <p>Understand functions, scope, closures, and how to structure data with arrays and objects.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Essential Reading</h2>
                <div className="resource-item">
                    <h3>"You Don't Know JS: Scope & Closures" by Kyle Simpson</h3>
                    <p>The gold standard for a deep, accurate understanding of scope, hoisting, and closures. The first edition is available for free on GitHub.</p>
                    <a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/README.md" target="_blank" rel="noopener noreferrer" className="resource-link">Read on GitHub</a>
                </div>
                <div className="resource-item">
                    <h3>MDN Web Docs - JavaScript Guide</h3>
                    <p>The definitive text on core structures like Functions, Objects, and Arrays from Mozilla.</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase2Resources;
