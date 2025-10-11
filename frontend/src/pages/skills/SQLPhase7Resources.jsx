// src/pages/skills/SQLPhase7Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 7: Advanced SQL Functions</h1>
                <p>Learn powerful functions for data manipulation, conditional logic, and complex analysis.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Functions</h2>
                <div className="resource-item">
                    <h3>Visualizing SQL window functions (Oracle Developers)</h3>
                    <p>An excellent visual model for understanding how window functions and partitions work, applicable to any SQL dialect.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4V4pQ7V2M2A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>SQL CASE Statement (DataCamp)</h3>
                    <p>A tutorial with clear use-case examples for adding conditional if/then/else logic directly into your queries.</p>
                    <a href="https://www.datacamp.com/tutorial/sql-case" target="_blank" rel="noopener noreferrer" className="resource-link">Read on DataCamp</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase7Resources;
