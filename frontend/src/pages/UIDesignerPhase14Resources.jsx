// src/pages/UIDesignerPhase14Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase14Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 14: Career Preparation</h1>
                <p>Learn the strategies to navigate the job market, ace interviews, and secure your first role as a Mobile UI Designer.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Mentorship & Mock Interviews</h2>
                <div className="resource-item">
                    <h3>ADPList</h3>
                    <p>An amazing free platform to book mock interviews, mentorship sessions, and portfolio reviews with experienced industry professionals from top companies around the world.</p>
                    <a href="https://adplist.org/" target="_blank" rel="noopener noreferrer" className="resource-link">Find a Mentor</a>
                </div>
            </div>
             <div className="resource-section">
                <h2>Interview Preparation</h2>
                <div className="resource-item">
                    <h3>UI Design Interview Questions (YouTube)</h3>
                    <p>Search YouTube for "UI design interview questions" and "whiteboard challenge examples" to see how professionals approach and solve design problems in an interview setting.</p>
                    <a href="https://www.youtube.com/results?search_query=ui+design+interview+whiteboard+challenge" target="_blank" rel="noopener noreferrer" className="resource-link">Search on YouTube</a>
                </div>
                <div className="resource-item">
                    <h3>Glassdoor - Interview Questions</h3>
                    <p>Research specific companies you are interested in on Glassdoor to find interview questions that have been asked for UI/UX design roles in the past.</p>
                    <a href="https://www.glassdoor.com/Interview/index.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Explore Glassdoor</a>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase14Resources;

