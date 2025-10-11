import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 10: Game Design and UX Principles</h1><p>Develop a foundational understanding of game design theory, level design, and User Experience (UX).</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Books & Videos</h2>
                <div className="resource-item"><h3>Game Maker's Toolkit - YouTube Channel</h3><p>Provides excellent video essays that deconstruct the design of popular games to understand why they are effective.</p><a href="https://www.youtube.com/c/MarkBrownGMT" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a></div>
                <div className="resource-item"><h3>"The Art of Game Design: A Book of Lenses" by Jesse Schell</h3><p>A comprehensive and highly accessible introduction to the theory and practice of game design.</p></div>
            </div>
        </div>
    </>
);
export default GamePhase10Resources;