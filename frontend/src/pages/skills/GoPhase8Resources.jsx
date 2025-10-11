// src/pages/skills/GoPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const GoPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Web Development with the Standard Library</h1>
                <p>Build web servers and REST APIs using Go's powerful and efficient built-in `net/http` package.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Let's Go! by Alex Edwards</h3>
                    <p>An excellent, in-depth book (with a free online version) that teaches professional web development in Go from first principles.</p>
                    <a href="https://lets-go.alexedwards.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Book</a>
                </div>
            </div>
        </div>
    </>
);
export default GoPhase8Resources;
