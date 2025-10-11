import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 11: Monetization and Publishing</h1><p>Understand the business side of game development and the process of releasing a game on major platforms.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Documentation</h2>
                <div className="resource-item"><h3>Steamworks Documentation - Publishing on Steam</h3><p>The official, definitive guide from Valve on the entire process of releasing a game on Steam.</p><a href="https://partner.steamgames.com/doc/store/publishing" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Steamworks</a></div>
                <div className="resource-item"><h3>Apple Developer - App Store Distribution</h3><p>The official documentation from Apple detailing the requirements and steps for publishing an app on the App Store.</p><a href="https://developer.apple.com/app-store/submissions/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Apple Developer</a></div>
            </div>
        </div>
    </>
);
export default GamePhase11Resources;