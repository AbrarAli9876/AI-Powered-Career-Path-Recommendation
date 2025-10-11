import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 14: Career Paths and Specializations</h1><p>Understand the different career trajectories and begin planning for a long-term specialization.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Resources</h2>
                <div className="resource-item"><h3>GDC Vault - Programming Track</h3><p>The GDC Vault is the best place to see what professionals at the cutting edge of specializations like Graphics, AI, and Physics are working on.</p><a href="https://gdcvault.com/browse/programming" target="_blank" rel="noopener noreferrer" className="resource-link">Explore GDC Vault</a></div>
            </div>
        </div>
    </>
);
export default GamePhase14Resources;