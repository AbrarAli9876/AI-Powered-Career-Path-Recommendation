import React, { useState } from 'react';
import './About.css'; 

// Import all the necessary images from your assets folder
import dev1Photo from '../assets/images/dev1.jpg'; 
import dev2Photo from '../assets/images/dev2.jpg';
import dev3Photo from '../assets/images/dev3.jpg';
import dev4Photo from '../assets/images/dev4.jpg';
import guidePhoto from '../assets/images/guide.jpg'; // --- ADDED IMPORT FOR GUIDE PHOTO ---

const About = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    return (
        <div className="about-page">
            {enlargedImage && (
                <div className="image-modal-overlay" onClick={() => setEnlargedImage(null)}>
                    <img src={enlargedImage} alt="Enlarged profile" className="enlarged-image" />
                </div>
            )}

            <header className="about-header">
                <h1>About CareerCraft</h1>
                <p>Your guide to navigating the future of tech careers.</p>
            </header>

            <section className="about-section application-info">
                <h2>About the Application</h2>
                <p>
                    CareerCraft is designed to be your indispensable companion in exploring and advancing your career in the rapidly evolving tech industry. 
                    We provide comprehensive roadmaps, personalized skill development guides, a curated job portal, and invaluable mentorship opportunities. 
                    Our goal is to empower individuals with the knowledge and resources needed to build a successful and fulfilling career path.
                </p>
            </section>

            <section className="about-section meet-developers">
                <h2>Meet the Developers</h2>
                <div className="developer-cards-container">
                    {/* Developer Card 1 */}
                    <div className="developer-card">
                        <img src={dev1Photo} alt="K.S. Abrar Ali Ahmed" className="developer-photo" onClick={() => setEnlargedImage(dev1Photo)} />
                        <h3>K S Abrar Ali Ahmed</h3>
                        <p><strong>College:</strong> K S School of Engineering and Management</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/abrar-ali-ahmed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/AbrarAli9876/" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    {/* Developer Card 2 */}
                    <div className="developer-card">
                        <img src={dev2Photo} alt="P Abhiram" className="developer-photo" onClick={() => setEnlargedImage(dev2Photo)} />
                        <h3>P Abhiram</h3>
                        <p><strong>College:</strong> K S School of Engineering and Management</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/pathipati-abhiram/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/abhiram35" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    {/* Developer Card 3 */}
                    <div className="developer-card">
                        <img src={dev3Photo} alt="Aryan Kumar" className="developer-photo" onClick={() => setEnlargedImage(dev3Photo)} />
                        <h3>Aryan Kumar</h3>
                        <p><strong>College:</strong> K S School of Engineering and Management</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/aryan-kumar-ab10b52ab" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/memer0" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    {/* Developer Card 4 */}
                    <div className="developer-card">
                        <img src={dev4Photo} alt="Tanmay Singh" className="developer-photo" onClick={() => setEnlargedImage(dev4Photo)} />
                        <h3>Tanmay Singh</h3>
                        <p><strong>College:</strong> K S School of Engineering and Management</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/tanmay-singh-216380334" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/IronFist2711" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section project-guide">
                <h2>Meet the Project Guide</h2>
                <div className="guide-card">
                    {/* --- ADDED IMG TAG FOR GUIDE --- */}
                    <img 
                        src={guidePhoto} 
                        alt="Harshitha Sudheer" 
                        className="developer-photo" 
                        onClick={() => setEnlargedImage(guidePhoto)} 
                    />
                    <h3>Harshitha Sudheer</h3>
                    <p><strong>Designation:</strong> Assistant Professor</p>
                    <p><strong>College:</strong> K S School of Engineering and Management</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/harshitha-sudheer-6314651b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <p className="guide-description">
                        Harshitha Sudheer provided invaluable guidance and strategic direction throughout the development of CareerCraft, 
                        ensuring its relevance and effectiveness in addressing real-world career challenges.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;