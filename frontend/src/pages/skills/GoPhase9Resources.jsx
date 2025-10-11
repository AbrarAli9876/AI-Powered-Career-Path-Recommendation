// src/pages/skills/GoPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Working with Databases</h1>
                <p>Understand how to connect your Go applications to SQL databases to persist and retrieve data.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                 <div className="resource-item">
                    <h3>Accessing a relational database (Official Go Docs)</h3>
                    <p>The official tutorial for using the standard library's `database/sql` package to connect to and query a SQL database.</p>
                    <a href="https://go.dev/doc/tutorial/database-access" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase9Resources;
