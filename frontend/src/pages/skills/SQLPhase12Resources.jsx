// src/pages/skills/SQLPhase12Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const SQLPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 12: Data Warehousing Concepts</h1>
                <p>Learn specialized techniques for efficiently managing and analyzing massive datasets for business intelligence.</p>
                <Link to="/skills/sql" className="back-link">← Back to SQL Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Data Lake vs. Data Warehouse (AWS)</h3>
                    <p>A clear comparison of the two major data storage architectures from Amazon Web Services.</p>
                    <a href="https://aws.amazon.com/compare/the-difference-between-a-data-lake-and-a-data-warehouse/" target="_blank" rel="noopener noreferrer" className="resource-link">Read on AWS</a>
                </div>
                <div className="resource-item">
                    <h3>Star Schema vs. Snowflake Schema (DataCamp)</h3>
                    <p>An article explaining the differences between the two primary data modeling schemas used in data warehouses, complete with diagrams.</p>
                    <a href="https://www.datacamp.com/tutorial/star-schema-vs-snowflake-schema" target="_blank" rel="noopener noreferrer" className="resource-link">Read on DataCamp</a>
                </div>
            </div>
        </div>
    </>
);
export default SQLPhase12Resources;
