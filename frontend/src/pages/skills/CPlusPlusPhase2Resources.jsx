// src/pages/skills/CPlusPlusPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Basics & Core Syntax</h1>
                <p>Learn the fundamental building blocks of C++, including variables, data types, operators, and basic I/O.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Practice</h2>
                <div className="resource-item">
                    <h3>C++ Basic Input/Output (cplusplus.com)</h3>
                    <p>A classic and straightforward tutorial explaining how to use `std::cin` and `std::cout` for console interaction.</p>
                    <a href="https://cplusplus.com/doc/tutorial/basic_io/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>HackerRank - C++ Basic Data Types</h3>
                    <p>A hands-on coding challenge to practice declaring and using the fundamental data types in C++.</p>
                    <a href="https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Challenge</a>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase2Resources;
