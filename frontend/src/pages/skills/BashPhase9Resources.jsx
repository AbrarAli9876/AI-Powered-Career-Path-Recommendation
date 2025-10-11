// src/pages/skills/BashPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Real-World Applications (DevOps & Cybersecurity)</h1>
                <p>Apply your Bash skills to practical scenarios in system administration, DevOps automation, and cybersecurity tasks.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Use Cases</h2>
                <div className="resource-item">
                    <h3>Bash Scripting for DevOps (KodeKloud)</h3>
                    <p>A video explaining how Bash is used in real-world DevOps for automating server setups, deployments, and other operational tasks.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yGz-sIe6-x0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase9Resources;
