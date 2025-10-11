import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const GamePhase15Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 15: Interview Preparation</h1><p>Prepare for technical and behavioral interviews to turn your hard-earned skills into a job offer.</p><Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link></header>
            <div className="resource-section"><h2>Books & Practice</h2>
                <div className="resource-item"><h3>"Cracking the Coding Interview" by Gayle Laakmann McDowell</h3><p>The standard guide for preparing for technical software engineering interviews, with hundreds of practice problems.</p></div>
                <div className="resource-item"><h3>LeetCode</h3><p>The premier platform for practicing common algorithm and data structure problems asked in technical interviews.</p><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Practice on LeetCode</a></div>
            </div>
        </div>
    </>
);
export default GamePhase15Resources;