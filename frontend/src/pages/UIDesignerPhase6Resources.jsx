// src/pages/UIDesignerPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Mastering Your Tools (Figma)</h1>
                <p>Move from basic knowledge to confident, efficient execution in the industry-standard design tool, Figma.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses & Community</h2>
                <div className="resource-item">
                    <h3>Figma's Official YouTube Channel</h3>
                    <p>The best place to start, with countless tutorials on every feature, from the basics of the interface to advanced features like Auto Layout, Components, and Variants.</p>
                    <a href="https://www.youtube.com/c/Figma" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a>
                </div>
                 <div className="resource-item">
                    <h3>Figma Community</h3>
                    <p>An invaluable resource where you can find and duplicate files from other designers to deconstruct how professional designs are built. This is one of the best ways to learn.</p>
                    <a href="https://www.figma.com/community" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Community</a>
                </div>
                <div className="resource-item">
                    <h3>Complete Figma Megacourse (Udemy)</h3>
                    <p>A comprehensive paid course that takes you from beginner to expert in Figma, covering UI/UX design, prototyping, and building a full project.</p>
                     <a href="https://www.udemy.com/course/complete-figma-megacourse-uiux-design-beginner-to-expert/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase6Resources;

