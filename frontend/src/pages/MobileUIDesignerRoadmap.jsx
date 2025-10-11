// src/pages/MobileUIDesignerRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileUIDesignerRoadmap.css'; // We will create this CSS file

const uiDesignerStages = [
    { id: 1, title: 'Stage 1: Design Foundations', objective: 'Build a solid theoretical foundation in UI/UX, Design Thinking, User-Centered Design, and Mobile-First Principles.' },
    { id: 2, title: 'Stage 2: Platform Guidelines (iOS vs. Android)', objective: 'Become fluent in the visual languages of Apple\'s Human Interface Guidelines and Google\'s Material Design.' },
    { id: 3, title: 'Stage 3: Core UX Principles', objective: 'Acquire essential UX methodologies like creating user personas, journey mapping, and understanding information architecture.' },
    { id: 4, title: 'Stage 4: Visual UI Design', objective: 'Develop your aesthetic eye and learn the fundamental building blocks of visual communication: typography, color theory, and layout.' },
    { id: 5, title: 'Stage 5: Wireframing & Prototyping', objective: 'Learn to translate abstract concepts into tangible screen layouts and create interactive simulations of your app.' },
    { id: 6, title: 'Stage 6: Mastering Your Tools (Figma)', objective: 'Move from basic knowledge to confident, efficient execution in the industry-standard design tool, Figma.' },
    { id: 7, title: 'Stage 7: Interaction Design & Animation', objective: 'Learn to design the "conversation" between the user and the product using animations and micro-interactions.' },
    { id: 8, title: 'Stage 8: Responsive & Adaptive Design', objective: 'Create flexible layouts that adapt gracefully to different screen sizes, orientations, and form factors like tablets.' },
    { id: 9, title: 'Stage 9: Accessibility (A11y)', objective: 'Learn to create products that are usable by everyone, regardless of their abilities, following WCAG standards.' },
    { id: 10, title: 'Stage 10: User Research & Usability Testing', objective: 'Learn how to gather evidence and validate design decisions by putting your designs in front of real users.' },
    { id: 11, title: 'Stage 11: Understanding Design Systems', objective: 'Learn how professional teams build scalable, efficient, and consistent products using design systems.' },
    { id: 12, title: 'Stage 12: The Developer Handoff', objective: 'Master the critical process of translating your designs into a format that engineers can understand and build accurately.' },
    { id: 13, title: 'Stage 13: Crafting Your Portfolio Projects', objective: 'Translate your learned skills into compelling case studies that showcase your value to potential employers.' },
    { id: 14, title: 'Stage 14: Career Preparation', objective: 'Learn the strategies to navigate the job market, ace interviews, and secure your first role as a Mobile UI Designer.' },
];

const MobileUIDesignerRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="roadmap-page-container">
            <header className="roadmap-page-header">
                <h1>The Mobile UI Designer Roadmap</h1>
                <p>From beginner to job-ready, a structured path to creating beautiful, intuitive, and impactful mobile experiences.</p>
            </header>
            <div className="roadmap-stages">
                {uiDesignerStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/mobile-ui-designer/stage-${stage.id}`} className="stage-resources-button">
                                    View Details & Resources
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileUIDesignerRoadmap;
