import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 9: Cryptography & IAM</h1><p>Understand secure communication and the discipline of managing identity and access.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Learning Resources</h2>
                <div className="resource-item"><h3>Khan Academy - Cryptography</h3><p>Excellent, easy-to-understand introductory lessons on cryptography, hashing, and public-key encryption.</p><a href="https://www.khanacademy.org/computing/computer-science/cryptography" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Khan Academy</a></div>
                <div className="resource-item"><h3>Computerphile - Public Key Cryptography (YouTube)</h3><p>A fantastic video that visually explains the fundamental concepts of asymmetric encryption.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/3QHkLTAlepg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default CyberPhase9Resources;
