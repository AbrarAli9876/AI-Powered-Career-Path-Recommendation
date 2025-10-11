import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 5: Game Physics and Simulation</h1><p>Understand and utilize the game engine's built-in physics simulation for dynamic interactions.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Documentation & Tutorials</h2>
                <div className="resource-item"><h3>Unity Manual - Physics</h3><p>The official in-depth documentation explaining all physics components like Rigidbodies, Colliders, and Physics Materials.</p><a href="https://docs.unity3d.com/Manual/PhysicsSection.html" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Unity Docs</a></div>
                <div className="resource-item"><h3>Brackeys - Raycasting in Unity</h3><p>A clear and concise tutorial explaining one of the most versatile tools in game development: raycasting.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/THnivyG0Mvo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default GamePhase5Resources;