import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 2: Programming and Math Foundations</h1><p>Build engine-agnostic skills in C# programming and essential game mathematics.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Resources</h2>
                <div className="resource-item"><h3>freeCodeCamp - C# Tutorial for Beginners</h3><p>A comprehensive, full-length course on YouTube that covers all the fundamental concepts of C# programming.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/gQojMIhELvM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>3Blue1Brown - Essence of Linear Algebra</h3><p>The definitive visual series for building a deep, intuitive understanding of vector and matrix math.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default GamePhase2Resources;