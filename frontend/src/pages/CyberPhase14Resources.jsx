import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 14: Interview Preparation</h1><p>Systematically prepare for the multi-stage cybersecurity interview process.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Preparation Resources</h2>
                <div className="resource-item"><h3>Glassdoor - Interview Questions</h3><p>Search for companies and look at the "Interviews" section to find example questions that have been asked for specific roles.</p><a href="https://www.glassdoor.com/Interview/index.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Glassdoor</a></div>
                <div className="resource-item"><h3>Cybersecurity Interview Questions (GitHub)</h3><p>Large, crowdsourced lists of technical questions for various cybersecurity domains.</p><a href="https://github.com/nodyun/Awesome-Cybersecurity-Interview" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase14Resources;
