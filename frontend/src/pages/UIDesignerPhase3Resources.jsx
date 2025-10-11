// src/pages/UIDesignerPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Core UX Principles</h1>
                <p>Acquire essential UX methodologies like creating user personas, journey mapping, and understanding information architecture.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Heuristics</h2>
                <div className="resource-item">
                    <h3>Nielsen Norman Group - 10 Usability Heuristics</h3>
                    <p>Memorize and learn to apply Jakob Nielsen's 10 Usability Heuristics as a powerful framework for evaluating the usability of your designs.</p>
                    <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn the Heuristics</a>
                </div>
                <div className="resource-item">
                    <h3>Milanote - Free Templates & Guides</h3>
                    <p>Offers excellent free templates and guides for creating user personas and customer journey maps to build empathy for your users.</p>
                    <a href="https://milanote.com/templates/ux-design" target="_blank" rel="noopener noreferrer" className="resource-link">Get Templates</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase3Resources;

