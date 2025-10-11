// src/pages/UIDesignerPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Design Foundations</h1>
                <p>Build a solid theoretical foundation in UI/UX, Design Thinking, User-Centered Design, and Mobile-First Principles.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses & Books</h2>
                <div className="resource-item">
                    <h3>Google UX Design Professional Certificate (Coursera)</h3>
                    <p>The first course, "Foundations of User Experience (UX) Design," is an excellent and comprehensive starting point for all these topics.</p>
                    <a href="https://www.coursera.org/professional-certificates/google-ux-design" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                <div className="resource-item">
                    <h3>"The Design of Everyday Things" by Don Norman</h3>
                    <p>A foundational text on user-centered design and usability that is considered essential reading for any designer.</p>
                </div>
            </div>
             <div className="resource-section">
                <h2>Articles</h2>
                <div className="resource-item">
                    <h3>Interaction Design Foundation (IDF) Literature</h3>
                    <p>A collection of high-quality, free articles covering core concepts like Design Thinking, User-Centered Design, and Mobile-First principles.</p>
                    <a href="https://www.interaction-design.org/literature" target="_blank" rel="noopener noreferrer" className="resource-link">Explore IDF</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase1Resources;
