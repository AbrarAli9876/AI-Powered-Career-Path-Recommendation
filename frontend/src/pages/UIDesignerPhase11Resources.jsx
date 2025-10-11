// src/pages/UIDesignerPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Understanding Design Systems</h1>
                <p>Learn how professional teams build scalable, efficient, and consistent products using design systems as a single source of truth.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Examples & Inspiration</h2>
                <div className="resource-item">
                    <h3>Shopify Polaris</h3>
                    <p>Explore a world-class, publicly available design system to understand its core components, guidelines, and structure. It's a great example of a mature system.</p>
                    <a href="https://polaris.shopify.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Polaris</a>
                </div>
                 <div className="resource-item">
                    <h3>Figma's Design Systems Channel</h3>
                    <p>A YouTube playlist from Figma with talks and tutorials on the theory and practice of building and maintaining design systems, featuring experts from the industry.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLXDU_eVOJTx7QHLShQfIXSlk4a_iIky4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="resource-section">
                <h2>Books</h2>
                 <div className="resource-item">
                    <h3>"Laying the Foundations" by Andrew Couldwell</h3>
                    <p>A comprehensive book on the process of creating, documenting, and maintaining a design system from scratch.</p>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase11Resources;

