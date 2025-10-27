// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Import Core & Layout Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';    
import './App.css';

// --- Import Core Page Components ---
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import SkillRoadmap from './pages/SkillRoadmap';
import About from './pages/About';
import Assessment from './pages/Assessment';
import ResumeBuilder from './pages/ResumeBuilder.jsx';
import Jobs from './pages/Jobs';
import MockInterview from './pages/MockInterview';
import LearnGlobalLanguages from './pages/LearnGlobalLanguages';

// --- Import All Job-Based Roadmap Main Pages ---
import DataScientistRoadmap from './pages/DataScientistRoadmap';
import AIEngineerRoadmap from './pages/AIEngineerRoadmap';
import CloudArchitectRoadmap from './pages/CloudArchitectRoadmap';
import CybersecurityRoadmap from './pages/CybersecurityRoadmap';
import GameDeveloperRoadmap from './pages/GameDeveloperRoadmap';
import MLEngineerRoadmap from './pages/MLEngineerRoadmap';
import MobileUIDesignerRoadmap from './pages/MobileUIDesignerRoadmap';

// --- Import All Skill-Based Roadmap Main Pages ---
import PythonRoadmap from './pages/skills/PythonRoadmap';
import JavaScriptRoadmap from './pages/skills/JavaScriptRoadmap';
import ReactRoadmap from './pages/skills/ReactRoadmap';
import SQLRoadmap from './pages/skills/SQLRoadmap';
import DockerRoadmap from './pages/skills/DockerRoadmap';
import CPlusPlusRoadmap from './pages/skills/CPlusPlusRoadmap';
import JavaRoadmap from './pages/skills/JavaRoadmap';
import AWSRoadmap from './pages/skills/AWSRoadmap';
import CRoadmap from './pages/skills/CRoadmap';
import GolangRoadmap from './pages/skills/GolangRoadmap';
import BashRoadmap from './pages/skills/BashRoadmap';
// --- Import All Resource Pages ---

// Data Scientist Resources
import Phase1Resources from './pages/Phase1Resources';
import Phase2Resources from './pages/Phase2Resources';
import Phase3Resources from './pages/Phase3Resources';
import Phase4Resources from './pages/Phase4Resources';
import Phase5Resources from './pages/Phase5Resources';
import Phase6Resources from './pages/Phase6Resources';
import Phase7Resources from './pages/Phase7Resources';
import Phase8Resources from './pages/Phase8Resources';
import Phase9Resources from './pages/Phase9Resources';
import Phase10Resources from './pages/Phase10Resources';
import Phase11Resources from './pages/Phase11Resources';
import Phase12Resources from './pages/Phase12Resources';
import Phase13Resources from './pages/Phase13Resources';
import Phase14Resources from './pages/Phase14Resources';
import Phase15Resources from './pages/Phase15Resources';

// AI Engineer Resources
import AIPhase1Resources from './pages/AIPhase1Resources';
import AIPhase2Resources from './pages/AIPhase2Resources';
import AIPhase3Resources from './pages/AIPhase3Resources';
import AIPhase4Resources from './pages/AIPhase4Resources';
import AIPhase5Resources from './pages/AIPhase5Resources';
import AIPhase6Resources from './pages/AIPhase6Resources';
import AIPhase7Resources from './pages/AIPhase7Resources';
import AIPhase8Resources from './pages/AIPhase8Resources';
import AIPhase9Resources from './pages/AIPhase9Resources';
import AIPhase10Resources from './pages/AIPhase10Resources';
import AIPhase11Resources from './pages/AIPhase11Resources';
import AIPhase12Resources from './pages/AIPhase12Resources';
import AIPhase13Resources from './pages/AIPhase13Resources';
import AIPhase14Resources from './pages/AIPhase14Resources';
import AIPhase15Resources from './pages/AIPhase15Resources';
import AIPhase16Resources from './pages/AIPhase16Resources';

// Cloud Architect Resources
import CloudPhase1Resources from './pages/CloudPhase1Resources';
import CloudPhase2Resources from './pages/CloudPhase2Resources';
import CloudPhase3Resources from './pages/CloudPhase3Resources';
import CloudPhase4Resources from './pages/CloudPhase4Resources';
import CloudPhase5Resources from './pages/CloudPhase5Resources';
import CloudPhase6Resources from './pages/CloudPhase6Resources';
import CloudPhase7Resources from './pages/CloudPhase7Resources';
import CloudPhase8Resources from './pages/CloudPhase8Resources';
import CloudPhase9Resources from './pages/CloudPhase9Resources';
import CloudPhase10Resources from './pages/CloudPhase10Resources';
import CloudPhase11Resources from './pages/CloudPhase11Resources';
import CloudPhase12Resources from './pages/CloudPhase12Resources';
import CloudPhase13Resources from './pages/CloudPhase13Resources';

// Cybersecurity Resources
import CyberPhase1Resources from './pages/CyberPhase1Resources';
import CyberPhase2Resources from './pages/CyberPhase2Resources';
import CyberPhase3Resources from './pages/CyberPhase3Resources';
import CyberPhase4Resources from './pages/CyberPhase4Resources';
import CyberPhase5Resources from './pages/CyberPhase5Resources';
import CyberPhase6Resources from './pages/CyberPhase6Resources';
import CyberPhase7Resources from './pages/CyberPhase7Resources';
import CyberPhase8Resources from './pages/CyberPhase8Resources';
import CyberPhase9Resources from './pages/CyberPhase9Resources';
import CyberPhase10Resources from './pages/CyberPhase10Resources';
import CyberPhase11Resources from './pages/CyberPhase11Resources';
import CyberPhase12Resources from './pages/CyberPhase12Resources';
import CyberPhase13Resources from './pages/CyberPhase13Resources';
import CyberPhase14Resources from './pages/CyberPhase14Resources';

