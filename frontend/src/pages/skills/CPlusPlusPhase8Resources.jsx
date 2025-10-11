// src/pages/skills/CPlusPlusPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const CPlusPlusPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Object-Oriented Programming (OOP)</h1>
                <p>Learn the fundamentals of OOP by defining classes with constructors, destructors, and member functions.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>C++ OOP Concepts (GeeksforGeeks)</h3>
                    <p>A comprehensive set of articles covering all the basics of object-oriented programming in C++.</p>
                    <a href="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>Classes vs Structs in C++ (The Cherno)</h3>
                    <p>A video explaining the subtle but important differences between classes and structs in C++.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2_c-A3ytOfY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default CPlusPlusPhase8Resources;
