// src/pages/CyberPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CyberPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Offensive Security & Ethical Hacking</h1>
                <p>Developing offensive security skills, including reconnaissance, vulnerability exploitation, and penetration testing methodologies, to identify and mitigate security weaknesses.</p>
                <Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Reconnaissance / information gathering (OSINT, scanning)</li>
                        <li>Vulnerability discovery, exploitation, post-exploitation, pivot</li>
                        <li>Web application attacks: SQLi, XSS, CSRF, RCE, SSRF</li>
                        <li>Network attacks: ARP poisoning, DNS spoofing, MITM</li>
                        <li>Privilege escalation, lateral movement, persistence</li>
                        <li>Exploit development basics, buffer overflow, memory corruption</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Books --- */}
                <div className="resource-item">
                    <h3>📗 Book: FreeComputerBooks for hacking, reverse engineering</h3>
                    <p>Access a vast collection of free books covering hacking, reverse engineering, and various offensive security topics.</p>
                    <a href="https://freecomputerbooks.com/compscspecialSecurityBooks.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="resource-link">Browse Free Books</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Free Courses: Cybrary’s Pentesting / Ethical Hacking Paths</h3>
                    <p>Explore free courses and learning paths on penetration testing and ethical hacking from Cybrary.</p>
                    <a href="https://www.cybrary.it/free-content?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Cybrary</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: IBM Ethical Hacking with Open Source Tools — Coursera</h3>
                    <p>A professional certificate program focusing on ethical hacking techniques using open-source tools.</p>
                    <a href="https://www.coursera.org/professional-certificates/ibm-ethical-hacking-with-open-source-tools" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                {/* --- Platforms --- */}
                <div className="resource-item">
                    <h3>💻 Platform: TryHackMe’s Offensive Tracks</h3>
                    <p>Engage in hands-on labs and guided exercises to learn and practice offensive security skills in a controlled environment.</p>
                    <a href="https://tryhackme.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TryHackMe</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Ethical Hacking Full Course</h3>
                    <p>A comprehensive live course covering the full spectrum of ethical hacking, from reconnaissance to exploitation.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/V7Lnm8FQ_GI?si=ddkGjTvGgPdndL2S"
                        title="YouTube video player (Ethical Hacking Full Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CyberPhase5Resources;