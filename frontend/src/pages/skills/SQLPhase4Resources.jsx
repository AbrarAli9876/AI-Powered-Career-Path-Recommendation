// src/pages/skills/SQLPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Joins & Relationships</h1>
                <p>Combine data from multiple tables to answer complex questions using the various JOIN clauses.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>SQL Joins Tutorial for Beginners (Joey Blue)</h3>
                    <p>A popular and thorough YouTube video that provides clear explanations and visualizations of the different join types.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1GFSYkNxgtk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>A Comprehensive Guide to SQL Joins (Dataquest)</h3>
                    <p>A detailed text-based tutorial with practical examples for when you need a deeper dive into join logic.</p>
                    <a href="https://www.dataquest.io/blog/sql-joins-tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase4Resources;

