import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 13: Portfolio and Resume Strategy</h1><p>Effectively showcase your skills and projects to potential employers through a professional portfolio and resume.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Videos & Examples</h2>
                <div className="resource-item"><h3>GDC - Building Your Portfolio</h3><p>A GDC talk from an industry recruiter providing actionable advice on what makes a game developer portfolio stand out.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/5-iSTlA22-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>Game Dev Portfolio Examples on Behance</h3><p>A great place to find inspiration for the visual design and layout of your portfolio website.</p><a href="https://www.behance.net/search/projects/game-developer-portfolio" target="_blank" rel="noopener noreferrer" className="resource-link">See Examples</a></div>
            </div>
        </div>
    </>
);
export default GamePhase13Resources;