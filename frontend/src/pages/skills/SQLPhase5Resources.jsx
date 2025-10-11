// src/pages/skills/SQLPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Aggregations & Grouping</h1>
                <p>Master the engine of data analysis, focusing on summarizing large datasets into meaningful insights.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>SQL Basics - Group By + Order By (Alex The Analyst)</h3>
                    <p>A practical, beginner-friendly video that clearly explains how to use GROUP BY and ORDER BY to create summary reports.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/48_2hKe2_gA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Difference Between WHERE and HAVING (DataCamp)</h3>
                    <p>A detailed tutorial clarifying this key concept, which is a common point of confusion for beginners and a frequent interview question.</p>
                    <a href="https://www.datacamp.com/tutorial/where-vs-having" target="_blank" rel="noopener noreferrer" className="resource-link">Read on DataCamp</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase5Resources;

