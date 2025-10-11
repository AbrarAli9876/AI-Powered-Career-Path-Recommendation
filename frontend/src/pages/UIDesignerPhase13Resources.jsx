// src/pages/UIDesignerPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Crafting Your Portfolio Projects</h1>
                <p>Translate your learned skills into compelling case studies that showcase your value to potential employers.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-seaction">
                <h2>Inspiration & Examples</h2>
                <div className="resource-item">
                    <h3>Bestfolios</h3>
                    <p>A curated gallery of the best design portfolios from students and professionals at top companies. An excellent source of inspiration for your own portfolio.</p>
                    <a href="https://www.bestfolios.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Get Inspired</a>
                </div>
                <div className="resource-item">
                    <h3>How to build a killer UX portfolio (Mizko)</h3>
                    <p>A video from a popular design channel that provides detailed, actionable advice on how to structure your case studies and create a standout portfolio.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CiH254I_o5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>UX Collective - Case Studies</h3>
                    <p>Search for "UX case study" on UX Collective's Medium publication to find hundreds of real-world examples from other designers, detailing their process from start to finish.</p>
                    <a href="https://uxdesign.cc/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Case Studies</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase13Resources;

