import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const PythonStage3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: OOP + File Handling + OS</h1>
                <p>Mastering Object-Oriented Programming (OOP) concepts, handling files (like JSON and CSV), and interacting with the operating system using Python.</p>
                <Link to="/skills/python" className="back-link">← Back to Python Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>OOP: Classes, Objects, Inheritance, Polymorphism</li>
                        <li>File I/O: Reading/Writing files, JSON, CSV</li>
                        <li>OS Interaction: `os`, `pathlib`, `shutil` modules</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Think Python 2e</h3>
                    <p>A freely available book that introduces Python programming with a focus on thinking like a computer scientist, including good coverage of OOP. </p>
                    <a href="https://greenteapress.com/wp/think-python-2e/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Online for Free</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Python Classes/Objects (TutorialsPoint)</h3>
                    <p>A concise tutorial explaining the fundamentals of classes and objects in Python OOP.</p>
                    <a href="https://www.tutorialspoint.com/python/python_classes_objects.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Go to TutorialsPoint</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Python OOP: Object Oriented Programming From Beginner to Pro (Udemy)</h3>
                    <p>A dedicated course taking you from the basics of OOP in Python to more advanced concepts and design patterns. </p>
                    <a href="https://www.udemy.com/course/python-oop-object-oriented-programming-from-beginner-to-pro/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Python Object Oriented Programming (OOP) - For Beginners</h3>
                    <p>A beginner-friendly video tutorial explaining the core concepts of Object-Oriented Programming in Python. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/JeznW_7DlB0?si=-ROBmLfTveTka4jA"
                        title="YouTube video player (Python OOP For Beginners)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default PythonStage3Resources;
