import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 3: System Hardening & Security Tools</h1><p>Learn to reduce a system's attack surface and use core tools like Firewalls, EDR, and SIEM.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Guides & Tools</h2>
                <div className="resource-item"><h3>CIS Benchmarks</h3><p>The industry-standard, detailed guides for securely configuring nearly every major operating system and application.</p><a href="https://www.cisecurity.org/cis-benchmarks" target="_blank" rel="noopener noreferrer" className="resource-link">Go to CIS Security</a></div>
                <div className="resource-item"><h3>Splunk Free</h3><p>A free version of the leading SIEM platform that you can install in your home lab to learn the basics of log aggregation and analysis.</p><a href="https://www.splunk.com/en_us/download/splunk-enterprise.html" target="_blank" rel="noopener noreferrer" className="resource-link">Download Splunk</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase3Resources;
