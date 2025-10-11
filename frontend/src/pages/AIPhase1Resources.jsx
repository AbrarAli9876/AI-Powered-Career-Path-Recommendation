// src/pages/AIPhase1Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const AIPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Mindset, Learning & Problem Formulation for AI</h1>
                <p>Establishing the foundational mindset, effective learning strategies, and critical thinking skills essential for a successful journey in AI.</p>
                <Link to="/ai-engineer" className="back-link">← Back to AI Engineer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Growth vs fixed mindset, deliberate practice, learning velocity.</li>
                        <li>Problem formulation and product thinking for AI (user needs → metrics → success criteria).</li>
                        <li>Ethics, fairness, bias awareness, model accountability, data privacy basics.</li>
                        <li>Versioned learning plan, habit formation (daily practice, deliberate projects, review loop).</li>
                        <li>Time & project management for long-term AI learning (sprints, milestones, mini-projects).</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Mindset: The New Psychology of Success — Carol S. Dweck</h3>
                    <p>Discover the power of a growth mindset to achieve your potential in learning and life.</p>
                    <a href="https://www.goodreads.com/book/show/40745.Mindset" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Learning How to Learn — Coursera (Dr. Barbara Oakley)</h3>
                    <p>An excellent course on meta-learning tactics to improve your learning efficiency and retention.</p>
                    <a href="https://www.coursera.org/learn/learning-how-to-learn" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Cal Newport — Deep Work (summary + techniques)</h3>
                    <p>Learn strategies for focused, uninterrupted work that produces high-quality results. [Image of person concentrating]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xJYlhhT7hyE?si=fOuBlXD38uOn4dsm"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default AIPhase1Resources;