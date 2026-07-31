// src/pages/LearnGlobalLanguages.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './LearnGlobalLanguages.css';

const languages = [
  {
    name: 'Mandarin Chinese',
    description: 'Essential for business in China and across Asia\'s booming tech scene.'
  },
  {
    name: 'German',
    description: 'A powerhouse language in European engineering, automotive, and renewable energy sectors.'
  },
  {
    name: 'Japanese',
    description: 'Opens doors in robotics, technology, and the global automotive industry.'
  },
  {
    name: 'Korean',
    description: 'Key for careers in entertainment, consumer electronics, and digital innovation.'
  },
  {
    name: 'French',
    description: 'An official language of the UN, NATO, and the International Olympic Committee.'
  },
  {
    name: 'Arabic',
    description: 'Crucial for roles in diplomacy, energy, and journalism across the Middle East.'
  },
  {
    name: 'Russian',
    description: 'A vital language for international relations, security, and space exploration.'
  },
  {
    name: 'Spanish',
    description: 'Unlocks opportunities in diplomacy and trade throughout the Americas and Spain.'
  },
  {
    name: 'Portuguese',
    description: 'The language of Brazil, a major player in agriculture, tech, and natural resources.'
  },
  {
    name: 'Hindi',
    description: 'Connect with one of the world\'s fastest-growing economies and its vibrant IT sector.'
  },
  {
    name: 'Swahili',
    description: 'A lingua franca for business, development, and NGOs across East Africa.'
  },
  {
    name: 'Pashto',
    description: 'Important for roles in defense, international development, and journalism.'
  }
];

const LearnGlobalLanguages = () => {
  return (
    <div className="language-roadmap-page">
      <header className="language-roadmap-header">
        <h1>Explore Global Languages</h1>
        <p>
          Focus your learning on a specific language. Select one to view a
          curated, step-by-step learning path.
        </p>
      </header>

      {/* Feature Notice */}
      <div className="feature-notice">
        <h2>🚧 Feature Under Development</h2>
        <p>
          The <strong>Global Language Learning</strong> module is currently under
          development and is not yet available. We are working on providing
          structured roadmaps, learning resources, practice exercises, quizzes,
          and progress tracking for each language.
        </p>

        <p>
          This feature will be included in a future update. Thank you for your
          patience and understanding.
        </p>
      </div>

      <div className="language-cards-container">
        {languages.map((lang) => (
          <Link
            key={lang.name}
            to="#"
            onClick={(e) => e.preventDefault()}
            className="language-card disabled"
          >
            <h3>{lang.name}</h3>
            <p>{lang.description}</p>
            <span className="view-language-link">
               Coming Soon
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnGlobalLanguages;