import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 7: Multiplayer and Networking</h1><p>Understand the principles of network programming and implement basic multiplayer functionality.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Tutorials & Articles</h2>
                <div className="resource-item"><h3>Code Monkey - Simple Multiplayer Game in Unity</h3><p>A comprehensive free course on YouTube for making a multiplayer game from scratch with Netcode for GameObjects.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/7W1tGf_vJ4o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>Gaffer on Games - Game Networking</h3><p>A series of classic, in-depth articles on the theory of game networking, essential reading for a deep understanding.</p><a href="https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Articles</a></div>
            </div>
        </div>
    </>
);
export default GamePhase7Resources;