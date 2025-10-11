// src/pages/UIDesignerPhase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const UIDesignerPhase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: User Research & Usability Testing</h1>
                <p>Learn how to gather evidence and validate design decisions by putting your designs in front of real users.</p>
                <Link to="/mobile-ui-designer" className="back-link">← Back to Mobile UI Designer Roadmap</Link>
            </header>
            <div className="resource-section">
                <h2>Guides & Books</h2>
                <div className="resource-item">
                    <h3>Usability Testing (Nielsen Norman Group)</h3>
                    <p>A wealth of articles and videos from the world's leading experts on usability research, best practices, and how to conduct effective tests.</p>
                    <a href="https://www.nngroup.com/topic/usability-testing/" target="_blank" rel="noopener noreferrer" className="resource-link">Explore NN/g</a>
                </div>
                <div className="resource-item">
                    <h3>"Rocket Surgery Made Easy" by Steve Krug</h3>
                    <p>A practical, step-by-step guide to conducting your own "do-it-yourself" usability tests to find and fix major issues in your designs, even with a small budget.</p>
                </div>
            </div>
            <div className="resource-section">
                <h2>Courses & Examples</h2>
                <div className="resource-item">
                    <h3>Google UX Design Certificate (Coursera)</h3>
                    <p>This professional certificate has an entire course dedicated to the process of conducting UX research, including planning, execution, and synthesis of findings.</p>
                    <a href="https://www.coursera.org/professional-certificates/google-ux-design" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>
                 <div className="resource-item">
                    <h3>Example Usability Test Session (YouTube)</h3>
                    <p>Watching a moderated usability test is one of the best ways to understand the process. This video shows an example session in action.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AZZp32_oJMs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
);
export default UIDesignerPhase10Resources;


