// src/pages/UIDesignerPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Wireframing & Prototyping</h1>
                <p>Learn to translate abstract concepts into tangible screen layouts and create interactive simulations of your app.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Figma Prototyping Tutorial for Beginners (Figma)</h3>
                    <p>The official video tutorial from Figma that teaches you how to link screens together to create simple, clickable prototypes, bringing your static designs to life.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4__s-T4JblA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Learn Figma - UI/UX Design Essential Training (Udemy)</h3>
                    <p>A comprehensive paid course by Caleb Kingston that covers wireframing and prototyping in a hands-on, project-based way.</p>
                    <a href="https://www.udemy.com/course/learn-figma/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase5Resources;

