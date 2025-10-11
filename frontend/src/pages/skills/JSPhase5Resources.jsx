// src/pages/skills/JSPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Object-Oriented & Functional Programming</h1>
                <p>Understand the two major programming paradigms in JavaScript to write more organized and efficient code.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Learning Resources</h2>
                <div className="resource-item">
                    <h3>MDN - Object-oriented JavaScript for beginners</h3>
                    <p>A structured tutorial series on OOP concepts in JavaScript, from prototypes to the modern class syntax.</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS" target="_blank" rel="noopener noreferrer" className="resource-link">Read on MDN</a>
                </div>
                <div className="resource-item">
                    <h3>Fun Fun Function - Functional Programming in JavaScript</h3>
                    <p>A classic YouTube series that explains core functional programming concepts like map, filter, and reduce in an engaging way.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BMUiFMZr7vk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase5Resources;