// Game Developer Resources
import GamePhase1Resources from './pages/GamePhase1Resources';
import GamePhase2Resources from './pages/GamePhase2Resources';
import GamePhase3Resources from './pages/GamePhase3Resources';
import GamePhase4Resources from './pages/GamePhase4Resources';
import GamePhase5Resources from './pages/GamePhase5Resources';
import GamePhase6Resources from './pages/GamePhase6Resources';
import GamePhase7Resources from './pages/GamePhase7Resources';
import GamePhase8Resources from './pages/GamePhase8Resources';
import GamePhase9Resources from './pages/GamePhase9Resources';
import GamePhase10Resources from './pages/GamePhase10Resources';
import GamePhase11Resources from './pages/GamePhase11Resources';
import GamePhase12Resources from './pages/GamePhase12Resources';
import GamePhase13Resources from './pages/GamePhase13Resources';
import GamePhase14Resources from './pages/GamePhase14Resources';

// Machine Learning Engineer Resources
import MLPhase1Resources from './pages/MLPhase1Resources';
import MLPhase2Resources from './pages/MLPhase2Resources';
import MLPhase3Resources from './pages/MLPhase3Resources';
import MLPhase4Resources from './pages/MLPhase4Resources';
import MLPhase5Resources from './pages/MLPhase5Resources';
import MLPhase6Resources from './pages/MLPhase6Resources';
import MLPhase7Resources from './pages/MLPhase7Resources';
import MLPhase8Resources from './pages/MLPhase8Resources';
import MLPhase9Resources from './pages/MLPhase9Resources';
import MLPhase10Resources from './pages/MLPhase10Resources';
import MLPhase11Resources from './pages/MLPhase11Resources';

import UIDesignerPhase1Resources from './pages/UIDesignerPhase1Resources';
import UIDesignerPhase2Resources from './pages/UIDesignerPhase2Resources';
import UIDesignerPhase3Resources from './pages/UIDesignerPhase3Resources';
import UIDesignerPhase4Resources from './pages/UIDesignerPhase4Resources';
import UIDesignerPhase5Resources from './pages/UIDesignerPhase5Resources';
import UIDesignerPhase6Resources from './pages/UIDesignerPhase6Resources';
import UIDesignerPhase7Resources from './pages/UIDesignerPhase7Resources';
import UIDesignerPhase8Resources from './pages/UIDesignerPhase8Resources';
// Python Skill Roadmap Resources
import PythonStage1Resources from './pages/skills/PythonStage1Resources';
import PythonStage2Resources from './pages/skills/PythonStage2Resources';
import PythonStage3Resources from './pages/skills/PythonStage3Resources';
import PythonStage4Resources from './pages/skills/PythonStage4Resources';
import PythonStage5Resources from './pages/skills/PythonStage5Resources';
import PythonStage6Resources from './pages/skills/PythonStage6Resources';
import PythonStage7Resources from './pages/skills/PythonStage7Resources';
import PythonStage8Resources from './pages/skills/PythonStage8Resources';
import PythonStage9Resources from './pages/skills/PythonStage9Resources';
import PythonStage10Resources from './pages/skills/PythonStage10Resources';
import PythonStage11Resources from './pages/skills/PythonStage11Resources';


// JavaScript Skill Roadmap Resources
import JSPhase1Resources from './pages/skills/JSPhase1Resources';
import JSPhase2Resources from './pages/skills/JSPhase2Resources';
import JSPhase3Resources from './pages/skills/JSPhase3Resources';
import JSPhase4Resources from './pages/skills/JSPhase4Resources';
import JSPhase5Resources from './pages/skills/JSPhase5Resources';
import JSPhase6Resources from './pages/skills/JSPhase6Resources';
import JSPhase7Resources from './pages/skills/JSPhase7Resources';
import JSPhase8Resources from './pages/skills/JSPhase8Resources';
import JSPhase9Resources from './pages/skills/JSPhase9Resources';
import JSPhase10Resources from './pages/skills/JSPhase10Resources';
import JSPhase11Resources from './pages/skills/JSPhase11Resources';
import JSPhase12Resources from './pages/skills/JSPhase12Resources';
import JSPhase13Resources from './pages/skills/JSPhase13Resources';
import JSPhase14Resources from './pages/skills/JSPhase14Resources';
import JSPhase15Resources from './pages/skills/JSPhase15Resources';
import JSPhase16Resources from './pages/skills/JSPhase16Resources';

// React Skill Roadmap Resources
import ReactPhase1Resources from './pages/skills/ReactPhase1Resources';
import ReactPhase2Resources from './pages/skills/ReactPhase2Resources';
import ReactPhase3Resources from './pages/skills/ReactPhase3Resources';
import ReactPhase4Resources from './pages/skills/ReactPhase4Resources';
import ReactPhase5Resources from './pages/skills/ReactPhase5Resources';
import ReactPhase6Resources from './pages/skills/ReactPhase6Resources';
import ReactPhase7Resources from './pages/skills/ReactPhase7Resources';
import ReactPhase8Resources from './pages/skills/ReactPhase8Resources';
import ReactPhase9Resources from './pages/skills/ReactPhase9Resources';
import ReactPhase10Resources from './pages/skills/ReactPhase10Resources';
import ReactPhase11Resources from './pages/skills/ReactPhase11Resources';
import ReactPhase12Resources from './pages/skills/ReactPhase12Resources';
import ReactPhase13Resources from './pages/skills/ReactPhase13Resources';
import ReactPhase14Resources from './pages/skills/ReactPhase14Resources';
import ReactPhase15Resources from './pages/skills/ReactPhase15Resources';
import ReactPhase16Resources from './pages/skills/ReactPhase16Resources';
import ReactPhase17Resources from './pages/skills/ReactPhase17Resources';
import ReactPhase18Resources from './pages/skills/ReactPhase18Resources';

