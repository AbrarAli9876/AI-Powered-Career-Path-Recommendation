// src/pages/skills/PythonStage9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Working with APIs & Networking</h1>
                <p>Learn to interact with web services and APIs, and scrape data from websites using popular Python libraries.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Libraries & Tutorials</h2>
                <div className="resource-item">
                    <h3>Python's `requests` Library (Real Python)</h3>
                    <p>A guide to using the industry-standard library for making HTTP requests to interact with APIs.</p>
                    <a href="https://realpython.com/python-requests/" target="_blank" rel="noopener noreferrer" className="resource-link">Read the Guide</a>
                </div>
                <div className="resource-item">
                    <h3>Web Scraping with BeautifulSoup and Selenium (freeCodeCamp)</h3>
                    <p>A full video course that covers both static scraping with BeautifulSoup and dynamic scraping with Selenium for JavaScript-heavy sites.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GjKQ6V_iYvI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage9Resources;
