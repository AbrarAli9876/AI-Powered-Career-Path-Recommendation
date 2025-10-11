// src/pages/Assessment.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Assessment.css';

const questions = [
    {
        id: 'q1',
        text: 'What is your current role or education status?',
        type: 'radio',
        options: ['Student', 'Working Professional', 'Switching Careers', 'Other'],
    },
    {
        id: 'q2',
        text: 'How many years of experience do you have in programming or tech?',
        type: 'radio',
        options: ['None', 'Less than 1 year', '1–3 years', '3–5 years', '5+ years'],
    },
    {
        id: 'q3',
        text: 'Which programming languages do you know or have tried?',
        type: 'text',
        placeholder: 'e.g., Python, JavaScript, C++, Java...',
    },
    {
        id: 'q4',
        text: 'Which frameworks, tools, or libraries have you worked with?',
        type: 'text',
        placeholder: 'e.g., React, TensorFlow, Unity, Docker, AWS...',
    },
    {
        id: 'q5',
        text: 'Rate your skill level in the following areas:',
        type: 'sliders',
        sub_questions: [
            { id: 's1', label: 'Programming Logic' },
            { id: 's2', label: 'Mathematics' },
            { id: 's3', label: 'System Design / Infrastructure' },
            { id: 's4', label: 'Data Handling / Databases' },
            { id: 's5', label: 'Security Concepts' },
        ],
    },
    {
        id: 'q6',
        text: 'Which of these activities do you enjoy the most? (Choose all that apply)',
        type: 'checkbox',
        options: [
            'Coding new features from scratch',
            'Debugging and methodically fixing complex issues',
            'Researching new technologies and experimenting with them',
            'Optimizing performance and scaling systems for more users',
            'Designing beautiful user interfaces or engaging game levels',
            'Securing systems and defending against potential threats',
            'Analyzing data to find hidden patterns and insights',
        ],
    },
    {
        id: 'q7',
        text: 'What kind of things would you ideally like to build in the future?',
        type: 'text',
        placeholder: 'e.g., AI models, mobile apps, AAA games, secure networks...',
    },
    {
        id: 'q8',
        text: 'Thinking about the following areas, which one sounds most exciting to you as a primary focus?',
        type: 'radio',
        options: [
            'Analyzing data to make predictions and drive business decisions (Data Science)',
            'Building and deploying intelligent systems and models at scale (AI/ML Engineering)',
            'Creating and managing vast, scalable cloud infrastructure (Cloud Architecture)',
            'Protecting digital systems and data from attackers (Cybersecurity)',
            'Bringing interactive worlds and experiences to life (Game Development)',
        ],
    },
    {
        id: 'q9',
        text: 'Anything more you would like to tell us about what you want to achieve?',
        type: 'textarea',
        placeholder: 'Tell us about your long-term goals, dream projects, or specific companies you admire...',
    },
];

const sliderValueMap = {
    '1': 'Beginner',
    '2': 'Familiar',
    '3': 'Intermediate',
    '4': 'Proficient',
    '5': 'Advanced'
};

