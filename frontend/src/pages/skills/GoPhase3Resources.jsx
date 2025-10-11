// src/pages/skills/GoPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Aggregate Data Structures</h1>
                <p>Learn to work with Go's powerful built-in collections: arrays, slices, and maps.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>Go Slices: usage and internals (Go Blog)</h3>
                    <p>A fundamental article from the official Go blog that explains how slices work under the hood, a crucial concept for any Go developer.</p>
                    <a href="https://go.dev/blog/slices-usage" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
                <div className="resource-item">
                    <h3>Arrays, Slices and Maps in Go (YouTube - Alex Edwards)</h3>
                    <p>A clear video tutorial that walks through the syntax and usage of Go's primary collection types.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pM0-CM3gZ-I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase3Resources;
