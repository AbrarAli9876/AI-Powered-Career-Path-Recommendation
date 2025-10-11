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

    const getTargetRole = () => {
        return selectedRole === 'Write your own...' ? customRole : selectedRole;
    };

    const getAIResponse = async (prompt) => {
        setIsLoading(true);
        setError('');

        // --- UPDATED TO USE THE NEW, SPECIFIC API KEY ---
        const apiKey = import.meta.env.VITE_MOCK_INTERVIEW_API_KEY;
        if (!apiKey) {
            setError('Mock Interview API Key is missing. Please add VITE_MOCK_INTERVIEW_API_KEY to your .env file.');
            setIsLoading(false);
            return null;
        }
        // ----------------------------------------------------

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const result = await response.json();
            return result.candidates?.[0]?.content?.parts?.[0]?.text;

        } catch (err) {
            setError('Failed to get a response from the AI. Please check your API key and try again.');
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
        const historyText = "This is the start of the interview.";
        const prompt = `You are an expert technical interviewer for a "${finalTargetRole}" position. Ask me one common, relevant behavioral or technical question for this role. Keep the question concise. Don't add any conversational text, just the question. The previous chat history is: ${historyText}`;
        const question = await getAIResponse(prompt);
        if (question) {
            setCurrentQuestion(question);
            setSessionHistory([{question}]);
        }
    };

    const submitAnswer = async () => {
        const finalTargetRole = getTargetRole();
        const prompt = `I am a candidate interviewing for a "${finalTargetRole}" role. The question was: "${currentQuestion}". My answer is: "${userAnswer}". Please provide concise, constructive feedback on my answer in 2-3 bullet points. Start with "Here's some feedback:"`;
        const aiFeedback = await getAIResponse(prompt);
        if (aiFeedback) {
            setFeedback(aiFeedback);
        }
    };

    const getNextQuestion = async () => {
        setFeedback('');
        setUserAnswer('');
        const finalTargetRole = getTargetRole();
        const historyText = sessionHistory.map(s => `Q: ${s.question}`).join('\n');
        const prompt = `You are an expert technical interviewer for a "${finalTargetRole}" position. Ask me another common question for this role that is DIFFERENT from the previous questions. Keep the question concise. Don't add any conversational text, just the question. The previous questions were: \n${historyText}`;
        const question = await getAIResponse(prompt);
        if (question) {
            setCurrentQuestion(question);
            setSessionHistory(prev => [...prev, {question}]);
        }
    };

    return (
        <div className="mock-interview-page">
            <header className="mock-interview-header">
                <h1>AI Mock Interview Simulator</h1>
                <p>Practice your interview skills with our AI-powered interviewer.</p>
            </header>

            {!interviewStarted ? (
                <div className="setup-container">
                    <h2>Prepare for Your Interview</h2>
                    <div className="form-group">
                        <label htmlFor="role-select">Select your target role:</label>
                        <select id="role-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                            {careerRoles.map(role => <option key={role} value={role}>{role}</option>)}
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
                    
                    {isLoading && !currentQuestion && (
                         <div className="loading-container">
                            <div className="spinner"></div>
                            <p>Preparing your first question...</p>
                        </div>
                    )}
                    
                    {currentQuestion && (
                        <div className="question-section">
                            <h3>Question for a {getTargetRole()} role:</h3>
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
                                <button onClick={submitAnswer} className="submit-answer-btn" disabled={isLoading || !userAnswer}>
                                    {isLoading ? 'Getting Feedback...' : 'Get Feedback'}
                                </button>
                            </div>
                        </div>
                    )}

                    {feedback && (
                        <div className="feedback-section">
                            <h3>AI Feedback:</h3>
                            <div className="feedback-content">
                                {feedback.split('\n').map((line, index) => <p key={index}>{line}</p>)}
                            </div>
                            <button onClick={getNextQuestion} className="next-question-btn" disabled={isLoading}>
                                {isLoading ? 'Thinking...' : 'Next Question'}
                            </button>
                        </div>
                    )}
                     {isLoading && currentQuestion && (
                         <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MockInterview;

