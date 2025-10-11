// src/pages/skills/SQLPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: SQL in Real-World Scenarios</h1>
                <p>Apply your SQL skills to specific career paths, tailoring your knowledge to the job family you are targeting.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>Connecting Power BI to PostgreSQL (Hevo Data)</h3>
                    <p>A practical, step-by-step guide on how to connect your PostgreSQL database to Power BI for reporting.</p>
                    <a href="https://hevodata.com/learn/power-bi-postgresql-integration/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Connecting Tableau to PostgreSQL (Tableau Docs)</h3>
                    <p>The official guide from Tableau for connecting to and visualizing data from a PostgreSQL database.</p>
                     <a href="https://help.tableau.com/current/pro/desktop/en-us/examples_postgresql.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase13Resources;
