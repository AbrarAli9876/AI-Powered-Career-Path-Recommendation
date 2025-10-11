// src/pages/skills/PythonStage1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles';

const PythonStage1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Absolute Basics of Programming & Python Setup</h1>
                <p>Install Python and set up your development environment while learning the core syntax, variables, and data types.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Comprehensive Courses (Free)</h2>
                <div className="resource-item">
                    <h3>Learn Python – Full Course for Beginners (freeCodeCamp)</h3>
                    <p>An extensive video tutorial on YouTube that covers all the foundational topics in great detail, making it a one-stop-shop for beginners.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="resource-item">
                    <h3>Python for Everybody (Coursera / Dr. Chuck)</h3>
                    <p>A legendary course for its gentle introduction to programming concepts for absolute beginners. Free to audit on Coursera.</p>
                    <a href="https://www.coursera.org/specializations/python" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
            </div>
             <div className="resource-section">
                <h2>Books & Paid Courses</h2>
                <div className="resource-item">
                    <h3>"Automate the Boring Stuff with Python" by Al Sweigart</h3>
                    <p>A highly practical book that teaches Python by showing you how to build scripts that automate everyday tasks. Available to read for free online.</p>
                    <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Read for Free</a>
                </div>
                 <div className="resource-item">
                    <h3>100 Days of Code: The Complete Python Pro Bootcamp (Udemy)</h3>
                    <p>A highly-rated, project-based course where you build one small project every day, ensuring constant application of concepts.</p>
                    <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer" className="resource-link">View on Udemy</a>
                </div>
            </div>
        </div>
    </>
);
export default PythonStage1Resources;

