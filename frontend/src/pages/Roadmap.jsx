import React from 'react';
import { Link } from 'react-router-dom';
import './Roadmap.css';

// Re-ordered career paths
const careerPaths = [
  { 
    name: 'AI Engineer', 
    path: '/ai-engineer', 
    description: 'Design, build, and deploy complex AI and machine learning systems.' 
  },
  { 
    name: 'ML Engineer', 
    path: '/ml-engineer', 
    description: 'Operationalize ML models and build production-grade AI pipelines.' 
  },
  { 
    name: 'Data Scientist', 
    path: '/data-scientist', 
    description: 'Extract insights from data to drive business decisions.' 
  },
  { 
    name: 'Cybersecurity', 
    path: '/cybersecurity', 
    description: 'Protect digital systems and data from threats and vulnerabilities.' 
  },
  { 
    name: 'Cloud Architect', 
    path: '/cloud-architect', 
    description: 'Design and manage scalable, secure, and resilient cloud infrastructure.' 
  },
  { 
    name: 'Game Developer', 
    path: '/game-developer', 
    description: 'Bring interactive worlds and creative visions to life through code.' 
  },
  { 
    name: 'UI/UX Designer', 
    path: '/mobile-ui-designer', 
    description: 'Design intuitive and visually appealing interfaces for mobile applications.' 
  },
  // --- Others set to Coming Soon ---
  { 
    name: 'Full-Stack Developer', 
    path: '#', 
    description: 'Build and maintain both the frontend and backend of web applications. (Coming Soon)' 
  },
  { 
    name: 'Ethical Hacker', 
    path: '#', 
    description: 'Identify and exploit vulnerabilities in systems to improve security. (Coming Soon)' 
  },
  { 
    name: 'IAAC Engineer', 
    path: '#', 
    description: 'Automate and manage cloud infrastructure through code. (Coming Soon)' 
  },
  { 
    name: 'Blockchain Developer', 
    path: '#', 
    description: 'Build decentralized applications and smart contracts on blockchain platforms. (Coming Soon)' 
  },
  { 
    name: 'IoT Developer', 
    path: '#', 
    description: 'Develop software for embedded devices and the Internet of Things ecosystem. (Coming Soon)' 
  },
  { 
    name: 'AI Prompt Engineer', 
    path: '#', 
    description: 'Craft and optimize prompts to effectively communicate with large language models. (Coming Soon)' 
  },
  { 
    name: 'Low-Code / No-Code Developer', 
    path: '#', 
    description: 'Build applications and automations using visual development platforms. (Coming Soon)' 
  },
];

const Roadmap = () => {
// ... existing code ...
  return (
    <div className="roadmap-hub-page">
      <header className="roadmap-hub-header">
        <h1>Explore Job Based Roadmaps</h1>
        <p>Select a career path to view a detailed, step-by-step guide from beginner to industry professional.</p>
      </header>

      <div className="career-cards-container">
        {careerPaths.map((career) => (
          <Link to={career.path} key={career.name} className={`career-card ${career.path === '#' ? 'disabled' : ''}`}>
            <h3>{career.name}</h3>
            <p>{career.description}</p>
            <span className="view-roadmap-link">{career.path === '#' ? 'Coming Soon' : 'View Roadmap →'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;