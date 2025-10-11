// src/pages/skills/GoPhase6Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: The Power of Concurrency</h1>
                <p>Dive into Go's most famous feature: lightweight concurrency with goroutines and channels.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
             <div className="resource-section">
                <h2>Videos & Talks</h2>
                <div className="resource-item">
                    <h3>Go Concurrency Patterns (Google I/O)</h3>
                    <p>A classic and essential talk from Rob Pike, one of the creators of Go, explaining the philosophy and patterns behind Go's approach to concurrency.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/f6kdp27TYZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase6Resources;
