// src/pages/skills/SQLPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Specialized SQL Variants</h1>
                <p>Explore powerful extensions in different database systems like PostgreSQL and MySQL to gain a competitive edge.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Advanced Features</h2>
                <div className="resource-item">
                    <h3>PostgreSQL JSONB Documentation</h3>
                    <p>The official guide to using JSON types in PostgreSQL, which allows you to combine the flexibility of NoSQL with the power of SQL.</p>
                    <a href="https://www.postgresql.org/docs/current/functions-json.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Docs</a>
                </div>
                 <div className="resource-item">
                    <h3>MySQL Performance Tuning Tips (Percona)</h3>
                    <p>A blog from a leading database company with key tips for optimizing MySQL queries and configurations.</p>
                     <a href="https://www.percona.com/blog/10-mysql-performance-tuning-tips/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tips</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase14Resources;