const Assessment = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = React.useState({
        q5: { s1: '1', s2: '1', s3: '1', s4: '1', s5: '1' }
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [results, setResults] = React.useState(null);

    React.useEffect(() => {
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.setProperty('--track-fill-percent', `${percent}%`);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setAnswers((prev) => {
                const current = prev[name] || [];
                if (checked) {
                    return { ...prev, [name]: [...current, value] };
                } else {
                    return { ...prev, [name]: current.filter((item) => item !== value) };
                }
            });
        } else {
            setAnswers((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSliderChange = (e) => {
        const { name, value } = e.target;
        
        setAnswers((prev) => ({
            ...prev,
            q5: { ...(prev.q5 || {}), [name]: value },
        }));

        const slider = e.target;
        const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--track-fill-percent', `${percent}%`);
    };

    const formatPrompt = () => {
        const ratingText = (rating) => sliderValueMap[rating] || 'Not Rated';
        const userProfile = `
            - Current Status: ${answers.q1 || 'Not specified'}
            - Tech Experience: ${answers.q2 || 'Not specified'}
            - Known Programming Languages: ${answers.q3 || 'None'}
            - Known Frameworks/Tools: ${answers.q4 || 'None'}
            - Self-rated skills: 
                - Programming Logic: ${ratingText(answers.q5?.s1)}
                - Mathematics: ${ratingText(answers.q5?.s2)}
                - System Design: ${ratingText(answers.q5?.s3)}
                - Data Handling: ${ratingText(answers.q5?.s4)}
                - Security Concepts: ${ratingText(answers.q5?.s5)}
            - Enjoyed Activities: ${(answers.q6 || []).join(', ') || 'None specified'}
            - Future Project Interests: ${answers.q7 || 'Not specified'}
            - Most Exciting Area: ${answers.q8 || 'Not specified'}
            - Long-term Goals/Aspirations: ${answers.q9 || 'Not specified'}
        `;

        return `
            Based on the provided user profile, analyze their skills and interests.
            Your response MUST be a valid JSON object only, with no other text.
            The JSON object should have the following structure:
            {
              "primaryRecommendation": "Name of the top recommended career path",
              "analysis": "A short, encouraging 2-3 sentence explanation for the recommendation, based on their profile.",
              "scores": [
                {"career": "Data Scientist", "score": <integer_percentage>},
                {"career": "AI Engineer", "score": <integer_percentage>},
                {"career": "Machine Learning Engineer", "score": <integer_percentage>},
                {"career": "Cloud Architect", "score": <integer_percentage>},
                {"career": "Cybersecurity", "score": <integer_percentage>},
                {"career": "Game Developer", "score": <integer_percentage>}
              ]
            }

            User Profile:
            ${userProfile.trim()}
        `.trim();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResults(null);

        const userPrompt = formatPrompt();
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        
        if (!apiKey) {
            setError("API Key is missing.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: userPrompt }] }] }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${response.statusText} - ${errorData.error.message}`);
            }

            const result = await response.json();
            const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (responseText) {
                const cleanedJsonString = responseText.replace(/```json|```/g, '').trim();
                const parsedResults = JSON.parse(cleanedJsonString);
                parsedResults.scores.sort((a, b) => b.score - a.score);
                setResults(parsedResults);
            } else {
                throw new Error('API returned an empty response.');
            }

        } catch (err) {
            setError('Failed to analyze results. The API may have returned an unexpected format. Please try again.');
            console.error("Error processing API response:", err);
        } finally {
            setLoading(false);
        }
    };
    
    const handleViewRoadmap = () => {
        if (results) {
            const pathSlug = results.primaryRecommendation.toLowerCase().replace(/\s+/g, '-');
            navigate(`/${pathSlug}`);
        }
    };

    return (
        <div className="assessment-container">
            {results && (
                <div className="results-modal-overlay">
                    <div className="results-modal-content">
                        <h2>Analysis Complete!</h2>
                        <p className="analysis-text">{results.analysis}</p>
                        <h3>Your Career Path Affinity:</h3>
                        <div className="scores-container">
                            {results.scores.map(item => (
                                <div className="score-item" key={item.career}>
                                    <span className="career-name">{item.career}</span>
                                    <div className="score-bar-container">
                                        <div className="score-bar" style={{ width: `${item.score}%` }}></div>
                                    </div>
                                    <span className="score-percent">{item.score}%</span>
                                </div>
                            ))}
                        </div>
                        <div className="results-actions">
                            <button className="btn btn-primary" onClick={handleViewRoadmap}>
                                View Recommended Roadmap
                            </button>
                            <button className="btn btn-secondary" onClick={() => setResults(null)}>
                                Retake Assessment
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="assessment-header">
                <h1>Career Path Assessment</h1>
                <p>Answer a few questions to discover the tech career that best aligns with your passions and skills.</p>
            </div>

            <form className="assessment-form" onSubmit={handleSubmit}>
                {questions.map((q) => (
                    <div className="question-card" key={q.id}>
                        <label className="question-label">{q.text}</label>
                        <div className="options-container">
                            {q.type === 'radio' && q.options.map((opt) => (
                                <div className="option" key={opt}>
                                    <input type="radio" id={`${q.id}-${opt}`} name={q.id} value={opt} onChange={handleInputChange} required />
                                    <label htmlFor={`${q.id}-${opt}`}>{opt}</label>
                                </div>
                            ))}
                            {q.type === 'text' && (
                                <input type="text" name={q.id} placeholder={q.placeholder} className="text-input" onChange={handleInputChange} />
                            )}
                            {q.type === 'checkbox' && q.options.map((opt) => (
                                <div className="option" key={opt}>
                                    <input type="checkbox" id={`${q.id}-${opt}`} name={q.id} value={opt} onChange={handleInputChange} />
                                    <label htmlFor={`${q.id}-${opt}`}>{opt}</label>
                                </div>
                            ))}
                            {q.type === 'textarea' && (
                                <textarea
                                    name={q.id}
                                    placeholder={q.placeholder}
                                    className="textarea-input"
                                    onChange={handleInputChange}
                                    rows="4"
                                />
                            )}
                             {q.type === 'sliders' && q.sub_questions.map((sq) => {
                                const currentValue = answers.q5?.[sq.id] || '1';
                                return (
                                <div className="slider-container" key={sq.id}>
                                    <label htmlFor={sq.id}>
                                        {sq.label}
                                        <span className="slider-rating-text">{sliderValueMap[currentValue]}</span>
                                    </label>
                                    <div className="slider-wrapper">
                                        <span>Beginner</span>
                                        <input 
                                            type="range" 
                                            id={sq.id} 
                                            name={sq.id} 
                                            min="1" 
                                            max="5" 
                                            value={currentValue}
                                            onChange={handleSliderChange} 
                                        />
                                        <span>Advanced</span>
                                    </div>
                                </div>
                             )})}
                        </div>
                    </div>
                ))}

                {error && <p className="error-message">{error}</p>}
                
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Analyzing...' : 'Find My Career Path'}
                </button>
            </form>
        </div>
    );
};

export default Assessment;

