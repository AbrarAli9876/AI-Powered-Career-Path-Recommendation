// src/pages/skills/SQLPhase15Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 15: Real-World Projects & Practice</h1>
                <p>Solidify your skills by building tangible portfolio projects that solve real-world problems.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Datasets & Practice</h2>
                <div className="resource-item">
                    <h3>Kaggle Datasets</h3>
                    <p>A great source for a wide variety of real-world datasets for your portfolio projects, covering e-commerce, sales, movies, and more.</p>
                    <a href="https://www.kaggle.com/datasets" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Datasets</a>
                </div>
                 <div className="resource-item">
                    <h3>Awesome Public Datasets (GitHub)</h3>
                    <p>A curated list of high-quality datasets across many domains, perfect for finding a unique project topic.</p>
                    <a href="https://github.com/awesomedata/awesome-public-datasets" target="_blank" rel="noopener noreferrer" className="resource-link">Browse on GitHub</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase15Resources;
