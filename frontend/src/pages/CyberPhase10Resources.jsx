import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 10: Certifications Roadmap</h1><p>Follow a structured path of industry-recognized certifications to validate your knowledge.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Key Certifications</h2>
                <div className="resource-item"><h3>CompTIA Security+</h3><p>The universally recognized starting point for a security career, covering the breadth of foundational knowledge.</p><a href="https://www.comptia.org/certifications/security" target="_blank" rel="noopener noreferrer" className="resource-link">Learn about Security+</a></div>
                <div className="resource-item"><h3>eLearnSecurity Junior Penetration Tester (eJPT)</h3><p>A highly respected, practical, hands-on certification that validates real-world penetration testing skills.</p><a href="https://elearnsecurity.com/product/ejpt-certification/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn about eJPT</a></div>
                <div className="resource-item"><h3>Offensive Security Certified Professional (OSCP)</h3><p>The most respected and challenging hands-on ethical hacking certification, signifying advanced practical skill.</p><a href="https://www.offsec.com/courses/pen-200/" target="_blank" rel="noopener noreferrer" className="resource-link">Learn about OSCP</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase10Resources;
