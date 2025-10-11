// src/pages/UIDesignerPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Platform Guidelines (iOS vs. Android)</h1>
                <p>Become fluent in the visual languages of Apple's Human Interface Guidelines and Google's Material Design.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Official Documentation (Essential Reading)</h2>
                <div className="resource-item">
                    <h3>Apple Human Interface Guidelines (HIG)</h3>
                    <p>Apple's official guidelines on everything from layout and color to standard UI components like tab bars and navigation bars.</p>
                    <a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the HIG</a>
                </div>
                <div className="resource-item">
                    <h3>Google Material Design 3</h3>
                    <p>The latest evolution of Material Design, which emphasizes personalization through dynamic color, expressive motion, and adaptive layouts.</p>
                    <a href="https://m3.material.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Material 3</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase2Resources;

