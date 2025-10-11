// src/pages/skills/GoPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Pointers & Interfaces</h1>
                <p>Grasp Go's approach to memory management with pointers and its powerful system for abstraction with interfaces.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials & Videos</h2>
                 <div className="resource-item">
                    <h3>Interfaces in Go (Go by Example)</h3>
                    <p>A clear tutorial with code examples explaining how Go's implicit interfaces work for creating polymorphic behavior.</p>
                    <a href="https://gobyexample.com/interfaces" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Example</a>
                </div>
                <div className="resource-item">
                    <h3>Understanding Pointers in Go (YouTube - Nic Jackson)</h3>
                    <p>A video from a well-known Go educator that provides a clear, practical explanation of how and why to use pointers in Go.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sFp_b3vcF5g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase5Resources;
