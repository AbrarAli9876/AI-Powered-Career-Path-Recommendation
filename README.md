### AI-Powered Career Path Recommendation (CareerCraft)

CareerCraft helps learners and career switchers choose and execute a tech career path with AI-guided roadmaps, curated resources, and a built-in assistant. The frontend is a React + Vite SPA with dozens of job-based and skill-based roadmaps, an assessment flow, resume builder entry point, mock interview page, and always-on chatbot support. A backend scaffold exists for future APIs.

#### Features
- AI assistant and network-aware UI with chatbot and offline indicator
- Job roadmaps for data scientist, AI engineer, cloud architect, cybersecurity, game developer, ML engineer, and mobile/UI design
- Skill roadmaps for Python, JavaScript, React, SQL, Docker, C/C++, Java, AWS, C, Go, and Bash
- Deep resource phases for each role/skill (multi-stage pages mapped to `/<role>/stage-*` and `/skills/<skill>/stage-*` routes)
- Assessment, resume builder, jobs board, mock interview, and language-learning entry pages

#### Tech Stack
- React 19 + Vite 7
- React Router 7 for routing
- Axios for API calls (backend endpoints to be added)
- Node.js/Express backend scaffold (files present but not yet implemented)

#### Prerequisites
- Node.js 18+ and npm

#### Quick Start (Frontend)
1) Install dependencies
	```bash
	cd frontend
	npm install
	```
2) Run the dev server
	```bash
	npm run dev
	```
	Vite will print a local URL (default http://localhost:5173).
3) Build for production
	```bash
	npm run build
	```
4) Preview the production build locally
	```bash
	npm run preview
	```

#### Backend Scaffold
The `backend` folder currently contains placeholder files (server, routes, controllers, DB config). Implement your API there (e.g., career recommendations, roadmap persistence, user profiles) and expose endpoints the frontend can call via Axios.

#### Project Structure (partial)
```
backend/
  server.js               # Express entry (empty scaffold)
  config/db.js            # DB connection placeholder
  controllers/careerController.js
  routes/careerRoutes.js
frontend/
  src/
	 App.jsx               # Router and page wiring
	 pages/                # Roadmaps, resources, assessment, jobs, mock interview
	 components/           # Navbar, Footer, Chatbot, NetworkStatus, cards
  vite.config.js
  package.json
```

#### Key Routes (examples)
- `/` home with feature overview and CTAs
- `/roadmaps` job-based roadmaps; `/skill-roadmap` skill-based roadmaps
- `/data-scientist`, `/ai-engineer`, `/cloud-architect`, `/cybersecurity`, `/game-developer`, `/ml-engineer`, `/mobile-ui-designer`
- `/skills/python`, `/skills/javascript`, `/skills/react`, `/skills/sql`, `/skills/docker`, `/skills/cplusplus`, `/skills/java`, `/skills/aws`, `/skills/c`, `/skills/golang`, `/skills/bash`
- Resource phases follow `/data-scientist/phase-1-resources`, `/ai-engineer/stage-1-resources`, and `/skills/python/stage-1` patterns

#### Contributing
1) Fork and create a feature branch
2) Keep changes scoped (frontend or backend)
3) Add tests or manual repro steps when applicable
4) Open a PR with a clear summary and screenshots for UI changes

#### License
MIT License – see LICENSE for details.
