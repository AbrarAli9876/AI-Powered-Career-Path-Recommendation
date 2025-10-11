// src/pages/skills/DockerRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const dockerStages = [
    { id: 1, title: 'Stage 1: Introduction to Containers & Virtualization', objective: 'Establish the conceptual foundation by understanding the "why" behind Docker and how containerization solves fundamental problems in software development.' },
    { id: 2, title: 'Stage 2: Docker Installation & Setup', objective: 'Install the necessary tools, configure your environment, and run your first container to get immediate, tangible results.' },
    { id: 3, title: 'Stage 3: Core Docker Concepts', objective: 'Master the fundamental CLI commands for managing the lifecycle of containers and images, forming the bedrock of daily interaction with Docker.' },
    { id: 4, title: 'Stage 4: Docker Images & Dockerfiles', objective: 'Transition from a consumer to a creator by learning to write Dockerfiles, the blueprints for building custom, reproducible application environments.' },
    { id: 5, title: 'Stage 5: Managing Data with Docker', objective: 'Address the critical need for data persistence by learning to manage stateful data using Docker Volumes and Bind Mounts.' },
    { id: 6, title: 'Stage 6: Networking in Docker', objective: 'Demystify how containers communicate with each other and the outside world, enabling the creation of multi-service applications.' },
    { id: 7, title: 'Stage 7: Docker Compose', objective: 'Learn to define and run multi-container applications declaratively, transforming complex commands into a single, manageable YAML file.' },
    { id: 8, title: 'Stage 8: Docker Registry & Image Distribution', objective: 'Understand how to store, share, and distribute your container images using registries like Docker Hub and GitHub Container Registry.' },
    { id: 9, title: 'Stage 9: Security & Best Practices', objective: 'Learn fundamental security practices for building and running containers responsibly, including secrets management and vulnerability scanning.' },
    { id: 10, title: 'Stage 10: Docker for Development & CI/CD', objective: 'Streamline local development workflows and automate the build, test, and deployment of your applications with CI/CD pipelines.' },
    { id: 11, title: 'Stage 11: Docker for Deployment', objective: 'Learn to run containers in a production-like environment and get an introduction to orchestration with Docker Swarm.' },
    { id: 12, title: 'Stage 12: Real-World Docker Use Cases', objective: 'Apply your knowledge to containerize common application architectures, from web apps and databases to reverse proxies.' },
    { id: 13, title: 'Stage 13: Performance Optimization', objective: 'Refine Docker images and container runtime configurations for production, focusing on efficiency, speed, and resource management.' },
    { id: 14, title: 'Stage 14: Troubleshooting & Debugging', objective: 'Develop a systematic approach to diagnosing and resolving common Docker errors and issues.' },
    { id: 15, title: 'Stage 15: Real-World Projects', objective: 'Synthesize all acquired knowledge to build and deploy complete, non-trivial projects for a professional portfolio.' },
    { id: 16, title: 'Stage 16: Interview Preparation & Certification', objective: 'Translate your skills into career opportunities by preparing for technical interviews and validating your expertise with the DCA certification.' },
];

const DockerRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete Docker Roadmap</h1>
                <p>From zero to professional, this roadmap provides a structured path to mastering Docker and the world of containerization.</p>
            </header>
            <div className="skill-page-stages">
                {dockerStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/docker/stage-${stage.id}`} className="stage-resources-button">
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

export default DockerRoadmap;
