// src/pages/MockInterview.jsx

import React, { useState } from 'react';
import './MockInterview.css';

const careerRoles = [
  'Data Scientist',
  'AI Engineer',
  'Machine Learning Engineer',
  'Cloud Architect',
  'Cybersecurity',
  'Game Developer',
  'Mobile UI Designer',
  'Full-Stack Developer',
  'Python Developer',
  'JavaScript Developer',
  'React Developer',
  'SQL Developer',
  'Java Developer',
  'C++ Developer',
  'Write your own...'
];

const MockInterview = () => {
  const [selectedRole, setSelectedRole] = useState(careerRoles[0]);
  const [customRole, setCustomRole] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);

  // ✅ Helper function to detect programming roles
  const isProgrammingRole = (role) => {
    const programmingKeywords = [
      'Python', 'JavaScript', 'React', 'Java', 'C++', 'Developer', 'Engineer', 'Full-Stack'
    ];
    return programmingKeywords.some((kw) => role.toLowerCase().includes(kw.toLowerCase()));
  };

  // ✅ Context-aware mapping for each programming role
  const roleContext = {
  // 🐍 Python
  'Python Developer':
    'Focus on Python syntax, functions, OOP, modules, data structures, file handling, list comprehensions, decorators, and problem solving.',

  // 💻 JavaScript / React / Frontend
  'JavaScript Developer':
    'Focus on ES6+, DOM manipulation, async/await, callbacks, promises, closures, prototypes, event loop, and frontend problem solving.',
  'React Developer':
    'Focus on React hooks, state management, components, lifecycle methods, props, rendering logic, and performance optimization.',
  'Frontend Developer':
    'Focus on HTML5, CSS3, JavaScript, accessibility, responsive design, and browser rendering performance.',

  // ☕ Java
  'Java Developer':
    'Focus on OOP concepts, collections framework, exception handling, multithreading, file handling, and data structures.',
  'Spring Boot Developer':
    'Focus on Spring Boot, dependency injection, REST APIs, JPA/Hibernate, and microservices architecture.',

  // 💾 SQL / Database
  'SQL Developer':
    'Focus on writing SQL queries, joins, indexing, normalization, transactions, views, stored procedures, and query optimization.',
  'Database Administrator':
    'Focus on database schema design, indexing, query optimization, backups, replication, and SQL tuning.',

  // ⚙️ C, C++, and C#
  'C Developer':
    'Focus on memory management, pointers, arrays, structs, file I/O, and writing optimized low-level algorithms.',
  'C++ Developer':
    'Focus on OOP, STL, templates, operator overloading, memory handling, pointers, and data structure implementation.',
  'C# Developer':
    'Focus on OOP, .NET framework, async programming, LINQ, collections, exception handling, and Windows application development.',

  // 🐹 Go / Golang
  'Golang Developer':
    'Focus on Go routines, channels, interfaces, concurrency patterns, structs, packages, and REST API development using Go.',

  // 🐚 Shell & Scripting
  'Bash Developer':
    'Focus on writing shell scripts, process management, automation, file operations, and Linux command-line utilities.',
  'PowerShell Developer':
    'Focus on Windows scripting, cmdlets, system administration automation, and task scheduling using PowerShell.',

  // ☁️ Cloud / Infrastructure
  'Cloud Architect':
    'Focus on AWS/GCP/Azure services, networking, infrastructure as code, scalability, and high availability solutions.',
  'DevOps Engineer':
    'Focus on CI/CD pipelines, Docker, Kubernetes, Jenkins, automation scripts, and infrastructure monitoring.',
  'Site Reliability Engineer':
    'Focus on system performance, observability, reliability automation, and incident response.',

  // 🔒 Security
  'Cybersecurity Engineer':
    'Focus on network security, penetration testing, encryption, firewalls, vulnerability scanning, and threat mitigation.',

  // 🎮 Game & Graphics
  'Game Developer':
    'Focus on C++ or C#, game engines (Unity, Unreal), game loops, physics, rendering, and optimization techniques.',
  'Graphics Programmer':
    'Focus on OpenGL, DirectX, shaders, rendering pipelines, and real-time graphics programming.',

  // 📱 Mobile
  'Mobile App Developer':
    'Focus on Android (Kotlin/Java) or iOS (Swift), UI/UX principles, app architecture (MVVM), and API integration.',
  'Flutter Developer':
    'Focus on Dart syntax, widget tree, state management, navigation, and responsive UI design.',

  // 🧠 AI, ML & Data
  'Data Scientist':
    'Focus on data preprocessing, statistics, machine learning models, pandas, NumPy, visualization, and model evaluation.',
  'Machine Learning Engineer':
    'Focus on ML pipelines, TensorFlow/PyTorch, model optimization, deployment, and data engineering.',
  'AI Engineer':
    'Focus on NLP, deep learning, model fine-tuning, embeddings, and AI pipeline implementation.',

  // ⚙️ Systems & Scripting
  'System Administrator':
    'Focus on Linux/Windows server management, automation scripts, user management, and cron/scheduled jobs.',

  // 🧩 Backend
  'Backend Developer':
    'Focus on APIs, databases, authentication, REST/GraphQL, caching, and performance optimization.',
  'Node.js Developer':
    'Focus on event-driven architecture, Express.js, REST APIs, async programming, and database connectivity.',

  // 🌐 Full Stack
  'Full-Stack Developer':
    'Focus on backend logic (Node/Express), frontend (React), API integration, authentication, and database operations.',

  // 🎨 UI/UX & Design
  'Mobile UI Designer':
    'Focus on design systems, Figma, UX research, user flow, wireframing, and responsive design principles.',

  // 🧰 Others (fallbacks)
  'Software Engineer':
    'Focus on general software design principles, problem solving, clean code, algorithms, and debugging skills.',
  'Automation Engineer':
    'Focus on scripting, testing frameworks, automation pipelines, and continuous integration tools.',
  'Embedded Systems Developer':
    'Focus on C/C++, microcontrollers, real-time OS, hardware interfacing, and memory optimization.',
};


  const getTargetRole = () =>
    selectedRole === 'Write your own...' ? customRole : selectedRole;

  const getAIResponse = async (prompt) => {
    setIsLoading(true);
    setError('');

    const apiKey = import.meta.env.VITE_MOCK_INTERVIEW_API_KEY;
    if (!apiKey) {
      setError(
        'Mock Interview API Key is missing. Please add VITE_MOCK_INTERVIEW_API_KEY to your .env file.'
      );
      setIsLoading(false);
      return null;
    }

    // ✅ Use latest stable model
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) throw new Error(`API error: ${response.statusText}`);

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
      return text
        .replace(/(\*\*|__|\*|_)/g, '')
        .replace(/^(okay|alright|let's|sure|theory question|coding question)[^:]*:/i, '')
        .trim();
    } catch (err) {
      setError('Failed to get a response from AI. Please check your API key.');
      console.error(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const startInterview = async () => {
    const finalTargetRole = getTargetRole();
    if (!finalTargetRole.trim()) {
      setError('Please select or enter a job role to start.');
      return;
    }

    setInterviewStarted(true);
    setCurrentQuestion('');
    setFeedback('');
    setUserAnswer('');
    setSessionHistory([]);

    const historyText = 'This is the start of the interview.';
    const programmingMode = isProgrammingRole(finalTargetRole);
    const extraContext = roleContext[finalTargetRole] || '';

    const prompt = programmingMode
      ? `
You are a professional technical interviewer for a "${finalTargetRole}" role.
${extraContext}
Ask one question that could be either:
- A short coding challenge (e.g., "Write a function...", "Predict the output..."), OR
- A theory/concept question.
Rules:
- Output ONLY the question text (no greetings, no formatting).
- Keep it concise and relevant.
Previous chat: ${historyText}
`
      : `
You are a professional interviewer for a "${finalTargetRole}" position.
Ask one technical or behavioral question relevant to this role.
Output ONLY the question.
Previous chat: ${historyText}
`;

    const question = await getAIResponse(prompt);
    if (question) {
      setCurrentQuestion(question);
      setSessionHistory([{ question }]);
    }
  };

  const submitAnswer = async () => {
    const finalTargetRole = getTargetRole();
    const prompt = `
I am a candidate interviewing for a "${finalTargetRole}" role.
The question was: "${currentQuestion}"
My answer: "${userAnswer}"
Provide 2–3 bullet points of constructive, professional feedback on my answer. 
Start directly with "Here's some feedback:" and be specific.
`;
    const aiFeedback = await getAIResponse(prompt);
    if (aiFeedback) setFeedback(aiFeedback);
  };

  const getNextQuestion = async () => {
    setFeedback('');
    setUserAnswer('');
    const finalTargetRole = getTargetRole();
    const historyText = sessionHistory.map((s) => `Q: ${s.question}`).join('\n');
    const programmingMode = isProgrammingRole(finalTargetRole);
    const extraContext = roleContext[finalTargetRole] || '';

    const prompt = programmingMode
      ? `
You are continuing a mock interview for a "${finalTargetRole}" role.
${extraContext}
Ask ONE new question different from before.
Alternate between coding and theory if possible.
Rules:
- Output ONLY the question text (no greetings or headings).
- Keep it concise, clear, and relevant to ${finalTargetRole}.
Previous questions:
${historyText}
`
      : `
You are continuing a mock interview for a "${finalTargetRole}" role.
Ask one new concise question relevant to this field.
Output ONLY the question.
Previous questions:
${historyText}
`;

    const question = await getAIResponse(prompt);
    if (question) {
      setCurrentQuestion(question);
      setSessionHistory((prev) => [...prev, { question }]);
    }
  };

  return (
    <div className="mock-interview-page">
      <header className="mock-interview-header">
        <h1>AI Mock Interview Simulator</h1>
        <p>Practice coding and theory questions with real-time feedback.</p>
      </header>

      {!interviewStarted ? (
        <div className="setup-container">
          <h2>Prepare for Your Interview</h2>
          <div className="form-group">
            <label htmlFor="role-select">Select your target role:</label>
            <select
              id="role-select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {careerRoles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          {selectedRole === 'Write your own...' && (
            <div className="form-group custom-role-input">
              <label htmlFor="custom-role-input">Enter your custom role:</label>
              <input
                type="text"
                id="custom-role-input"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="e.g., DevOps Engineer"
              />
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <button onClick={startInterview} className="start-button" disabled={isLoading}>
            {isLoading ? 'Preparing...' : 'Start Interview'}
          </button>
        </div>
      ) : (
        <div className="interview-container">
          {error && <p className="error-message">{error}</p>}

          {currentQuestion && (
            <div className="question-section">
              <h3>Question for {getTargetRole()}:</h3>
              <p className="question-text">{currentQuestion}</p>

              <div className="answer-section">
                <label htmlFor="user-answer">Your Answer:</label>
                <textarea
                  id="user-answer"
                  rows="8"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                ></textarea>
                <button
                  onClick={submitAnswer}
                  className="submit-answer-btn"
                  disabled={isLoading || !userAnswer}
                >
                  {isLoading ? 'Getting Feedback...' : 'Get Feedback'}
                </button>
              </div>
            </div>
          )}

          {feedback && (
            <div className="feedback-section">
              <h3>AI Feedback:</h3>
              <div className="feedback-content">
                {feedback.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <button onClick={getNextQuestion} className="next-question-btn" disabled={isLoading}>
                {isLoading ? 'Thinking...' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MockInterview;
