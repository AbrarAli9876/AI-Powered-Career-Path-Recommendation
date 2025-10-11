import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase7Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 7: Cloud & DevSecOps Security</h1><p>Learn to secure modern cloud infrastructure and integrate security into the automated CI/CD pipeline.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Resources</h2>
                <div className="resource-item"><h3>AWS Security Fundamentals</h3><p>A free digital training course from AWS that covers the core principles of securing the AWS cloud.</p><a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/1774/aws-security-fundamentals-second-edition" target="_blank" rel="noopener noreferrer" className="resource-link">Go to AWS Skill Builder</a></div>
                <div className="resource-item"><h3>TryHackMe - DevSecOps Learning Path</h3><p>Provides hands-on labs for securing CI/CD pipelines, Docker containers, and Kubernetes.</p><a href="https://tryhackme.com/path/outline/devsecops" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a></div>
                <div className="resource-item"><h3>KodeKloud - Docker & Kubernetes</h3><p>A fantastic channel for visual explanations and tutorials for Docker and Kubernetes.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/bhBSlnQcq2k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default CyberPhase7Resources;
