// src/pages/ResourceStyles.js

const ResourceStyles = `
:root {
  --background-dark: #12121e;
  --card-background: #1e1e30;
  --accent-primary: #00e676;
  --accent-secondary: #8258dc;
  --text-light: #e0e0e0;
  --text-medium: #b0b0b0;
  --border-color: #33334d;
}

.resource-container {
  background-color: var(--background-dark);
  color: var(--text-light);
  min-height: 100vh;
  padding: 4rem 5%;
  font-family: 'Inter', sans-serif;
}

.resource-header {
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;
}

.resource-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.resource-header p {
  font-size: 1.2rem;
  color: var(--text-medium);
  max-width: 700px;
  margin: 0 auto 2rem auto;
}

.back-link {
  color: var(--accent-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

.resource-section {
  margin-bottom: 3rem;
}

.resource-section h2 {
  font-size: 2rem;
  color: var(--text-light);
  border-bottom: 2px solid var(--accent-secondary);
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.resource-item {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
}

.resource-item h3 {
  font-size: 1.4rem;
  color: var(--accent-primary);
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.resource-item p {
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.resource-item iframe {
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.resource-link {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background-color: var(--accent-secondary);
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    border-radius: 20px;
    transition: background-color 0.3s ease;
}

.resource-link:hover {
    background-color: #9a6ce1;
}
`;

export default ResourceStyles;

