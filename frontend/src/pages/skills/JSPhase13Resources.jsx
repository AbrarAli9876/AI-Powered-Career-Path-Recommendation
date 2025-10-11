// src/pages/skills/JSPhase13Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const JSPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 13: Deployment & DevOps Basics</h1>
                <p>Learn to make your applications live on the internet using modern platforms and CI/CD practices.</p>
                <Link to="/skills/javascript" className="back-link">← Back to JavaScript Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Deployment Platforms</h2>
                <div className="resource-item">
                    <h3>Deploying React with Vercel</h3>
                    <p>The official guide from Vercel for zero-configuration deployments of React applications from a Git repository.</p>
                    <a href="https://vercel.com/guides/deploying-react-with-vercel" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Vercel</a>
                </div>
                <div className="resource-item">
                    <h3>Deploying a Node.js App on Render</h3>
                    <p>The official quickstart guide for deploying a Node.js backend on Render, a popular and easy-to-use cloud platform.</p>
                    <a href="https://render.com/docs/deploy-node-express-app" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Render</a>
                </div>
            </div>
        </div>
    </>
);
export default JSPhase13Resources;
