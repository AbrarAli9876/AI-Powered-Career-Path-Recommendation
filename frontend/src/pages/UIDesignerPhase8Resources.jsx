// src/pages/UIDesignerPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Responsive & Adaptive Design</h1>
                <p>Create flexible layouts that adapt gracefully to different screen sizes, orientations, and form factors like tablets and foldables.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Best Practices</h2>
                <div className="resource-item">
                    <h3>Material Design - Applying Layout</h3>
                    <p>The official guidelines from Google on how to create adaptive layouts that work across a range of screen sizes, from small phones to large tablets.</p>
                    <a href="https://m3.material.io/foundations/layout/applying-layout/overview" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Designing for Foldable Devices</h3>
                    <p>An article from Google that explores the unique design considerations and patterns for emerging foldable device form factors, focusing on designing for different device "postures."</p>
                    <a href="https://material.io/blog/designing-for-large-screens-and-foldables" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase8Resources;

