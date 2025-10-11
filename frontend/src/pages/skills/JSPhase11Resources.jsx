// src/pages/skills/JSPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Testing & Debugging</h1>
                <p>Learn to write automated tests to ensure code quality and master debugging techniques to find and fix errors efficiently.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Documentation</h2>
                <div className="resource-item">
                    <h3>Jest - Official Documentation</h3>
                    <p>The primary source for learning how to use the Jest testing framework for unit and integration testing.</p>
                    <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Jest</a>
                </div>
                 <div className="resource-item">
                    <h3>Cypress - Official Documentation</h3>
                    <p>Comprehensive documentation and tutorials for writing reliable end-to-end tests with Cypress.</p>
                    <a href="https://docs.cypress.io/guides/getting-started/installing-cypress" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Cypress</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase11Resources;
