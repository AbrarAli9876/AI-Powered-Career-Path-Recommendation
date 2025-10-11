// src/pages/skills/SQLPhase17Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase17Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 17: Interview Preparation</h1>
                <p>Prepare faor the technical interview process by practicing definitional, practical, and optimization questions.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Practice Platforms</h2>
                <div className="resource-item">
                    <h3>LeetCode - SQL 50 Study Plan</h3>
                    <p>A curated list of 50 essential SQL problems on LeetCode, perfect for preparing for technical interviews.</p>
                    <a href="https://leetcode.com/studyplan/top-sql-50/" target="_blank" rel="noopener noreferrer" className="resource-link">Start the Study Plan</a>
                </div>
                <div className="resource-item">
                    <h3>StrataScratch</h3>
                    <p>Features real SQL interview questions from top tech companies, categorized by company and difficulty.</p>
                    <a href="https://www.stratascratch.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on StrataScratch</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase17Resources;
