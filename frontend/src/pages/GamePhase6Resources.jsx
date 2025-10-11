import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 6: Game AI and NPC Behavior</h1><p>Implement artificial intelligence for NPC decision-making and navigation using FSMs and Pathfinding.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Tutorials & Books</h2>
                <div className="resource-item"><h3>Unity Learn - AI for Beginners by Dr. Penny de Byl</h3><p>An excellent, comprehensive course covering many fundamental game AI patterns.</p><a href="https://learn.unity.com/course/ai-for-beginners" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Unity Learn</a></div>
                <div className="resource-item"><h3>"Artificial Intelligence for Games" by Ian Millington</h3><p>The definitive textbook on game AI techniques, covering everything from pathfinding to behavior trees.</p></div>
            </div>
        </div>
    </>
);
export default GamePhase6Resources;