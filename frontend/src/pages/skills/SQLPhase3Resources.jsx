// src/pages/skills/SQLPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Data Filtering & Manipulation</h1>
                <p>Move beyond simply retrieving data to modifying it and using more advanced filtering techniques.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>SQL Tutorial - IN, BETWEEN, LIKE Operators (Caleb Curry)</h3>
                    <p>A clear video explaining these essential filtering operators with practical examples.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e74rB-14-m8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>SQL INSERT, UPDATE, DELETE (W3Schools)</h3>
                    <p>Simple and effective tutorials for each of the core DML statements, with try-it-yourself examples.</p>
                    <a href="https://www.w3schools.com/sql/sql_insert.asp" target="_blank" rel="noopener noreferrer" className="resource-link">Read on W3Schools</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase3Resources;

