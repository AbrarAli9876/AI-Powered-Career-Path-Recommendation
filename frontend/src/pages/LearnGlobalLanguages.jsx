import React from 'react';
import { Link } from 'react-router-dom';
import './LearnGlobalLanguages.css';

const languages = [
    { 
      name: 'Mandarin Chinese', 
      path: '/languages/mandarin', 
      description: 'Essential for business in China and across Asia\'s booming tech scene.' 
    },
    { 
      name: 'German', 
      path: '/languages/german', 
      description: 'A powerhouse language in European engineering, automotive, and renewable energy sectors.' 
    },
    { 
      name: 'Japanese', 
      path: '/languages/japanese', 
      description: 'Opens doors in robotics, technology, and the global automotive industry.' 
    },
    { 
      name: 'Korean', 
      path: '/languages/korean', 
      description: 'Key for careers in entertainment, consumer electronics, and digital innovation.' 
    },
    { 
      name: 'French', 
      path: '/languages/french', 
      description: 'An official language of the UN, NATO, and the International Olympic Committee.' 
    },
    { 
      name: 'Arabic', 
      path: '/languages/arabic', 
      description: 'Crucial for roles in diplomacy, energy, and journalism across the Middle East.' 
    },
    { 
      name: 'Russian', 
      path: '/languages/russian', 
      description: 'A vital language for international relations, security, and space exploration.' 
    },
    { 
      name: 'Spanish', 
      path: '/languages/spanish', 
      description: 'Unlocks opportunities in diplomacy and trade throughout the Americas and Spain.' 
    },
    { 
      name: 'Portuguese', 
      path: '/languages/portuguese', 
      description: 'The language of Brazil, a major player in agriculture, tech, and natural resources.' 
    },
    { 
      name: 'Hindi', 
      path: '#', 
      description: 'Connect with one of the world\'s fastest-growing economies and its vibrant IT sector.' 
    },
    { 
      name: 'Swahili', 
      path: '#', 
      description: 'A lingua franca for business, development, and NGOs across East Africa.' 
    },
    { 
      name: 'Pashto', 
      path: '#', 
      description: 'Important for roles in defense, international development, and journalism.' 
    },
];

const LearnGlobalLanguages = () => {
  return (
    <div className="language-roadmap-page">
      <header className="language-roadmap-header">
        <h1>Explore Global Languages</h1>
        <p>Focus your learning on a specific language. Select one to view a curated, step-by-step learning path.</p>
      </header>

      <div className="language-cards-container">
        {languages.map((lang) => (
          <Link to={lang.path} key={lang.name} className={`language-card ${lang.path === '#' ? 'disabled' : ''}`}>
            <h3>{lang.name}</h3>
            <p>{lang.description}</p>
            <span className="view-language-link">{lang.path === '#' ? 'Coming Soon' : 'View Path →'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnGlobalLanguages;

