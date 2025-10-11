// src/pages/skills/JSPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Advanced JavaScript Concepts</h1>
                <p>Dive deeper into the internal workings of JavaScript, including memory management, the event loop, and modules.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Deep Dive Resources</h2>
                 <div className="resource-item">
                    <h3>"You Don't Know JS: Async & Performance" by Kyle Simpson</h3>
                    <p>An excellent deep dive into asynchronous behavior, including the event loop, generators, and performance considerations.</p>
                    <a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/async%20%26%20performance" target="_blank" rel="noopener noreferrer" className="resource-link">Read on GitHub</a>
                </div>
                 <div className="resource-item">
                    <h3>RegexOne - Interactive Tutorial</h3>
                    <p>An interactive, step-by-step tutorial for learning the powerful but often complex syntax of regular expressions.</p>
                    <a href="https://regexone.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn RegEx</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase6Resources;
