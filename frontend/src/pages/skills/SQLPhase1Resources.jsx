// src/pages/skills/SQLPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Database Fundamentals</h1>
                <p>Build a solid mental model of how relational databases function, focusing on core concepts like tables, keys, and relationships.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Courses</h2>
                <div className="resource-item">
                    <h3>Database Design Course (freeCodeCamp)</h3>
                    <p>A comprehensive video covering normalization, Entity Relationship diagrams, and fundamental design principles from the ground up.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sIi7IfiTIsA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Database Concepts for Beginners (LearnSmart Coding)</h3>
                    <p>A great visual walkthrough of tables, keys, and constraints with a real-world schema example.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5ZXtGy5PRTQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase1Resources;