// SQL Skill Roadmap Resources
import SQLPhase1Resources from './pages/skills/SQLPhase1Resources';
import SQLPhase2Resources from './pages/skills/SQLPhase2Resources';
import SQLPhase3Resources from './pages/skills/SQLPhase3Resources';
import SQLPhase4Resources from './pages/skills/SQLPhase4Resources';
import SQLPhase5Resources from './pages/skills/SQLPhase5Resources';
import SQLPhase6Resources from './pages/skills/SQLPhase6Resources';
import SQLPhase7Resources from './pages/skills/SQLPhase7Resources';
import SQLPhase8Resources from './pages/skills/SQLPhase8Resources';
import SQLPhase9Resources from './pages/skills/SQLPhase9Resources';
import SQLPhase10Resources from './pages/skills/SQLPhase10Resources';
import SQLPhase11Resources from './pages/skills/SQLPhase11Resources';
import SQLPhase12Resources from './pages/skills/SQLPhase12Resources';
import SQLPhase13Resources from './pages/skills/SQLPhase13Resources';
import SQLPhase14Resources from './pages/skills/SQLPhase14Resources';
import SQLPhase15Resources from './pages/skills/SQLPhase15Resources';
import SQLPhase16Resources from './pages/skills/SQLPhase16Resources';
import SQLPhase17Resources from './pages/skills/SQLPhase17Resources';

// Docker Skill Roadmap Resources
import DockerPhase1Resources from './pages/skills/DockerPhase1Resources';
import DockerPhase2Resources from './pages/skills/DockerPhase2Resources';
import DockerPhase3Resources from './pages/skills/DockerPhase3Resources';
import DockerPhase4Resources from './pages/skills/DockerPhase4Resources';
import DockerPhase5Resources from './pages/skills/DockerPhase5Resources';
import DockerPhase6Resources from './pages/skills/DockerPhase6Resources';
import DockerPhase7Resources from './pages/skills/DockerPhase7Resources';
import DockerPhase8Resources from './pages/skills/DockerPhase8Resources';
import DockerPhase9Resources from './pages/skills/DockerPhase9Resources';
import DockerPhase10Resources from './pages/skills/DockerPhase10Resources';
import DockerPhase11Resources from './pages/skills/DockerPhase11Resources';
import DockerPhase12Resources from './pages/skills/DockerPhase12Resources';
import DockerPhase13Resources from './pages/skills/DockerPhase13Resources';
import DockerPhase14Resources from './pages/skills/DockerPhase14Resources';
import DockerPhase15Resources from './pages/skills/DockerPhase15Resources';
import DockerPhase16Resources from './pages/skills/DockerPhase16Resources';

// C++ Skill Roadmap Resources
import CPlusPlusPhase1Resources from './pages/skills/CPlusPlusPhase1Resources';
import CPlusPlusPhase2Resources from './pages/skills/CPlusPlusPhase2Resources';
import CPlusPlusPhase3Resources from './pages/skills/CPlusPlusPhase3Resources';
import CPlusPlusPhase4Resources from './pages/skills/CPlusPlusPhase4Resources';
import CPlusPlusPhase5Resources from './pages/skills/CPlusPlusPhase5Resources';
import CPlusPlusPhase6Resources from './pages/skills/CPlusPlusPhase6Resources';
import CPlusPlusPhase7Resources from './pages/skills/CPlusPlusPhase7Resources';
import CPlusPlusPhase8Resources from './pages/skills/CPlusPlusPhase8Resources';
import CPlusPlusPhase9Resources from './pages/skills/CPlusPlusPhase9Resources';
import CPlusPlusPhase10Resources from './pages/skills/CPlusPlusPhase10Resources';
import CPlusPlusPhase11Resources from './pages/skills/CPlusPlusPhase11Resources';
import CPlusPlusPhase12Resources from './pages/skills/CPlusPlusPhase12Resources';
import CPlusPlusPhase13Resources from './pages/skills/CPLusPlusPhase13Resources';
import CPlusPlusPhase14Resources from './pages/skills/CPlusPlusPhase14Resources';
import CPlusPlusPhase15Resources from './pages/skills/CPlusPlusPhase15Resources';
import CPlusPlusPhase16Resources from './pages/skills/CPlusPlusPhase16Resources';
import CPlusPlusPhase17Resources from './pages/skills/CPlusPlusPhase17Resources';
import CPlusPlusPhase18Resources from './pages/skills/CPlusPlusPhase18Resources';
import CPlusPlusPhase19Resources from './pages/skills/CPlusPlusPhase19Resources';

// Java Skill Roadmap Resources
import JavaTopic1Resources from './pages/skills/JavaTopic1Resources';
import JavaTopic2Resources from './pages/skills/JavaTopic2Resources';
import JavaTopic3Resources from './pages/skills/JavaTopic3Resources';
import JavaTopic4Resources from './pages/skills/JavaTopic4Resources';
import JavaTopic5Resources from './pages/skills/JavaTopic5Resources';
import JavaTopic6Resources from './pages/skills/JavaTopic6Resources';
import JavaTopic7Resources from './pages/skills/JavaTopic7Resources';
import JavaTopic8Resources from './pages/skills/JavaTopic8Resources';
import JavaTopic9Resources from './pages/skills/JavaTopic9Resources';
import JavaTopic10Resources from './pages/skills/JavaTopic10Resources';
import JavaTopic11Resources from './pages/skills/JavaTopic11Resources';
import JavaTopic12Resources from './pages/skills/JavaTopic12Resources';
import JavaTopic13Resources from './pages/skills/JavaTopic13Resources';
import JavaTopic14Resources from './pages/skills/JavaTopic14Resources';
import JavaTopic15Resources from './pages/skills/JavaTopic15Resources';
import JavaTopic16Resources from './pages/skills/JavaTopic16Resources';
import JavaTopic17Resources from './pages/skills/JavaTopic17Resources';
import JavaTopic18Resources from './pages/skills/JavaTopic18Resources';
import JavaTopic19Resources from './pages/skills/JavaTopic19Resources';
import JavaTopic20Resources from './pages/skills/JavaTopic20Resources';
import JavaTopic21Resources from './pages/skills/JavaTopic21Resources';
import JavaTopic22Resources from './pages/skills/JavaTopic22Resources';

