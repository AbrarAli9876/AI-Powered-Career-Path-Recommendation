import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 6: Scripting & Automation</h1><p>Master Python, Bash, and PowerShell to automate tasks, parse logs, and build custom security tools.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Books & Courses</h2>
                <div className="resource-item"><h3>Automate the Boring Stuff with Python</h3><p>An excellent, free book and course for learning practical Python for automation tasks.</p><a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read for Free</a></div>
                <div className="resource-item"><h3>The Cyber Mentor - Python 101 for Hackers</h3><p>A practical course focused on building security tools with Python.</p><a href="https://www.tcm-sec.com/courses/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TCM Security</a></div>
            </div>
        </div>
    </>
);
export default CyberPhase6Resources;
