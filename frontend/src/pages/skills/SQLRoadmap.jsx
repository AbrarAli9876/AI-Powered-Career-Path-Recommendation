// src/pages/skills/SQLRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const sqlStages = [
    { id: 1, title: 'Stage 1: The Foundation – Database Fundamentals', objective: 'Build a solid mental model of how relational databases function, focusing on core concepts like tables, keys, and relationships.' },
    { id: 2, title: 'Stage 2: Getting Hands-On – Setup and Basic Querying', objective: 'Establish a professional-grade development environment and master the foundational SELECT statement for data retrieval.' },
    { id: 3, title: 'Stage 3: Intermediate SQL — Data Filtering & Manipulation', objective: 'Move beyond simply retrieving data to modifying it and using more advanced filtering techniques.' },
    { id: 4, title: 'Stage 4: Joins & Relationships', objective: 'Unlock the true power of relational databases by combining data from multiple tables to answer complex questions.' },
    { id: 5, title: 'Stage 5: Aggregations & Grouping', objective: 'Master the engine of data analysis, focusing on summarizing large datasets into meaningful insights.' },
    { id: 6, title: 'Stage 6: Subqueries & Derived Tables', objective: 'Learn to use multi-step logic within a single statement, enabling you to answer more complex questions by nesting queries.' },
    { id: 7, title: 'Stage 7: Advanced SQL Functions', objective: 'Introduce powerful functions for data manipulation, conditional logic, and complex analysis, essential for data analyst and BI roles.' },
    { id: 8, title: 'Stage 8: Database Design & Normalization', objective: 'Understand how to design a robust and efficient database schema, a crucial skill for any database professional.' },
    { id: 9, title: 'Stage 9: Indexing & Query Performance Optimization', objective: 'Learn to write high-performing queries, a critical skill for roles that deal with large-scale data.' },
    { id: 10, title: 'Stage 10: Views, Stored Procedures & Triggers', objective: 'Learn to use advanced database objects to encapsulate logic, improve security, and automate tasks.' },
    { id: 11, title: 'Stage 11: Transactions & Concurrency', objective: 'Understand how transactions are essential for maintaining data integrity in applications.' },
    { id: 12, title: 'Stage 12: Working with Large Datasets & Data Warehousing Concepts', objective: 'Learn specialized techniques for efficiently managing and analyzing massive datasets.' },
    { id: 13, title: 'Stage 13: SQL in Real-World Scenarios', objective: 'Apply your SQL skills to specific career paths, tailoring your knowledge to the job family you are targeting.' },
    { id: 14, title: 'Stage 14: Specialized SQL Variants (Optional Deep Dive)', objective: 'Explore powerful extensions in different database systems to gain a competitive edge.' },
    { id: 15, title: 'Stage 15: Real-World Projects & Practice Datasets', objective: 'Solidify your skills by building tangible portfolio projects that solve real-world problems.' },
    { id: 16, title: 'Stage 16: Portfolio & Resume Strategy for SQL Roles', objective: 'Learn to professionally document and present your projects to demonstrate your skills to employers.' },
    { id: 17, title: 'Stage 17: Interview Preparation', objective: 'Prepare for the technical interview process by practicing definitional, practical, and optimization questions.' },
];

const SQLRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete SQL Roadmap</h1>
                <p>From beginner to professional, this roadmap provides a structured path to mastering the universal language of data.</p>
            </header>
            <div className="skill-page-stages">
                {sqlStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/sql/stage-${stage.id}`} className="stage-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SQLRoadmap;
