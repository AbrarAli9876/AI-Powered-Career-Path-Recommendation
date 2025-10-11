// src/pages/skills/SQLPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Database Design & Normalization</h1>
                <p>Understand how to design a robust and efficient database schema to minimize redundancy and ensure data integrity.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Videos</h2>
                <div className="resource-item">
                    <h3>Database Normalization in 6 minutes (Decomplexify)</h3>
                    <p>A very concise and clear visual explanation of the first three normal forms (1NF, 2NF, 3NF).</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GFQaEYEc8_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                 <div className="resource-item">
                    <h3>Database Normalization Description (Microsoft)</h3>
                    <p>A classic, clear text-based explanation of the normal forms with a step-by-step example.</p>
                    <a href="https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" target="_blank" rel="noopener noreferrer" className="resource-link">Read on Microsoft Learn</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase8Resources;
