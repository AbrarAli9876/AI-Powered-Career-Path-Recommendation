// src/pages/skills/SQLPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Indexing & Query Performance Optimization</h1>
                <p>Learn to write high-performing queries, a critical skill for roles that deal with large-scale data.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Videos</h2>
                 <div className="resource-item">
                    <h3>How to Read a SQL EXPLAIN Plan (Leigh Halliday)</h3>
                    <p>A practical YouTube guide to interpreting query plans, the essential tool for diagnosing slow queries.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hAuyNf0Uk-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>How Do Database Indexes Work? (PlanetScale)</h3>
                    <p>An excellent beginner-friendly explanation of what indexes are and why they are crucial for performance.</p>
                    <a href="https://planetscale.com/blog/how-do-database-indexes-work" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase9Resources;
