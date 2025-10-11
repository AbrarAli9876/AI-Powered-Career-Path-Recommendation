// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Dedicated CSS for the Home page

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section (Top Banner) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-tagline">
            Find Your Best Career Path with AI Personalized Roadmaps.
          </h1>
          <p className="hero-subtext">
            CareerCraft intelligently analyzes your skills and aspirations to illuminate your ideal tech journey.
            Start exploring possibilities today.
          </p>
          <div className="hero-cta-buttons">
            <Link to="/roadmaps" className="btn btn-primary">
              Explore Roadmaps
            </Link>
            <Link to="/assessment" className="btn btn-secondary">
              Take the Assessment
            </Link>
          </div>
        </div>
        <div className="hero-illustration">
          <img 
            src="/src/assets/images/home-hero-illustration.webp" // Ensure this image exists
            alt="Illustration of career planning with AI and future tech" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Suggested: A Section to Highlight Key Features/Benefits */}
      <section className="features-section">
        <h2>Why CareerCraft?</h2>
        <div className="features-grid">
          {/* --- REORDERED FEATURES --- */}
          <div className="feature-card">
            <div className="icon">
              {/* SVG Icon for AI */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m7.5 0V3m-3.75 7.5h10.5a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25-2.25H6.75a2.25 2.25 0 01-2.25-2.25v-3.75a2.25 2.25 0 012.25-2.25zM12 18.75V16.5m-3.75-3.75h7.5" />
              </svg>
            </div>
            <h3>AI-Powered Recommendations</h3>
            <p>Leverage the power of advanced AI to get an intelligent, data-driven career recommendation tailored to you.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              {/* SVG Icon for Chatbot */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 01.375-.375h6a.375.375 0 010 .75h-6a.375.375 0 01-.375-.375zm0 3a.375.375 0 01.375-.375h6a.375.375 0 010 .75h-6a.375.375 0 01-.375-.375zm0 3a.375.375 0 01.375-.375h6a.375.375 0 010 .75h-6a.375.375 0 01-.375-.375z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" />
              </svg>
            </div>
            <h3>24/7 AI Assistance</h3>
            <p>Our integrated chatbot is always available to answer your questions and help you navigate your learning journey.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-12.495l-1.28-1.28a1.5 1.5 0 00-2.122 0l-1.28 1.28M15 9.75L12 12.75M9 15l3-3m6 6l-1.28-1.28a1.5 1.5 0 00-2.122 0l-1.28 1.28M3 9.75l3 3m3-3l3 3" />
              </svg>
            </div>
            <h3>Personalized Roadmaps</h3>
            <p>Tailored learning paths based on your unique profile and current market demand for tech roles.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" />
              </svg>
            </div>
            <h3>Skill Gap Analysis</h3>
            <p>Shows you what skills you already have and what you need to improve to find the best career path for you.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
              </svg>
            </div>
            <h3>Student-Friendly</h3>
            <p>A simple and intuitive interface designed for beginners as well as seasoned professionals.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              {/* SVG Icon for Time */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Time Effective</h3>
            <p>Save countless hours of research with our curated, expert-backed roadmaps for every major tech career.</p>
          </div>
        </div>
      </section>

      {/* 2. Call to Action (Bottom) */}
      <section className="bottom-cta-section">
        <h2>Start Your Career Journey Today 🚀</h2>
        <Link to="/assessment" className="btn btn-primary btn-large">
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;

