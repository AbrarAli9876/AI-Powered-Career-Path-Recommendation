import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeBuilder.css';

const careerRoles = [
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Engineer',
    'Cloud Architect',
    'Cybersecurity',
    'Game Developer',
    'Mobile UI Designer',
    'Full-Stack Developer',
    'Write your own...'
];

// Note: roleKeywords is not directly used in the prompt but is good for future reference
const roleKeywords = {
    'Data Scientist': 'Python, SQL, Statistics, Machine Learning, Pandas, Scikit-learn, Data Visualization',
    'AI Engineer': 'Python, TensorFlow/PyTorch, NLP, Computer Vision, Deep Learning, Algorithms',
    'Machine Learning Engineer': 'Python, MLOps, Docker, Kubernetes, AWS/GCP/Azure, CI/CD, Scikit-learn, TensorFlow/PyTorch',
    'Cloud Architect': 'AWS/GCP/Azure, Infrastructure as Code (Terraform/CloudFormation), Networking, Security, Containers (Docker, Kubernetes)',
    'Cybersecurity': 'Networking, Security Principles, Linux, Penetration Testing, SIEM, Incident Response',
    'Game Developer': 'C++, Unreal Engine, C#, Unity, 3D Math, Game Logic, Performance Optimization',
    'Mobile UI Designer': 'Figma, UI/UX Principles, Design Systems, Prototyping, iOS HIG, Material Design',
    'Full-Stack Developer': 'JavaScript, React, Node.js, SQL/NoSQL Databases, REST APIs, HTML/CSS'
};

// --- NEW HELPER FUNCTION ---
// Converts a File object to a GoogleGenerativeAI.Part object (inlineData)
async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: {
            data: await base64EncodedDataPromise,
            mimeType: file.type
        }
    };
}
// --- END HELPER FUNCTION ---

