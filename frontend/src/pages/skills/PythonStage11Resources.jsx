// src/pages/skills/PythonStage11Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage11Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-contaianer">
            <header className="resource-header">
                <h1>Stage 11: Python Specializations</h1>
                <p>Choose a professional path and develop deep, job-ready skills in a specific domain like Web Development or Data Science.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Web Development</h2>
                 <div className="resource-item">
                    <h3>FastAPI Official Tutorial</h3>
                    <p>The official documentation for FastAPI is one of the best ever written, guiding you through building high-performance APIs from scratch.</p>
                    <a href="https://fastapi.tiangolo.com/tutorial/" target="_blank" rel="noopener noreferrer" className="resource-link">Start with FastAPI</a>
                </div>
            </div>
             <div className="resource-section">
                <h2>Data Science & Machine Learning</h2>
                <div className="resource-item">
                    <h3>Python for Data Science (freeCodeCamp)</h3>
                    <p>A full course video that covers the core data science stack, including NumPy, Pandas, and Matplotlib.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r-uOLxNrNk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage11Resources;