import AWSPhase1Resources from './pages/skills/AWSPhase1Resources';
import AWSPhase2Resources from './pages/skills/AWSPhase2Resources';
import AWSPhase3Resources from './pages/skills/AWSPhase3Resources';
import AWSPhase4Resources from './pages/skills/AWSPhase4Resources';
import AWSPhase5Resources from './pages/skills/AWSPhase5Resources';
import AWSPhase6Resources from './pages/skills/AWSPhase6Resources';
import AWSPhase7Resources from './pages/skills/AWSPhase7Resources';
import AWSPhase8Resources from './pages/skills/AWSPhase8Resources';

import CPhase1Resources from './pages/skills/CPhase1Resources';
import CPhase2Resources from './pages/skills/CPhase2Resources';
import CPhase3Resources from './pages/skills/CPhase3Resources';
import CPhase4Resources from './pages/skills/CPhase4Resources';
import CPhase5Resources from './pages/skills/CPhase5Resources';
import CPhase6Resources from './pages/skills/CPhase6Resources';
import CPhase7Resources from './pages/skills/CPhase7Resources';
import CPhase8Resources from './pages/skills/CPhase8Resources';
import CPhase9Resources from './pages/skills/CPhase9Resources';
import CPhase10Resources from './pages/skills/CPhase10Resources';
import CPhase11Resources from './pages/skills/CPhase11Resources';
import CPhase12Resources from './pages/skills/CPhase12Resources';
import CPhase13Resources from './pages/skills/CPhase13Resources';
import CPhase14Resources from './pages/skills/CPhase14Resources';
import CPhase15Resources from './pages/skills/CPhase15Resources';
import CPhase16Resources from './pages/skills/CPhase16Resources';
import CPhase17Resources from './pages/skills/CPhase17Resources';

import GoPhase1Resources from './pages/skills/GoPhase1Resources';
import GoPhase2Resources from './pages/skills/GoPhase2Resources';
import GoPhase3Resources from './pages/skills/GoPhase3Resources';
import GoPhase4Resources from './pages/skills/GoPhase4Resources';
import GoPhase5Resources from './pages/skills/GoPhase5Resources';
import GoPhase6Resources from './pages/skills/GoPhase6Resources';
import GoPhase7Resources from './pages/skills/GoPhase7Resources';
import GoPhase8Resources from './pages/skills/GoPhase8Resources';
import GoPhase9Resources from './pages/skills/GoPhase9Resources';
import GoPhase10Resources from './pages/skills/GoPhase10Resources';

