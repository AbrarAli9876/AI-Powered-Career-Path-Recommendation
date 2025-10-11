import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 4: Cyber Defense & Blue Teaming</h1><p>Understand SOC operations, incident response, threat intelligence, and proactive threat hunting.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Platforms & Guides</h2>
                <div className="resource-item"><h3>LetsDefend.io</h3><p>A hands-on SOC analyst training platform where you can investigate real-world security alerts in a simulated environment.</p><a href="https://letsdefend.io/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LetsDefend</a></div>
                <div className="resource-item"><h3>TryHackMe - Cyber Defense Path</h3><p>A learning path with practical labs on SIEMs, network analysis, and incident response.</p><a href="https://tryhackme.com/path/outline/cyber-defense" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a></div>
                <div className="resource-item"><h3>NIST SP 800-61: Incident Handling Guide</h3><p>The official source document for the industry-standard Incident Response lifecycle.</p><a href="https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase4Resources;
