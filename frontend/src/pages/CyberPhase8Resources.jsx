import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 8: Digital Forensics & Malware Analysis</h1><p>Specialize in digital crime scene investigation and reverse-engineering of malicious software.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Tools & Practice</h2>
                <div className="resource-item"><h3>Autopsy - Free Training</h3><p>The official training courses for Autopsy, a leading open-source digital forensics platform.</p><a href="https://www.autopsy.com/support/training/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Autopsy</a></div>
                <div className="resource-item"><h3>Malware-Traffic-Analysis.net</h3><p>An invaluable resource with thousands of practice exercises, including malware samples and traffic captures.</p><a href="https://www.malware-traffic-analysis.net/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Malware Traffic Analysis</a></div>
                <div className="resource-item"><h3>13Cubed (YouTube)</h3><p>An excellent, in-depth channel offering tutorials on forensic tools and techniques.</p><a href="https://www.youtube.com/c/13cubed" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Channel</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase8Resources;
