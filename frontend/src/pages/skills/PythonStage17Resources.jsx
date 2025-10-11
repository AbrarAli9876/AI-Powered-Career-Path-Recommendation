// src/pages/skills/PythonStage17Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage17Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17: Portfolio & Resume Strategy</h1>
                <p>Learn to market your skills effectively by creating a compelling portfolio, resume, and professional online presence.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>How to Build a Great GitHub Profile (freeCodeCamp)</h3>
                    <p>A video guide with tips on how to structure your GitHub profile to impress recruiters.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kVE_vhy_g48" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage17Resources;
