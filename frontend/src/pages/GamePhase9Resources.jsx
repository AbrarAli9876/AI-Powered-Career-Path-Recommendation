import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 9: Performance Optimization</h1><p>Learn to use profiling tools to identify, analyze, and fix performance bottlenecks.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Documentation & Tutorials</h2>
                <div className="resource-item"><h3>Unity Learn - Introduction to Profiling</h3><p>The official course from Unity on how to use the Profiler to diagnose performance issues.</p><a href="https://learn.unity.com/tutorial/introduction-to-profiling-in-unity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Unity Learn</a></div>
                <div className="resource-item"><h3>GDC - Squeezing Performance Out of Your Unity Game</h3><p>A talk from GDC that provides practical, real-world examples of optimization techniques used by professionals.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/tG-Ur-1k_gY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default GamePhase9Resources;