// src/pages/skills/JSPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: JavaScript Basics & Programming Foundations</h1>
                <p>Master the fundamental syntax, data types, and the environment where JavaScript runs.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Core Learning Resources</h2>
                <div className="resource-item">
                    <h3>JavaScript Algorithms and Data Structures (freeCodeCamp)</h3>
                    <p>The best free, interactive platform for hands-on learning with an in-browser editor and immediate feedback on challenges.</p>
                    <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noopener noreferrer" className="resource-link">Start on freeCodeCamp</a>
                </div>
                <div className="resource-item">
                    <h3>MDN Web Docs - JavaScript First Steps</h3>
                    <p>The ultimate reference and structured guide from Mozilla. Considered the gold standard for web documentation.</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>"Eloquent JavaScript" by Marijn Haverbeke</h3>
                    <p>A deeper, more conceptual introduction to programming principles using JavaScript, available to read for free online.</p>
                    <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read for Free</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase1Resources;

