import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 8: Visuals and Technical Art</h1><p>Learn the artistic pipeline and technical skills for implementing shaders, lighting, and VFX.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Tutorials</h2>
                <div className="resource-item"><h3>Blender Guru - Blender Beginner Tutorial</h3><p>The legendary "Donut Tutorial" is the perfect starting point for learning 3D modeling in Blender.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjEaoINr3zgFX8flr93P4n4TMqPmhRYwQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>Gabriel Aguiar Prod. - Unity VFX Graph & Shader Graph</h3><p>An excellent YouTube channel with tutorials on creating stunning visual effects and custom shaders in Unity.</p><a href="https://www.youtube.com/c/GabrielAguiarProd" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a></div>
            </div>
        </div>
    </>
);
export default GamePhase8Resources;