import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 5: Offensive Security & Ethical Hacking</h1><p>Learn to think like an attacker by finding and exploiting vulnerabilities with tools like Nmap and Burp Suite.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Platforms</h2>
                <div className="resource-item"><h3>PortSwigger Web Security Academy</h3><p>The definitive free resource for learning web application hacking, with hundreds of interactive labs covering the OWASP Top 10.</p><a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Web Security Academy</a></div>
                <div className="resource-item"><h3>TryHackMe - Jr Penetration Tester Path</h3><p>A guided, hands-on introduction to offensive security tools and methodologies.</p><a href="https://tryhackme.com/path/outline/jr-penetration-tester" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a></div>
                <div className="resource-item"><h3>Hack The Box</h3><p>The premier platform for practicing penetration testing skills on vulnerable machines in a black-box challenge environment.</p><a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Hack The Box</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase5Resources;
