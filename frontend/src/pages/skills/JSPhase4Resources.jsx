// src/pages/skills/JSPhase4Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Asynchronous JavaScript</h1>
                <p>Master callbacks, Promises, and async/await to handle tasks like fetching data without freezing the browser.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Videos & Guides</h2>
                <div className="resource-item">
                    <h3>What the heck is the event loop anyway? (JSConf)</h3>
                    <p>A famous and highly-regarded talk that provides a clear, visual explanation of how the JavaScript event loop works.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>javascript.info - Promises, async/await</h3>
                    <p>In-depth text-based tutorials with runnable code examples, known for their clarity and detail on modern asynchronous patterns.</p>
                    <a href="https://javascript.info/async" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase4Resources;
