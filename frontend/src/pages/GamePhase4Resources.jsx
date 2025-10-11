import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 4: Gameplay Systems and Mechanics</h1><p>Design and implement core interactive systems like player controls, combat, and inventory.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Books & Tutorials</h2>
                <div className="resource-item"><h3>"Game Programming Patterns" by Robert Nystrom</h3><p>An essential read for learning how to structure game code in a clean, efficient, and scalable way. Available free online.</p><a href="https://gameprogrammingpatterns.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read for Free</a></div>
                <div className="resource-item"><h3>Code Monkey - Unity Tutorials</h3><p>This YouTube channel focuses on creating complete game systems from scratch with a strong emphasis on clean, professional code.</p><a href="https://www.youtube.com/c/CodeMonkeyUnity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a></div>
            </div>
        </div>
    </>
);
export default GamePhase4Resources;