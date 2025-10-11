// src/pages/skills/SQLPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Views, Stored Procedures & Triggers</h1>
                <p>Learn to use advanced database objects to encapsulate logic, improve security, and automate tasks.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Documentation</h2>
                <div className="resource-item">
                    <h3>PostgreSQL Views (PostgreSQL Tutorial)</h3>
                    <p>A beginner-friendly guide to creating and managing views, which act as virtual tables based on SELECT queries.</p>
                    <a href="https://www.postgresqltutorial.com/postgresql-views/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>PostgreSQL Triggers (PostgreSQL Tutorial)</h3>
                    <p>A comprehensive guide to different trigger types, which automatically execute in response to DML events.</p>
                    <a href="https://www.postgresqltutorial.com/postgresql-triggers/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase10Resources;
