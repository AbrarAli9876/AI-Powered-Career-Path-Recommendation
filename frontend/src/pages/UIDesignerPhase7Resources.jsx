// src/pages/UIDesignerPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Interaction Design & Animation</h1>
                <p>Learn to design the "conversation" between the user and the product using animations and micro-interactions.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tools</h2>
                <div className="resource-item">
                    <h3>Microinteractions: The Secret of Great App Design (UX Collective)</h3>
                    <p>An article that clearly explains what micro-interactions are and why they are crucial for creating a delightful user experience by providing feedback and guidance.</p>
                    <a href="https://uxdesign.cc/micro-interactions-the-secret-of-great-app-design-e36214532c66" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                 <div className="resource-item">
                    <h3>ProtoPie School</h3>
                    <p>Free tutorials on how to use ProtoPie, an advanced prototyping tool for creating sophisticated, code-free interactions and animations that are difficult to express in Figma alone.</p>
                    <a href="https://www.protopie.io/school" target="_blank" rel="noopener noreferrer" className="resource-link">Learn ProtoPie</a>
                </div>
                <div className="resource-item">
                    <h3>UI Animation Principles (Figma)</h3>
                    <p>A video from Figma's official channel explaining the core principles of animation and how to apply them to create intuitive and engaging user interfaces.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p_66Kj_DIGs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase7Resources;

