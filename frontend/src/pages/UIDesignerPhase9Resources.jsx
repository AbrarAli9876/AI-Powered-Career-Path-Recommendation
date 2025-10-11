// src/pages/UIDesignerPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Accessibility (A11y)</h1>
                <p>Learn to create products that are usable by everyone, regardless of their abilities, following WCAG standards.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Guides</h2>
                <div className="resource-item">
                    <h3>WebAIM - Contrast Checker</h3>
                    <p>An essential tool for checking that your color combinations meet the minimum contrast ratios required by accessibility guidelines (WCAG). This is a non-negotiable step in professional UI design.</p>
                    <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="resource-link">Use the Tool</a>
                </div>
                <div className="resource-item">
                    <h3>A11ycasts with Rob Dodson (Google Chrome Developers)</h3>
                    <p>A fantastic YouTube series that parovides practical, bite-sized lessons on various web and mobile accessibility topics, such as how screen readers work.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5hNS_gI7-OQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Apple's Accessibility Guidelines</h3>
                    <p>The official documentation from Apple on how to design inclusive apps for iOS, covering topics like Dynamic Type, VoiceOver support, and designing for different motor abilities.</p>
                    <a href="https://developer.apple.com/design/human-interface-guidelines/accessibility" target="_blank" rel="noopener noreferrer" className="resource-link">Read the HIG</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase9Resources;

