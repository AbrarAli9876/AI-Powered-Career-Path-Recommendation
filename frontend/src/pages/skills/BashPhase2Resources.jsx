// src/pages/skills/BashPhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Permissions, Users, and Processes</h1>
                <p>Learn to manage file permissions, user accounts, and running processes—the core of system administration.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Tutorials</h2>
                <div className="resource-item">
                    <h3>Linux File Permissions Explained (TecMint)</h3>
                    <p>A clear article that explains the `chmod` command and how to read and set read, write, and execute permissions for users, groups, and others.</p>
                    <a href="https://www.tecmint.com/linux-file-permissions-explained/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Managing Processes in Linux (freeCodeCamp)</h3>
                    <p>A video that covers how to view running processes with `ps` and `top`, and how to terminate them with `kill`.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t-tSj_6n5CU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase2Resources;
