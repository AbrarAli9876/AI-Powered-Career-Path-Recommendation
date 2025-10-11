// src/pages/skills/BashPhase3Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: I/O Redirection & Text Processing</h1>
                <p>Master the powerful concept of I/O streams and use classic Unix tools to filter, search, and manipulate text data.</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Core Tools & Concepts</h2>
                <div className="resource-item">
                    <h3>Redirection (The Linux Documentation Project)</h3>
                    <p>A chapter from a classic guide that explains standard input, output, and error, and how to redirect them using {'>'}, {'>>'}, and {'|'} (pipes).</p>
                    <a href="https://tldp.org/LDP/abs/html/io-redirection.html" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Chapter</a>
                </div>
                <div className="resource-item">
                    <h3>Grep, Awk, and Sed - The Holy Trinity of Text Processing</h3>
                    <p>A video tutorial that introduces the three most powerful command-line tools for searching (`grep`), extracting columns (`awk`), and editing text (`sed`).</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O0h_4-V2y2w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase3Resources;

