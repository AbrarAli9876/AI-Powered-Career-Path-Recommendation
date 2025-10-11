import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase12Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 12: Real-World Projects</h1><p>Demonstrate initiative and creativity by building your own projects, such as a home detection lab or custom tools.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Project Ideas & Hosting</h2>
                <div className="resource-item"><h3>Build a Home "Detection Lab"</h3><p>A great project to showcase defensive skills. Build a virtual network, configure a SIEM, and practice detecting your own attacks.</p></div>
                <div className="resource-item"><h3>GitHub</h3><p>The central hub for open-source projects and for hosting your own project code, scripts, and documentation.</p><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub</a></div>
                <div className="resource-item"><h3>HackerOne / Bugcrowd</h3><p>The leading platforms for bug bounty programs, where you can gain experience finding vulnerabilities in real applications.</p><a href="https://www.hackerone.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to HackerOne</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase12Resources;
