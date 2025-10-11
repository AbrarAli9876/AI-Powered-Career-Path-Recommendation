import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 2: Cybersecurity Foundations</h1><p>Learn the core principles (CIA Triad), common threats, and major industry frameworks (NIST, MITRE).</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Courses & Frameworks</h2>
                <div className="resource-item"><h3>Google Cybersecurity Certificate (Coursera)</h3><p>An excellent starting point covering the CIA Triad, common threats, and an introduction to security frameworks.</p><a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a></div>
                <div className="resource-item"><h3>MITRE ATT&CK® Framework</h3><p>The official knowledge base of adversary tactics and techniques. Essential for understanding attacker behavior.</p><a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore the Framework</a></div>
                <div className="resource-item"><h3>NIST Cybersecurity Framework (CSF)</h3><p>The official US government framework for managing cybersecurity risk, built on the five functions: Identify, Protect, Detect, Respond, Recover.</p><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="resource-link">Go to NIST</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase2Resources;
