// src/pages/skills/SQLPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Setup and Basic Querying</h1>
                <p>Establish a professional-grade development environment and master the foundational SELECT statement.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Courses & Interactive Tutorials</h2>
                <div className="resource-item">
                    <h3>SQL for Beginners Full Course (freeCodeCamp)</h3>
                    <p>A full 4-hour course covering database basics, installation of PostgreSQL, and core query commands like SELECT, WHERE, and ORDER BY.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HXV3zeQKqGY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>SQLBolt</h3>
                    <p>A series of interactive lessons and exercises that let you learn and practice SQL right in your browser. Excellent for hands-on practice.</p>
                    <a href="https://sqlbolt.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on SQLBolt</a>
                </div>
                 <div className="resource-item">
                    <h3>Chinook Sample Database</h3>
                    <p>The sample database used throughout this roadmap. Download the script here to set up your local practice environment.</p>
                    <a href="https://github.com/lerocha/chinook-database" target="_blank" rel="noopener noreferrer" className="resource-link">Get from GitHub</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase2Resources;

