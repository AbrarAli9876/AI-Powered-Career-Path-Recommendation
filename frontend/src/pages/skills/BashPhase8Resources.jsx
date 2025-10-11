// src/pages/skills/BashPhase8Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase8Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 8: Automation and Scheduling</h1>
                <p>Learn to automate the execution of your scripts at specific times or intervals using `cron`.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Tutorials</h2>
                <div className="resource-item">
                    <h3>Introduction to Cron on Linux (DigitalOcean)</h3>
                    <p>A comprehensive tutorial that explains the crontab syntax and how to schedule your Bash scripts to run automatically.</p>
                    <a href="https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Tutorial</a>
                </div>
                 <div className="resource-item">
                    <h3>Crontab Guru</h3>
                    <p>A helpful online tool for quickly creating and verifying cron schedule expressions.</p>
                    <a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer" className="resource-link">Use the Tool</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase8Resources;
