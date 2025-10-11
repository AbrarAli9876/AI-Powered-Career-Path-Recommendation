// src/pages/skills/SQLPhase11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 11: Transactions & Concurrency</h1>
                <p>Understand how transactions and the ACID properties are essential for maintaining data integrity in applications.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Articles</h2>
                <div className="resource-item">
                    <h3>Transactions and Concurrency Control (Neso Academy)</h3>
                    <p>A clear video lecture explaining the concepts of database transactions and why they are important for reliability.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3W2kY8tB_aU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>ACID Properties in DBMS (GeeksForGeeks)</h3>
                    <p>A simple and clear text-based breakdown of Atomicity, Consistency, Isolation, and Durability.</p>
                    <a href="https://www.geeksforgeeks.org/acid-properties-in-dbms/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase11Resources;
