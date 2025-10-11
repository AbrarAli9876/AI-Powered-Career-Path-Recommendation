// src/pages/skills/JSPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: DOM Manipulation & Browser APIs</h1>
                <p>Learn to make web pages interactive by manipulating the Document Object Model and responding to user events.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Project-Based Learning</h2>
                <div className="resource-item">
                    <h3>JavaScript30 by Wes Bos</h3>
                    <p>A free video course with 30 fun, vanilla JS mini-projects heavily focused on DOM manipulation and browser APIs.</p>
                    <a href="https://javascript30.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Course</a>
                </div>
                <div className="resource-item">
                    <h3>The Odin Project - DOM Manipulation</h3>
                    <p>An excellent, project-focused curriculum that forces you to build things to learn, providing a practical understanding of the DOM.</p>
                    <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#dom-manipulation-and-events" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Odin Project</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase3Resources;
