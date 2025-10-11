// src/pages/UIDesignerPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Visual UI Design</h1>
                <p>Develop your aesthetic eye and learn the fundamental building blocks of visual communication: typography, color theory, and layout.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tools & Inspiration</h2>
                <div className="resource-item">
                    <h3>Coolors.co - Color Palette Generator</h3>
                    <p>A powerful and popular tool for generating, exploring, and saving beautiful color palettes for your designs.</p>
                    <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer" className="resource-link">Generate Palettes</a>
                </div>
                <div className="resource-item">
                    <h3>Google Fonts</h3>
                    <p>A vast library of free-to-use, high-quality fonts that you can use in your projects to create a clear typographic hierarchy.</p>
                    <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Fonts</a>
                </div>
                <div className="resource-item">
                    <h3>Typography in Mobile Design (The Futur)</h3>
                    <p>A video from a leading design channel that explains the principles of creating a clear visual hierarchy with typography, a critical skill for UI designers.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S20-v_35d7U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase4Resources;