import BashPhase1Resources from './pages/skills/BashPhase1Resources';
import BashPhase2Resources from './pages/skills/BashPhase2Resources';
import BashPhase3Resources from './pages/skills/BashPhase3Resources';
import BashPhase4Resources from './pages/skills/BashPhase4Resources';
import BashPhase5Resources from './pages/skills/BashPhase5Resources';
import BashPhase6Resources from './pages/skills/BashPhase6Resources';
import BashPhase7Resources from './pages/skills/BashPhase7Resources';
import BashPhase8Resources from './pages/skills/BashPhase8Resources';
import BashPhase9Resources from './pages/skills/BashPhase9Resources';
import BashPhase10Resources from './pages/skills/BashPhase10Resources';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* --- Core Pages --- */}
            <Route path="/" element={<Home />} />
            <Route path="/roadmaps" element={<Roadmap />} />
            <Route path="/skill-roadmap" element={<SkillRoadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/languages" element={<LearnGlobalLanguages />} />

            {/* --- Main Job-Based Roadmap Routes --- */}
            <Route path="/data-scientist" element={<DataScientistRoadmap />} />
            <Route path="/ai-engineer" element={<AIEngineerRoadmap />} />
            <Route path="/cloud-architect" element={<CloudArchitectRoadmap />} />
            <Route path="/cybersecurity" element={<CybersecurityRoadmap />} />
            <Route path="/game-developer" element={<GameDeveloperRoadmap />} />
            <Route path="/ml-engineer" element={<MLEngineerRoadmap />} />
            <Route path="/mobile-ui-designer" element={<MobileUIDesignerRoadmap />} />
            
            {/* --- Main Skill-Based Roadmap Routes --- */}
            <Route path="/skills/python" element={<PythonRoadmap />} />
            <Route path="/skills/javascript" element={<JavaScriptRoadmap />} />
            <Route path="/skills/react" element={<ReactRoadmap />} />
            <Route path="/skills/sql" element={<SQLRoadmap />} />
            <Route path="/skills/docker" element={<DockerRoadmap />} />
            <Route path="/skills/cplusplus" element={<CPlusPlusRoadmap />} />
            <Route path="/skills/java" element={<JavaRoadmap />} />
            <Route path="/skills/aws" element={<AWSRoadmap />} />
            <Route path="/skills/c" element={<CRoadmap />} />
            <Route path="/skills/golang" element={<GolangRoadmap />} />
            <Route path="/skills/bash" element={<BashRoadmap />} />



            {/* --- All Resource Page Routes --- */}
            
            <Route path="/data-scientist/phase-1-resources" element={<Phase1Resources />} />
            <Route path="/data-scientist/phase-2-resources" element={<Phase2Resources />} />
            <Route path="/data-scientist/phase-3-resources" element={<Phase3Resources />} />
            <Route path="/data-scientist/phase-4-resources" element={<Phase4Resources />} />
            <Route path="/data-scientist/phase-5-resources" element={<Phase5Resources />} />
            <Route path="/data-scientist/phase-6-resources" element={<Phase6Resources />} />
            <Route path="/data-scientist/phase-7-resources" element={<Phase7Resources />} />
            <Route path="/data-scientist/phase-8-resources" element={<Phase8Resources />} />
            <Route path="/data-scientist/phase-9-resources" element={<Phase9Resources />} />
            <Route path="/data-scientist/phase-10-resources" element={<Phase10Resources />} />
            <Route path="/data-scientist/phase-11-resources" element={<Phase11Resources />} />
            <Route path="/data-scientist/phase-12-resources" element={<Phase12Resources />} />
            <Route path="/data-scientist/phase-13-resources" element={<Phase13Resources />} />
            <Route path="/data-scientist/phase-14-resources" element={<Phase14Resources />} />
            <Route path="/data-scientist/phase-15-resources" element={<Phase15Resources />} />

            <Route path="/ai-engineer/stage-1-resources" element={<AIPhase1Resources />} />
            <Route path="/ai-engineer/stage-2-resources" element={<AIPhase2Resources />} />
            <Route path="/ai-engineer/stage-3-resources" element={<AIPhase3Resources />} />
            <Route path="/ai-engineer/stage-4-resources" element={<AIPhase4Resources />} />
            <Route path="/ai-engineer/stage-5-resources" element={<AIPhase5Resources />} />
            <Route path="/ai-engineer/stage-6-resources" element={<AIPhase6Resources />} />
            <Route path="/ai-engineer/stage-7-resources" element={<AIPhase7Resources />} />
            <Route path="/ai-engineer/stage-8-resources" element={<AIPhase8Resources />} />
            <Route path="/ai-engineer/stage-9-resources" element={<AIPhase9Resources />} />
            <Route path="/ai-engineer/stage-10-resources" element={<AIPhase10Resources />} />
            <Route path="/ai-engineer/stage-11-resources" element={<AIPhase11Resources />} />
            <Route path="/ai-engineer/stage-12-resources" element={<AIPhase12Resources />} />
            <Route path="/ai-engineer/stage-13-resources" element={<AIPhase13Resources />} />
            <Route path="/ai-engineer/stage-14-resources" element={<AIPhase14Resources />} />
            <Route path="/ai-engineer/stage-15-resources" element={<AIPhase15Resources />} />
            <Route path="/ai-engineer/stage-16-resources" element={<AIPhase16Resources />} />
            
            <Route path="/cloud-architect/stage-1-resources" element={<CloudPhase1Resources />} />
            <Route path="/cloud-architect/stage-2-resources" element={<CloudPhase2Resources />} />
            <Route path="/cloud-architect/stage-3-resources" element={<CloudPhase3Resources />} />
            <Route path="/cloud-architect/stage-4-resources" element={<CloudPhase4Resources />} />
            <Route path="/cloud-architect/stage-5-resources" element={<CloudPhase5Resources />} />
            <Route path="/cloud-architect/stage-6-resources" element={<CloudPhase6Resources />} />
            <Route path="/cloud-architect/stage-7-resources" element={<CloudPhase7Resources />} />
            <Route path="/cloud-architect/stage-8-resources" element={<CloudPhase8Resources />} />
            <Route path="/cloud-architect/stage-9-resources" element={<CloudPhase9Resources />} />
            <Route path="/cloud-architect/stage-10-resources" element={<CloudPhase10Resources />} />
            <Route path="/cloud-architect/stage-11-resources" element={<CloudPhase11Resources />} />
            <Route path="/cloud-architect/stage-12-resources" element={<CloudPhase12Resources />} />
            <Route path="/cloud-architect/stage-13-resources" element={<CloudPhase13Resources />} />

            <Route path="/cybersecurity/stage-1-resources" element={<CyberPhase1Resources />} />
            <Route path="/cybersecurity/stage-2-resources" element={<CyberPhase2Resources />} />
            <Route path="/cybersecurity/stage-3-resources" element={<CyberPhase3Resources />} />
            <Route path="/cybersecurity/stage-4-resources" element={<CyberPhase4Resources />} />
            <Route path="/cybersecurity/stage-5-resources" element={<CyberPhase5Resources />} />
            <Route path="/cybersecurity/stage-6-resources" element={<CyberPhase6Resources />} />
            <Route path="/cybersecurity/stage-7-resources" element={<CyberPhase7Resources />} />
            <Route path="/cybersecurity/stage-8-resources" element={<CyberPhase8Resources />} />
            <Route path="/cybersecurity/stage-9-resources" element={<CyberPhase9Resources />} />
            <Route path="/cybersecurity/stage-10-resources" element={<CyberPhase10Resources />} />
            <Route path="/cybersecurity/stage-11-resources" element={<CyberPhase11Resources />} />
            <Route path="/cybersecurity/stage-12-resources" element={<CyberPhase12Resources />} />
            <Route path="/cybersecurity/stage-13-resources" element={<CyberPhase13Resources />} />
            <Route path="/cybersecurity/stage-14-resources" element={<CyberPhase14Resources />} />

            <Route path="/game-developer/stage-1-resources" element={<GamePhase1Resources />} />
            <Route path="/game-developer/stage-2-resources" element={<GamePhase2Resources />} />
            <Route path="/game-developer/stage-3-resources" element={<GamePhase3Resources />} />
            <Route path="/game-developer/stage-4-resources" element={<GamePhase4Resources />} />
            <Route path="/game-developer/stage-5-resources" element={<GamePhase5Resources />} />
            <Route path="/game-developer/stage-6-resources" element={<GamePhase6Resources />} />
            <Route path="/game-developer/stage-7-resources" element={<GamePhase7Resources />} />
            <Route path="/game-developer/stage-8-resources" element={<GamePhase8Resources />} />
            <Route path="/game-developer/stage-9-resources" element={<GamePhase9Resources />} />
            <Route path="/game-developer/stage-10-resources" element={<GamePhase10Resources />} />
            <Route path="/game-developer/stage-11-resources" element={<GamePhase11Resources />} />
            <Route path="/game-developer/stage-12-resources" element={<GamePhase12Resources />} />
            <Route path="/game-developer/stage-13-resources" element={<GamePhase13Resources />} />
            <Route path="/game-developer/stage-14-resources" element={<GamePhase14Resources />} />
            
            <Route path="/ml-engineer/stage-1-resources" element={<MLPhase1Resources />} />
            <Route path="/ml-engineer/stage-2-resources" element={<MLPhase2Resources />} />
            <Route path="/ml-engineer/stage-3-resources" element={<MLPhase3Resources />} />
            <Route path="/ml-engineer/stage-4-resources" element={<MLPhase4Resources />} />
            <Route path="/ml-engineer/stage-5-resources" element={<MLPhase5Resources />} />
            <Route path="/ml-engineer/stage-6-resources" element={<MLPhase6Resources />} />
            <Route path="/ml-engineer/stage-7-resources" element={<MLPhase7Resources />} />
            <Route path="/ml-engineer/stage-8-resources" element={<MLPhase8Resources />} />
            <Route path="/ml-engineer/stage-9-resources" element={<MLPhase9Resources />} />
            <Route path="/ml-engineer/stage-10-resources" element={<MLPhase10Resources />} />
            <Route path="/ml-engineer/stage-11-resources" element={<MLPhase11Resources />} />
            
            <Route path="/skills/python/stage-1" element={<PythonStage1Resources />} />
            <Route path="/skills/python/stage-2" element={<PythonStage2Resources />} />
            <Route path="/skills/python/stage-3" element={<PythonStage3Resources />} />
            <Route path="/skills/python/stage-4" element={<PythonStage4Resources />} />
            <Route path="/skills/python/stage-5" element={<PythonStage5Resources />} />
            <Route path="/skills/python/stage-6" element={<PythonStage6Resources />} />
            <Route path="/skills/python/stage-7" element={<PythonStage7Resources />} />
            <Route path="/skills/python/stage-8" element={<PythonStage8Resources />} />
            <Route path="/skills/python/stage-9" element={<PythonStage9Resources />} />
            <Route path="/skills/python/stage-10" element={<PythonStage10Resources />} />
            <Route path="/skills/python/stage-11" element={<PythonStage11Resources />} />
            
            <Route path="/skills/javascript/stage-1" element={<JSPhase1Resources />} />
            <Route path="/skills/javascript/stage-2" element={<JSPhase2Resources />} />
            <Route path="/skills/javascript/stage-3" element={<JSPhase3Resources />} />
            <Route path="/skills/javascript/stage-4" element={<JSPhase4Resources />} />
            <Route path="/skills/javascript/stage-5" element={<JSPhase5Resources />} />
            <Route path="/skills/javascript/stage-6" element={<JSPhase6Resources />} />
            <Route path="/skills/javascript/stage-7" element={<JSPhase7Resources />} />
            <Route path="/skills/javascript/stage-8" element={<JSPhase8Resources />} />
            <Route path="/skills/javascript/stage-9" element={<JSPhase9Resources />} />
            <Route path="/skills/javascript/stage-10" element={<JSPhase10Resources />} />
            <Route path="/skills/javascript/stage-11" element={<JSPhase11Resources />} />
            <Route path="/skills/javascript/stage-12" element={<JSPhase12Resources />} />
            <Route path="/skills/javascript/stage-13" element={<JSPhase13Resources />} />
            <Route path="/skills/javascript/stage-14" element={<JSPhase14Resources />} />
            <Route path="/skills/javascript/stage-15" element={<JSPhase15Resources />} />
            <Route path="/skills/javascript/stage-16" element={<JSPhase16Resources />} />

            <Route path="/skills/react/stage-1" element={<ReactPhase1Resources />} />
            <Route path="/skills/react/stage-2" element={<ReactPhase2Resources />} />
            <Route path="/skills/react/stage-3" element={<ReactPhase3Resources />} />
            <Route path="/skills/react/stage-4" element={<ReactPhase4Resources />} />
            <Route path="/skills/react/stage-5" element={<ReactPhase5Resources />} />
            <Route path="/skills/react/stage-6" element={<ReactPhase6Resources />} />
            <Route path="/skills/react/stage-7" element={<ReactPhase7Resources />} />
            <Route path="/skills/react/stage-8" element={<ReactPhase8Resources />} />
            <Route path="/skills/react/stage-9" element={<ReactPhase9Resources />} />
            <Route path="/skills/react/stage-10" element={<ReactPhase10Resources />} />
            <Route path="/skills/react/stage-11" element={<ReactPhase11Resources />} />
            <Route path="/skills/react/stage-12" element={<ReactPhase12Resources />} />
            <Route path="/skills/react/stage-13" element={<ReactPhase13Resources />} />
            <Route path="/skills/react/stage-14" element={<ReactPhase14Resources />} />
            <Route path="/skills/react/stage-15" element={<ReactPhase15Resources />} />
            <Route path="/skills/react/stage-16" element={<ReactPhase16Resources />} />
            <Route path="/skills/react/stage-17" element={<ReactPhase17Resources />} />
            <Route path="/skills/react/stage-18" element={<ReactPhase18Resources />} />

            <Route path="/skills/sql/stage-1" element={<SQLPhase1Resources />} />
            <Route path="/skills/sql/stage-2" element={<SQLPhase2Resources />} />
            <Route path="/skills/sql/stage-3" element={<SQLPhase3Resources />} />
            <Route path="/skills/sql/stage-4" element={<SQLPhase4Resources />} />
            <Route path="/skills/sql/stage-5" element={<SQLPhase5Resources />} />
            <Route path="/skills/sql/stage-6" element={<SQLPhase6Resources />} />
            <Route path="/skills/sql/stage-7" element={<SQLPhase7Resources />} />
            <Route path="/skills/sql/stage-8" element={<SQLPhase8Resources />} />
            <Route path="/skills/sql/stage-9" element={<SQLPhase9Resources />} />
            <Route path="/skills/sql/stage-10" element={<SQLPhase10Resources />} />
            <Route path="/skills/sql/stage-11" element={<SQLPhase11Resources />} />
            <Route path="/skills/sql/stage-12" element={<SQLPhase12Resources />} />
            <Route path="/skills/sql/stage-13" element={<SQLPhase13Resources />} />
            <Route path="/skills/sql/stage-14" element={<SQLPhase14Resources />} />
            <Route path="/skills/sql/stage-15" element={<SQLPhase15Resources />} />
            <Route path="/skills/sql/stage-16" element={<SQLPhase16Resources />} />
            <Route path="/skills/sql/stage-17" element={<SQLPhase17Resources />} />

            <Route path="/skills/docker/stage-1" element={<DockerPhase1Resources />} />
            <Route path="/skills/docker/stage-2" element={<DockerPhase2Resources />} />
            <Route path="/skills/docker/stage-3" element={<DockerPhase3Resources />} />
            <Route path="/skills/docker/stage-4" element={<DockerPhase4Resources />} />
            <Route path="/skills/docker/stage-5" element={<DockerPhase5Resources />} />
            <Route path="/skills/docker/stage-6" element={<DockerPhase6Resources />} />
            <Route path="/skills/docker/stage-7" element={<DockerPhase7Resources />} />
            <Route path="/skills/docker/stage-8" element={<DockerPhase8Resources />} />
            <Route path="/skills/docker/stage-9" element={<DockerPhase9Resources />} />
            <Route path="/skills/docker/stage-10" element={<DockerPhase10Resources />} />
            <Route path="/skills/docker/stage-11" element={<DockerPhase11Resources />} />
            <Route path="/skills/docker/stage-12" element={<DockerPhase12Resources />} />
            <Route path="/skills/docker/stage-13" element={<DockerPhase13Resources />} />
            <Route path="/skills/docker/stage-14" element={<DockerPhase14Resources />} />
            <Route path="/skills/docker/stage-15" element={<DockerPhase15Resources />} />
            <Route path="/skills/docker/stage-16" element={<DockerPhase16Resources />} />
            
            <Route path="/skills/cplusplus/stage-1" element={<CPlusPlusPhase1Resources />} />
            <Route path="/skills/cplusplus/stage-2" element={<CPlusPlusPhase2Resources />} />
            <Route path="/skills/cplusplus/stage-3" element={<CPlusPlusPhase3Resources />} />
            <Route path="/skills/cplusplus/stage-4" element={<CPlusPlusPhase4Resources />} />
            <Route path="/skills/cplusplus/stage-5" element={<CPlusPlusPhase5Resources />} />
            <Route path="/skills/cplusplus/stage-6" element={<CPlusPlusPhase6Resources />} />
            <Route path="/skills/cplusplus/stage-7" element={<CPlusPlusPhase7Resources />} />
            <Route path="/skills/cplusplus/stage-8" element={<CPlusPlusPhase8Resources />} />
            <Route path="/skills/cplusplus/stage-9" element={<CPlusPlusPhase9Resources />} />
            <Route path="/skills/cplusplus/stage-10" element={<CPlusPlusPhase10Resources />} />
            <Route path="/skills/cplusplus/stage-11" element={<CPlusPlusPhase11Resources />} />
            <Route path="/skills/cplusplus/stage-12" element={<CPlusPlusPhase12Resources />} />
            <Route path="/skills/cplusplus/stage-13" element={<CPlusPlusPhase13Resources />} />
            <Route path="/skills/cplusplus/stage-14" element={<CPlusPlusPhase14Resources />} />
            <Route path="/skills/cplusplus/stage-15" element={<CPlusPlusPhase15Resources />} />
            <Route path="/skills/cplusplus/stage-16" element={<CPlusPlusPhase16Resources />} />
            <Route path="/skills/cplusplus/stage-17" element={<CPlusPlusPhase17Resources />} />
            <Route path="/skills/cplusplus/stage-18" element={<CPlusPlusPhase18Resources />} />
            <Route path="/skills/cplusplus/stage-19" element={<CPlusPlusPhase19Resources />} />

            <Route path="/skills/java/topic-1" element={<JavaTopic1Resources />} />
            <Route path="/skills/java/topic-2" element={<JavaTopic2Resources />} />
            <Route path="/skills/java/topic-3" element={<JavaTopic3Resources />} />
            <Route path="/skills/java/topic-4" element={<JavaTopic4Resources />} />
            <Route path="/skills/java/topic-5" element={<JavaTopic5Resources />} />
            <Route path="/skills/java/topic-6" element={<JavaTopic6Resources />} />
            <Route path="/skills/java/topic-7" element={<JavaTopic7Resources />} />
            <Route path="/skills/java/topic-8" element={<JavaTopic8Resources />} />
            <Route path="/skills/java/topic-9" element={<JavaTopic9Resources />} />
            <Route path="/skills/java/topic-10" element={<JavaTopic10Resources />} />
            <Route path="/skills/java/topic-11" element={<JavaTopic11Resources />} />
            <Route path="/skills/java/topic-12" element={<JavaTopic12Resources />} />
            <Route path="/skills/java/topic-13" element={<JavaTopic13Resources />} />
            <Route path="/skills/java/topic-14" element={<JavaTopic14Resources />} />
            <Route path="/skills/java/topic-15" element={<JavaTopic15Resources />} />
            <Route path="/skills/java/topic-16" element={<JavaTopic16Resources />} />
            <Route path="/skills/java/topic-17" element={<JavaTopic17Resources />} />
            <Route path="/skills/java/topic-18" element={<JavaTopic18Resources />} />
            <Route path="/skills/java/topic-19" element={<JavaTopic19Resources />} />
            <Route path="/skills/java/topic-20" element={<JavaTopic20Resources />} />
            <Route path="/skills/java/topic-21" element={<JavaTopic21Resources />} />
            <Route path="/skills/java/topic-22" element={<JavaTopic22Resources />} />

            <Route path="/skills/aws/phase-1" element={<AWSPhase1Resources />} />
            <Route path="/skills/aws/phase-2" element={<AWSPhase2Resources />} />
            <Route path="/skills/aws/phase-3" element={<AWSPhase3Resources />} />
            <Route path="/skills/aws/phase-4" element={<AWSPhase4Resources />} />
            <Route path="/skills/aws/phase-5" element={<AWSPhase5Resources />} />
            <Route path="/skills/aws/phase-6" element={<AWSPhase6Resources />} />
            <Route path="/skills/aws/phase-7" element={<AWSPhase7Resources />} />
            <Route path="/skills/aws/phase-8" element={<AWSPhase8Resources />} />

            <Route path="/skills/c/stage-1" element={<CPhase1Resources />} />
            <Route path="/skills/c/stage-2" element={<CPhase2Resources />} />
            <Route path="/skills/c/stage-3" element={<CPhase3Resources />} />
            <Route path="/skills/c/stage-4" element={<CPhase4Resources />} />
            <Route path="/skills/c/stage-5" element={<CPhase5Resources />} />
            <Route path="/skills/c/stage-6" element={<CPhase6Resources />} />
            <Route path="/skills/c/stage-7" element={<CPhase7Resources />} />
            <Route path="/skills/c/stage-8" element={<CPhase8Resources />} />
            <Route path="/skills/c/stage-9" element={<CPhase9Resources />} />
            <Route path="/skills/c/stage-10" element={<CPhase10Resources />} />
            <Route path="/skills/c/stage-11" element={<CPhase11Resources />} />
            <Route path="/skills/c/stage-12" element={<CPhase12Resources />} />
            <Route path="/skills/c/stage-13" element={<CPhase13Resources />} />
            <Route path="/skills/c/stage-14" element={<CPhase14Resources />} />
            <Route path="/skills/c/stage-15" element={<CPhase15Resources />} />
            <Route path="/skills/c/stage-16" element={<CPhase16Resources />} />
            <Route path="/skills/c/stage-17" element={<CPhase17Resources />} /> 

            <Route path="/skills/golang/stage-1" element={<GoPhase1Resources />} />
            <Route path="/skills/golang/stage-2" element={<GoPhase2Resources />} />
            <Route path="/skills/golang/stage-3" element={<GoPhase3Resources />} />
            <Route path="/skills/golang/stage-4" element={<GoPhase4Resources />} />
            <Route path="/skills/golang/stage-5" element={<GoPhase5Resources />} />
            <Route path="/skills/golang/stage-6" element={<GoPhase6Resources />} />
            <Route path="/skills/golang/stage-7" element={<GoPhase7Resources />} />
            <Route path="/skills/golang/stage-8" element={<GoPhase8Resources />} />
            <Route path="/skills/golang/stage-9" element={<GoPhase9Resources />} />
            <Route path="/skills/golang/stage-10" element={<GoPhase10Resources />} />

            <Route path="/skills/bash/stage-1" element={<BashPhase1Resources />} />
            <Route path="/skills/bash/stage-2" element={<BashPhase2Resources />} />
            <Route path="/skills/bash/stage-3" element={<BashPhase3Resources />} />
            <Route path="/skills/bash/stage-4" element={<BashPhase4Resources />} />
            <Route path="/skills/bash/stage-5" element={<BashPhase5Resources />} />
            <Route path="/skills/bash/stage-6" element={<BashPhase6Resources />} />
            <Route path="/skills/bash/stage-7" element={<BashPhase7Resources />} />
            <Route path="/skills/bash/stage-8" element={<BashPhase8Resources />} />
            <Route path="/skills/bash/stage-9" element={<BashPhase9Resources />} />
            <Route path="/skills/bash/stage-10" element={<BashPhase10Resources />} />

            <Route path="/mobile-ui-designer/stage-1" element={<UIDesignerPhase1Resources />} />
            <Route path="/mobile-ui-designer/stage-2" element={<UIDesignerPhase2Resources />} />
            <Route path="/mobile-ui-designer/stage-3" element={<UIDesignerPhase3Resources />} />
            <Route path="/mobile-ui-designer/stage-4" element={<UIDesignerPhase4Resources />} />
            <Route path="/mobile-ui-designer/stage-5" element={<UIDesignerPhase5Resources />} />
            <Route path="/mobile-ui-designer/stage-6" element={<UIDesignerPhase6Resources />} />
            <Route path="/mobile-ui-designer/stage-7" element={<UIDesignerPhase7Resources />} />
            <Route path="/mobile-ui-designer/stage-8" element={<UIDesignerPhase8Resources />} />

            {/* --- Fallback Route --- */}
            <Route path="*" element={
              <div style={{ padding: '5rem', textAlign: 'center', color: '#fff' }}>
                <h1>404 - Page Not Found</h1>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

