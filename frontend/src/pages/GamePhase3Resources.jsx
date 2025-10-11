import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 3: Game Engine Mastery</h1><p>Choose a primary game engine (Unity recommended for beginners) and master its core functionality.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Resources (Unity)</h2>
                <div className="resource-item"><h3>Unity Learn - Unity Essentials Pathway</h3><p>The official starting point from Unity, covering all the foundational concepts of the editor and workflow.</p><a href="https://learn.unity.com/pathway/unity-essentials" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Unity Learn</a></div>
                <div className="resource-item"><h3>Brackeys - How to make a Video Game in Unity</h3><p>A legendary, beginner-friendly tutorial series on YouTube that guides you through creating your first complete game.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLPV2KyIb3jR53Jce9hP7G5xC4O9AgnOuL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default GamePhase3Resources;