const ResumeBuilder = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState(careerRoles[0]);
    const [customRole, setCustomRole] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const getTargetRole = () => {
        return selectedRole === 'Write your own...' ? customRole : selectedRole;
    };
    
    // --- REMOVED uploadFileToGemini function ---

    const formatPrompt = () => {
        const finalTargetRole = getTargetRole();
        const allRoles = ['Data Scientist', 'AI Engineer', 'Machine Learning Engineer', 'Cloud Architect', 'Cybersecurity', 'Game Developer', 'Mobile UI Designer', 'Full-Stack Developer'];

        // This prompt structure is designed for the Gemini API
        return `
            You are an expert career coach and technical recruiter. Your task is to analyze the provided resume file (which could be a document or an image of a resume) and compare it against the user's stated career goal.

            1.  First, analyze the resume content thoroughly. Based ONLY on the skills, projects, and experience in the resume, determine which ONE of the following roles is the absolute BEST FIT for the candidate: ${allRoles.join(', ')}.
            2.  Second, compare your determined "best fit role" with the user's "selected target role", which is "${finalTargetRole}".
            3.  Based on this comparison, generate a detailed analysis.

            Your response MUST be a valid JSON object only, with no other text or markdown formatting. The JSON object must have this exact structure:
            {
              "bestFitRole": "<The single best-fit role you identified from the list>",
              "matchAnalysis": "<A 2-3 sentence analysis. If the roles match, confirm it and explain why they are a strong candidate. If they DON'T match, politely explain why their resume aligns better with another role, while acknowledging their selected goal.>",
              "gapAnalysis": [
                "<If roles DON'T match, list 2-3 key skill or experience gaps for their selected target role>",
                "<Another gap...>"
              ],
              "learningSuggestions": [
                "<If roles DON'T match, provide 2-3 specific, actionable suggestions on what they should learn or build to bridge the gap towards their selected goal.>"
              ]
            }

            - If the bestFitRole and the user's selected target role are the same, the "gapAnalysis" and "learningSuggestions" arrays MUST be empty.
            - The "bestFitRole" MUST be one of the roles from the provided list.
        `;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalTargetRole = getTargetRole();
        if (!resumeFile || !finalTargetRole.trim()) {
            setError('Please select a target role and attach your resume file.');
            return;
        }
        
        setIsLoading(true);
        setError('');
        setAnalysisResult(null);

        try {
            setLoadingMessage('Converting file...');
            // 1. Convert the file to the format the API needs (inlineData)
            const filePart = await fileToGenerativePart(resumeFile);
            
            setLoadingMessage('AI is analyzing your resume...');

            // 2. Prepare the prompt for the model
            const prompt = formatPrompt();
            
            // 3. Call the Gemini model with the file data *inline*
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY1; 
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            filePart // Pass the inlineData object
                        ]
                    }],
                    // Request JSON output
                    generationConfig: {
                        responseMimeType: "application/json",
                    }
                }),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`API analysis error: ${response.statusText} - ${errorBody}`);
            }

            const result = await response.json();
            const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (responseText) {
                // The response should be JSON, but we clean it just in case
                const cleanedJsonString = responseText.replace(/```json|```/g, '').trim();
                const parsedResult = JSON.parse(cleanedJsonString);
                setAnalysisResult(parsedResult);
            } else {
                throw new Error('API returned an empty or invalid analysis.');
            }

        } catch (err) {
            setError(`Failed to get analysis: ${err.message}. Please try again.`);
            console.error(err);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };
    
    const handleFileButtonClick = () => fileInputRef.current.click();
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Client-side validation for immediate feedback
            const allowedTypes = [
                "text/plain",
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/jpeg",
                "image/png"
            ];
            if (allowedTypes.includes(file.type)) {
                setResumeFile(file);
                setError(''); // Clear error on new file select
            } else {
                setResumeFile(null);
                setError('Invalid file type. Only .pdf, .docx, .txt, .jpg, or .png files are supported.');
            }
        }
    };

    const handleDragEvents = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragOver = (e) => {
        handleDragEvents(e);
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        handleDragEvents(e);
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        handleDragEvents(e);
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            // Check for allowed file types
            const allowedTypes = [
                "text/plain",
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/jpeg", // --- ADDED ---
                "image/png"   // --- ADDED ---
            ];
            if (allowedTypes.includes(file.type)) {
                setResumeFile(file);
                setError('');
            } else {
                setError('Invalid file type. Only .pdf, .docx, .txt, .jpg, or .png files are supported.'); // --- UPDATED ---
                setResumeFile(null);
            }
        }
    };

    const handleExploreClick = () => {
        navigate('/roadmaps');
    };

    return (
        <div className="resume-builder-page">
            <header className="resume-builder-header">
                <h1>AI-Powered Resume Review</h1>
                <p>Get instant feedback on your resume to better tailor it for your dream job.</p>
            </header>

            <form className="resume-form" onSubmit={handleSubmit}>
                 <div className="form-group">
                    <label htmlFor="target-role">1. Select your target career path:</label>
                    <select id="target-role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        {careerRoles.map(role => <option key={role} value={role}>{role}</option>)}
                    </select>
                </div>
                
                {selectedRole === 'Write your own...' && (
                    <div className="form-group custom-role-input">
                        <label htmlFor="custom-role">Enter your custom career path:</label>
                        <input
                            type="text"
                            id="custom-role"
                            placeholder="e.g., Quantum Computing Engineer"
                            value={customRole}
                            onChange={(e) => setCustomRole(e.target.value)}
                        />
                    </div>
                )}
                
                <div className="form-group">
                     <label htmlFor="resume-file">2. Attach your resume file:</label>
                    <div 
                        className={`resume-drop-zone ${isDragging ? 'dragging' : ''}`}
                        onClick={handleFileButtonClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                         <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            style={{ display: 'none' }}
                            // --- UPDATED FILE TYPES ---
                            accept=".txt,.pdf,.doc,.docx,.jpg,.jpeg,.png,text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                        />
                        <div className="file-prompt-content">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="upload-icon"><path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v10.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V6a2.25 2.25 0 00-2.25-2.25z" clipRule="evenodd" /><path d="M16.5 3.75a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V3.75z" /></svg>
                            {resumeFile ? <span>File Selected: <strong>{resumeFile.name}</strong></span> : <span>Click to upload or drop your resume here</span>}
                            {/* --- UPDATED HELP TEXT --- */}
                            <p className="file-types">Supports .pdf, .docx, .txt, .jpg, .png</p>
                        </div>
                    </div>
                </div>

                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="analyze-button" disabled={isLoading}>
                    {isLoading ? loadingMessage : 'Analyze My Resume'}
                </button>
            </form>
            
            {isLoading && !analysisResult && (
                 <div className="loading-container">
                    <div className="spinner"></div>
                    <p>{loadingMessage}</p>
                </div>
            )}

            {analysisResult && (
                <div className="results-container">
                    <h2>Analysis Results</h2>
                    <p className="feedback-summary">{analysisResult.matchAnalysis}</p>
                    
                    {analysisResult.bestFitRole !== getTargetRole() && (
                         <div className="feedback-columns">
                             <div className="feedback-column">
                                 <h3>Gap Analysis for {getTargetRole()}</h3>
                                <ul>
                                     {analysisResult.gapAnalysis.map((point, index) => <li key={index}>{point}</li>)}
                                 </ul>
                            </div>
                            <div className="feedback-column">
                                 <h3>🚀 Learning Suggestions</h3>
                                <ul>
                                     {analysisResult.learningSuggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
                                 </ul>
                            </div>
                         </div>
                    )}
                     <div className="explore-button-container">
                        <button className="btn btn-primary" onClick={handleExploreClick}>
                            Explore Job Based Roadmaps
                        </button>
                     </div>
                </div>
            )}
        </div>
    );
};

export default ResumeBuilder;