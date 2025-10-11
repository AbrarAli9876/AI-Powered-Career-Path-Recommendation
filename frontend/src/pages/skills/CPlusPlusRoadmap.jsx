// src/pages/skills/CPlusPlusRoadmap.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillPage.css';

const cppStages = [
    { id: 1, title: 'Stage 1: Introduction to C++ & Development Setup', objective: 'Understand the philosophy of C++, the compilation process, and set up a professional development environment.' },
    { id: 2, title: 'Stage 2: Basics & Core Syntax', objective: 'Learn the fundamental building blocks of C++, including variables, data types, operators, and basic I/O.' },
    { id: 3, title: 'Stage 3: Control Structures', objective: 'Learn to dictate the flow of execution in your program with conditional logic (if, switch) and loops (for, while).' },
    { id: 4, title: 'Stage 4: Functions', objective: 'Master the fundamental unit of code organization, including parameters, return values, and pass-by-reference vs. pass-by-value.' },
    { id: 5, title: 'Stage 5: Arrays & Strings', objective: 'Learn to use both low-level C-style arrays/strings and the modern, safer std::vector and std::string.' },
    { id: 6, title: 'Stage 6: Pointers & References', objective: 'Gain a deep understanding of C++\'s most powerful features for direct memory control.' },
    { id: 7, title: 'Stage 7: Dynamic Memory Management', objective: 'Learn to manually manage memory with new/delete and master modern, safer alternatives with smart pointers (RAII).' },
    { id: 8, title: 'Stage 8: Object-Oriented Programming (OOP)', objective: 'Learn the fundamentals of OOP by defining classes with constructors, destructors, and member functions.' },
    { id: 9, title: 'Stage 9: Advanced OOP & Design Principles', objective: 'Master the four pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism) and the SOLID principles.' },
    { id: 10, title: 'Stage 10: Standard Template Library (STL)', objective: 'Master the cornerstone of modern C++, including containers (vector, map), iterators, and algorithms (sort, find).' },
    { id: 11, title: 'Stage 11: Error Handling & Debugging', objective: 'Learn to write robust code with C++ exception handling and use professional tools like GDB and Valgrind to find bugs.' },
    { id: 12, title: 'Stage 12: File Handling', objective: 'Learn to read from and write to files using C++\'s fstream library.' },
    { id: 13, title: 'Stage 13: Modern C++ (C++11 and beyond)', objective: 'Become fluent in the features that revolutionized the language, like auto, lambdas, and move semantics.' },
    { id: 14, title: 'Stage 14: Templates & Generic Programming', objective: 'Learn to write code that is independent of any particular type, the foundation of the STL.' },
    { id: 15, title: 'Stage 15: Data Structures & Algorithms (DSA) in C++', objective: 'Understand how common data structures work internally and be able to implement them from scratch.' },
    { id: 16, title: 'Stage 16: Real-World Applications (Choose Career Path)', objective: 'Begin to specialize in a domain like Game Development, Embedded Systems, or High-Performance Computing.' },
    { id: 17, title: 'Stage 17: Best Practices & Performance Optimization', objective: 'Learn to write code that is not just correct, but also clean, maintainable, and fast.' },
    { id: 18, title: 'Stage 18: Project Ideas (Beginner to Advanced)', objective: 'Synthesize your knowledge by building a portfolio of complete, polished projects.' },
    { id: 19, title: 'Stage 19: Interview Preparation', objective: 'Prepare for technical interviews by practicing DSA problems, C++ language specifics, and system design.' },
];

const CPlusPlusRoadmap = () => {
    const [activeStage, setActiveStage] = useState(null);

    const toggleStage = (stageId) => {
        setActiveStage(activeStage === stageId ? null : stageId);
    };

    return (
        <div className="skill-page-container">
            <header className="skill-page-header">
                <h1>The Complete C++ Roadmap</h1>
                <p>The C++ Journey: From Zero to Employable Professional in High-Performance Applications.</p>
            </header>
            <div className="skill-page-stages">
                {cppStages.map(stage => (
                    <div key={stage.id} className={`stage-card ${activeStage === stage.id ? 'active' : ''}`}>
                        <div className="stage-header" onClick={() => toggleStage(stage.id)}>
                            <h2>{stage.title}</h2>
                            <span className="stage-toggle">+</span>
                        </div>
                        {activeStage === stage.id && (
                            <div className="stage-content">
                                <p>{stage.objective}</p>
                                <Link to={`/skills/cplusplus/stage-${stage.id}`} className="stage-resources-button">
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

export default CPlusPlusRoadmap;
