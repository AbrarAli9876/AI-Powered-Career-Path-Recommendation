// src/pages/skills/BashPhase5Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const BashPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Logic and Control Flow in Scripts</h1>
                <p>Add decision-making and repetition to your scripts with conditional statements (if) and loops (for, while).</p>
                <Link to="/skills/bash" className="back-link">← Back to Bash Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides</h2>
                <div className="resource-item">
                    <h3>Bash Conditional Statements (Ryan's Tutorials)</h3>
                    <p>A clear, text-based guide with examples on how to use `if`, `else`, `elif`, and test conditions in Bash.</p>
                    <a href="https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                 <div className="resource-item">
                    <h3>Bash For Loop (TecMint)</h3>
                    <p>A practical article showcasing various ways to write and use `for` loops for iteration in your scripts.</p>
                    <a href="https://www.tecmint.com/for-loop-in-bash/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Article</a>
                </div>
            </div>
        </div>
    </>
);
export default BashPhase5Resources;
