import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 1: IT & Networking Fundamentals</h1><p>Master the foundational concepts of computing, operating systems, and networking.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Resources</h2>
                <div className="resource-item"><h3>Professor Messer's CompTIA Network+ Course</h3><p>The gold standard for free, comprehensive foundational learning on networking concepts.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLG49S3nxzAnkF_crE2i9_2uV_s_M_2_f-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="resource-item"><h3>TryHackMe - Pre-Security Learning Path</h3><p>An interactive, gamified path for absolute beginners covering networking, web fundamentals, and Linux.</p><a href="https://tryhackme.com/path/outline/pre-security" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a></div>
                <div className="resource-item"><h3>OverTheWire - Bandit Wargame</h3><p>Learn Linux commands in a progressive, challenge-based format that builds true command-line fluency.</p><a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to OverTheWire</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase1Resources;
