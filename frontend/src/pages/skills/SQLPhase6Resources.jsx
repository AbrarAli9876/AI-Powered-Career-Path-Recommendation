// src/pages/skills/SQLPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Subqueries & Derived Tables</h1>
                <p>Learn to use multi-step logic within a single statement by nesting queries inside each other.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Guides</h2>
                <div className="resource-item">
                    <h3>Advanced SQL Tutorial | CTEs and Subqueries (Alex The Analyst)</h3>
                    <p>A clear video tutorial from a trusted source that explains and compares subqueries and Common Table Expressions (CTEs).</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/43h_82v5kfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>SQL Subqueries (Mode Analytics)</h3>
                    <p>A text-based tutorial with practical examples and clear explanations of different subquery types, including derived tables.</p>
                    <a href="https://mode.com/sql-tutorial/sql-subqueries/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
            </div>
            <div className="resource-section">
                <h2>Interactive Practice</h2>
                <div className="resource-item">
                    <h3>SQLZoo - SELECT within SELECT</h3>
                    <p>A set of interactive exercises focused specifically on practicing subqueries to solidify your understanding of nested logic.</p>
                    <a href="https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on SQLZoo</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase6Resources;

