
**Agent Framework Hub – A comprehensive, interactive comparison platform for mainstream AI Agent development frameworks.**

This project provides a modern, fully responsive web application to evaluate, compare, and visualize the landscape of leading LLM‑based agent frameworks. It is built as a static site (vanilla HTML/CSS/JS) and can be deployed on GitHub Pages or any static hosting service.

---

### ✨ Features

#### 1. Framework Data Management
- **Real‑time data via `data.json`** (GitHub API integration) – fetches latest stars, versions, and release dates.
- **Offline fallback** – built‑in dataset ensures the site works even without network.

#### 2. Multiple View Modes
- **📇 Card View** – quick overview with org badge, stars, release date, and languages.
- **📋 List View** – sortable table showing framework name, maintainer, first release, latest version, latest release date, stars, languages, and a detail button.
- **📊 Capability Matrix** – compare 12 technical capabilities across three groups (Agent Architecture, Model & Ecosystem, Engineering Maturity).
- **📋 Scenario Quick‑Look** – which framework fits which use case (web/TS integration, multi‑agent collaboration, RAG, etc.).
- **🏆 Star Ranking** – GitHub stars bar chart with relative popularity.
- **🎯 LLM Freedom Scatter Plot** – 2D chart mapping **Model Freedom** (x‑axis) vs **Framework Constraint** (y‑axis). Each dot’s color represents **LLM Autonomy** (rule‑driven ↔ fully autonomous). Includes gridlines, tick labels, and a legend. Click any dot to see full framework details.
- **🏛️ Layered Architecture Diagram** – interactive SVG showing the 5‑layer AI agent stack: *Business Code → Orchestrator Adapter → Core Orchestration Frameworks → Capability Stack (Skills / MCP / ToolCalling) → LLM Model Service*. Every module is clickable with detailed explanations.
- **📡 Selection Radar Chart** – 8‑dimension evaluation (workflow reliability, checkpoint recovery, security, observability, multi‑model compatibility, ecosystem extensibility, human‑in‑the‑loop, community stability). Users can select any subset of frameworks to compare side‑by‑side. Hover on data points for tooltips; click on dimension labels to see detailed definitions.

#### 3. Dark / Light Mode
- Seamless theme switching that respects system preference and persists across views. All charts and diagrams adapt automatically.

#### 4. Modal Details
- Click any framework card, list row, scatter dot, architecture block, or radar dimension to open a modal with full description, capabilities, LLM autonomy score, GitHub link, and more.

---

### 🛠️ Tech Stack
- **HTML5 / CSS3** – custom CSS variables for dynamic theming.
- **Vanilla JavaScript** – no heavy frameworks; pure ES6+.
- **Chart.js** – for the radar chart.
- **SVG** – interactive architecture diagram and scatter plot.
- **Fetch API** – loads external `data.json` for live stats.
- **GitHub Actions** (optional) – scheduled workflow to refresh framework data (stars, releases).

---

### 📁 Project Structure
```
.
├── index.html              # Main entry point
├── architecture.html       # Standalone architecture diagram (follows system theme)
├── selection_radar.html    # Standalone radar chart (follows system theme)
├── css/
│   └── style.css           # Global styles (light/dark variables)
├── js/
│   └── app.js              # All application logic (view rendering, data loading, chart generation)
├── scripts/
│   └── fetch-data.js       # Node.js script to fetch GitHub stats and generate data.json
├── data.json               # Live framework data (generated)
├── .github/workflows/
│   └── update-data.yml     # Scheduled GitHub Action to refresh data.json
└── README.md
```

---

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agent-framework-hub.git
   cd agent-framework-hub
   ```

2. **Open locally**  
   Simply open `index.html` in a modern browser. No build step required.

3. **Optional – refresh live data**  
   - Set your `GITHUB_TOKEN` as a repository secret (or environment variable).
   - Run `node scripts/fetch-data.js` manually or rely on the GitHub Action (runs daily).

4. **Deploy to GitHub Pages**  
   Enable Pages in your repository settings, point to the root directory, and the site will be live at `https://yourusername.github.io/agent-framework-hub`.

---

### 📊 Supported Frameworks (14)
- Claude Agent SDK (Anthropic)
- Vercel AI SDK
- Google ADK
- AWS Strands Agents
- OpenAI Agents SDK
- Microsoft Agent Framework
- smolagents (Hugging Face)
- LlamaIndex
- LangChain
- LangGraph
- Pydantic AI
- pi-mono (Pi)
- CrewAI
- Agno

---

### 🤝 Contributing
Contributions are welcome! Please open an issue or pull request for:
- Adding new frameworks / updating scores
- Improving existing visualisations
- Fixing bugs or enhancing accessibility

---

### 📄 License
MIT

---

### 🌟 Live Demo
[https://yourusername.github.io/agent-framework-hub](https://yourusername.github.io/agent-framework-hub)  
*(Replace with your actual GitHub Pages URL)*

---

**Built with 💡 to help developers choose the right Agent framework for their next AI project.**
