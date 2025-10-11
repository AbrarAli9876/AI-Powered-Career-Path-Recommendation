import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles';

const CyberPhase13Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header"><h1>Stage 13: Portfolio, Resume & LinkedIn</h1><p>Market your technical skills effectively by crafting a compelling resume and professional online presence.</p><Link to="/cybersecurity" className="back-link">← Back to Cybersecurity Roadmap</Link></header>
            <div className="resource-section"><h2>Resources</h2>
                <div className="resource-item"><h3>Jobscan.co</h3><p>A tool that lets you compare your resume against a job description to optimize it for keywords and pass ATS scans.</p><a href="https://www.jobscan.co/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Jobscan</a></div>
                <div className="resource-item"><h3>Cybersecurity Resume Tips (YouTube)</h3><p>Many tech recruiters share excellent advice on how to build a resume that stands out for security roles.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/hQur2_6c_sE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div>
    </>
);
export default CyberPhase13Resources;
