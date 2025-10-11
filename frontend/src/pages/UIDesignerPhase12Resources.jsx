// src/pages/UIDesignerPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: The Developer Handoff</h1>
                <p>Master the critical process of translating your designs into a format that engineers can understand and build accurately.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tools</h2>
                <div className="resource-item">
                    <h3>Figma for Developers (Official Tutorial)</h3>
                    <p>A video from Figma explaining how developers use the "Inspect" panel to get measurements, styles, and code snippets from a design file. Understanding this perspective is key to a smooth handoff.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nyl-Vp_s9pI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Zeplin</h3>
                    <p>Explore a popular, specialized handoff tool that creates a dedicated, organized space for developer-facing designs, assets, and documentation, streamlining collaboration.</p>
                    <a href="https://zeplin.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Zeplin</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase12Resources;

