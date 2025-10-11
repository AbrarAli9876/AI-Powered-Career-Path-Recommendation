import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 12: Real-World Projects</h1><p>Transition from small exercises to building complete, polished games for your portfolio.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Game Jam Platforms</h2>
                <div className="resource-item"><h3>itch.io - Game Jams</h3><p>The largest host of game jams. A great place to find events, practice rapid prototyping, and build portfolio pieces.</p><a href="https://itch.io/jams" target="_blank" rel="noopener noreferrer" className="resource-link">Find a Jam</a></div>
                <div className="resource-item"><h3>Ludum Dare</h3><p>One of the most well-known and longest-running game jam events in the world.</p><a href="https://ldjam.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Ludum Dare</a></div>
            </div>
        </div>
    </>
);
export default GamePhase12Resources;