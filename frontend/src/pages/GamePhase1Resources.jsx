import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 1: Foundations & Orientation</h1><p>Understand the landscape of the game development industry, including key roles, the development lifecycle, and studio structures.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Videos & Books</h2>
                <div className="resource-item"><h3>Game Maker's Toolkit - What is Game Design?</h3><p>An excellent high-level analysis of game design principles and industry trends.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/21-z9I1I_w4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>"Blood, Sweat, and Pixels" by Jason Schreier</h3><p>A journalistic look inside the development of several major games, revealing the realities of the process.</p></div>
            </div>
        </div>
    </>
);
export default GamePhase1Resources;