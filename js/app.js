(function() {
  // ---------- 完整的 Fallback 数据（含 decision_mode）----------
  const frameworksFallback = [
    { id: 'claude-agent-sdk', name: 'Claude Agent SDK', org: 'Anthropic', category: 'vendor', githubRepo: 'anthropics/claude-code', npmPackage: null, firstRelease: '2025年3月', languages: ['Python', 'TypeScript'], license: '商业许可', decision_mode: 67.5, shortDesc: 'Anthropic官方Agent SDK，将Claude Code能力封装为可编程接口，支持MCP协议。', longDesc: 'Claude Agent SDK 是 Anthropic 推出的官方智能体开发工具包，从 Claude Code 衍生而来。提供两种接入模式：简化高级 API 与低级别 Agent Loop 原语。原生支持 MCP 协议，拥有 Hook 系统 (PreToolUse, PostToolUse)，仅限 Claude 模型。', features: ['Claude专用', 'MCP原生', 'Hook系统', '文件/Shell操作', 'TypeScript+Python'], capabilities: { single_agent: true, multi_agent: 'partial', hitl: true, streaming: true, tool_calling: true, model_agnostic: false, mcp: true, a2a: false, state_management: true, memory: 'partial', persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 7800, npmDownloads: null },
    { id: 'vercel-ai-sdk', name: 'Vercel AI SDK', org: 'Vercel', category: 'vendor', githubRepo: 'vercel/ai', npmPackage: 'ai', firstRelease: '2023年6月', languages: ['TypeScript'], license: 'Apache-2.0', decision_mode: 75, shortDesc: 'TypeScript生态首选AI工具包，统一100+模型接口，深度集成React/Next.js。', longDesc: 'Vercel AI SDK 是 TypeScript 领域最主流的 AI 框架，周下载量超 1200 万。提供 useChat、useCompletion 等 React Hook，支持流式 UI 和 Agent 抽象 (v6)。完全开源，Apache-2.0 协议。', features: ['100+模型提供商', 'React/Next.js集成', '流式UI', 'Agent抽象(v6)', 'MCP支持'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: true, a2a: false, state_management: true, memory: 'partial', persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 42000, npmDownloads: null },
    { id: 'google-adk', name: 'Google ADK', org: 'Google', category: 'vendor', githubRepo: 'google/adk-python', npmPackage: null, firstRelease: '2025年4月', languages: ['Python', 'Java', 'Go'], license: 'Apache-2.0', decision_mode: 57.5, shortDesc: 'Google开源Agent工具包，覆盖设计到部署全生命周期，深度优化Gemini。', longDesc: 'Google Agent Development Kit (ADK) 是代码优先的开源工具包，支持多智能体系统的设计、编排、调试、评估和部署。Python/Java/Go 多语言支持，层级 Agent 编排，内置评估工具。', features: ['层级Agent编排', '内置评估工具', 'Google Cloud集成', 'A2A协议'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: true, state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 3200, npmDownloads: null },
    { id: 'aws-strands-agents', name: 'AWS Strands Agents', org: 'Amazon', category: 'vendor', githubRepo: 'aws/strands-agents', npmPackage: null, firstRelease: '2025年5月', languages: ['Python', 'TypeScript'], license: 'Apache-2.0', decision_mode: 82.5, shortDesc: 'AWS开源模型驱动Agent SDK，几行代码构建多智能体，支持A2A与Bedrock。', longDesc: 'Strands Agents 是 AWS 推出的模型驱动 Agent SDK，2025年7月发布1.0。支持多 Agent 模式、A2A 协议，与 Amazon Bedrock AgentCore 深度集成。', features: ['模型驱动', '多Agent模式', 'A2A协议', 'Bedrock集成'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: true, state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 2100, npmDownloads: null },
    { id: 'openai-agents-sdk', name: 'OpenAI Agents SDK', org: 'OpenAI', category: 'vendor', githubRepo: 'openai/openai-agents-python', npmPackage: null, firstRelease: '2025年3月', languages: ['Python'], license: 'Apache-2.0', decision_mode: 70, shortDesc: 'OpenAI官方Agent SDK，提供轻量级、可组合的智能体构建原语。', longDesc: 'OpenAI Agents SDK 是 OpenAI 推出的官方 Python 库，用于构建和管理 AI 智能体。支持工具使用、多智能体协调、内置跟踪与评估，与 OpenAI 模型深度集成。', features: ['OpenAI模型优化', '多Agent协调', '内置跟踪', 'Python优先'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: false, mcp: false, a2a: false, state_management: true, memory: 'partial', persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 15000, npmDownloads: null },
    { id: 'microsoft-agent-framework', name: 'Microsoft Agent Framework', org: 'Microsoft', category: 'vendor', githubRepo: 'microsoft/agent-framework', npmPackage: null, firstRelease: '2025年5月', languages: ['Python', 'C#'], license: 'MIT', decision_mode: 67.5, shortDesc: '微软推出的企业级多Agent编排框架，支持ACN与语义内核。', longDesc: 'Microsoft Agent Framework 是微软开源的智能体框架，深度集成 Azure 生态与 Semantic Kernel。提供多Agent编排、企业级安全、可观测性，适用于复杂业务自动化。', features: ['Azure集成', '多Agent编排', 'Semantic Kernel', '企业级安全'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: true, state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 4300, npmDownloads: null },
    { id: 'smolagents', name: 'smolagents', org: 'Hugging Face', category: 'opensource', githubRepo: 'huggingface/smolagents', npmPackage: null, firstRelease: '2025年1月', languages: ['Python'], license: 'Apache-2.0', decision_mode: 87.5, shortDesc: 'HuggingFace推出的极简Agent库，专注代码驱动、沙箱安全执行。', longDesc: 'smolagents 是 Hugging Face 推出的轻量级智能体框架，强调代码动作而非JSON，支持安全沙箱执行。与 Hugging Face Hub 生态无缝集成，模型无关。', features: ['代码驱动', '安全沙箱', 'Hub集成', '模型无关'], capabilities: { single_agent: true, multi_agent: 'partial', hitl: 'partial', streaming: true, tool_calling: true, model_agnostic: true, mcp: false, a2a: false, state_management: 'partial', memory: 'partial', persistence: false, visual_tools: false }, latestVersion: null, latestReleaseDate: null, stars: 9500, npmDownloads: null },
    { id: 'llama-index', name: 'LlamaIndex', org: 'LlamaIndex (run-llama)', category: 'opensource', githubRepo: 'run-llama/llama_index', npmPackage: null, firstRelease: '2022年11月', languages: ['Python', 'TypeScript'], license: 'MIT', decision_mode: 70, shortDesc: '数据驱动的LLM应用框架，提供强大的索引、查询与Agent能力。', longDesc: 'LlamaIndex 是领先的数据框架，用于将LLM连接到外部数据源。提供丰富的数据连接器、索引结构、查询引擎和Agent组件，支持构建复杂RAG和Agent应用。', features: ['数据连接器', '索引结构', '查询引擎', 'Agent组件', '多语言'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: false, state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 38000, npmDownloads: null },
    { id: 'langchain', name: 'LangChain', org: 'LangChain Inc.', category: 'opensource', githubRepo: 'langchain-ai/langchain', npmPackage: null, firstRelease: '2022年10月', languages: ['Python', 'TypeScript'], license: 'MIT', decision_mode: 75, shortDesc: 'AI应用开发框架，提供模型、提示、链、Agent、记忆等核心模块，生态庞大。', longDesc: 'LangChain 是 AI 工程领域的基础框架，提供模型抽象、提示模板、链式调用、工具集成、记忆管理等全方位能力。拥有庞大的社区和工具链，是许多Agent框架的底层依赖。', features: ['模型抽象', '链式调用', '工具集成', '记忆管理', '庞大生态'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: false, state_management: true, memory: true, persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 98000, npmDownloads: null },
    { id: 'langgraph', name: 'LangGraph', org: 'LangChain Inc.', category: 'opensource', githubRepo: 'langchain-ai/langgraph', npmPackage: null, firstRelease: '2024年4月', languages: ['Python', 'TypeScript'], license: 'MIT', decision_mode: 50, shortDesc: '有向图编排的生产级Agent框架，状态管理+持久化+时间旅行调试。', longDesc: 'LangGraph 是 LangChain 生态中专为复杂有状态工作流设计的框架。采用有向图结构，支持循环边、条件边，三级内存体系，检查点与人在循环。已被 Klarna、Uber 等企业验证。', features: ['有向图编排', '状态检查点', '时间旅行调试', '人在循环', 'MCP原生'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: true, a2a: 'partial', state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 11000, npmDownloads: null },
    { id: 'pydantic-ai', name: 'Pydantic AI', org: 'Pydantic Team', category: 'opensource', githubRepo: 'pydantic/pydantic-ai', npmPackage: null, firstRelease: '2024年12月', languages: ['Python'], license: 'MIT', decision_mode: 75, shortDesc: '类型安全的Agent框架，FastAPI风格开发体验，利用Pydantic验证。', longDesc: 'Pydantic AI 将 Pydantic 的数据验证能力带入 AI Agent 开发，强调生产级可靠性。v1.0 于2025年9月发布，支持多模型提供商。', features: ['类型安全', 'FastAPI风格', '多模型支持', '结构化输出'], capabilities: { single_agent: true, multi_agent: 'partial', hitl: 'partial', streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: false, state_management: 'partial', memory: 'partial', persistence: false, visual_tools: false }, latestVersion: null, latestReleaseDate: null, stars: 6200, npmDownloads: null },
    { id: 'pi-mono', name: 'pi-mono (Pi)', org: 'OpenClaw / badlogic', category: 'opensource', githubRepo: 'badlogic/pi-mono', npmPackage: 'pi-ai', firstRelease: '2025年中期', languages: ['TypeScript'], license: 'MIT', decision_mode: 95, shortDesc: '极致极简的AI引擎，默认仅4个工具，系统提示词不到1000 token。', longDesc: 'pi-mono 是 OpenClaw 底层引擎，Monorepo 架构包含7个独立 npm 包。核心产品 Pi 为终端编程智能体，设计哲学“极简无限扩展”，不依赖 LangChain。', features: ['极简内核(4工具)', '模块化npm包', '20+模型提供商', '终端UI'], capabilities: { single_agent: true, multi_agent: false, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: false, a2a: false, state_management: true, memory: false, persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 2800, npmDownloads: null },
    { id: 'crewai', name: 'CrewAI', org: 'CrewAI Inc.', category: 'opensource', githubRepo: 'crewAIInc/crewAI', npmPackage: null, firstRelease: '2023年11月', languages: ['Python'], license: 'MIT', decision_mode: 55, shortDesc: '角色化多Agent协作框架，模拟人类团队，Fortune 500采用率超60%。', longDesc: 'CrewAI 通过定义角色、目标、背景故事来驱动多智能体协作。从原型到演示最快2-4小时，2024年完成1800万美元A轮融资。', features: ['角色化协作', '层次化委派', '任务编排', '企业级平台'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: 'partial', a2a: false, state_management: true, memory: true, persistence: 'partial', visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 24000, npmDownloads: null },
    { id: 'agno', name: 'Agno', org: 'Agno (前Phidata)', category: 'opensource', githubRepo: 'agno-agi/agno', npmPackage: null, firstRelease: '2024年(重塑2025.1)', languages: ['Python'], license: 'MPL-2.0', decision_mode: 82.5, shortDesc: '轻量高性能多模态Agent框架，内置记忆与知识库，AgentOS监控。', longDesc: 'Agno 前身为 Phidata，2025年重塑为高性能 Agentic AI 运行时。设计原则简单、快速、无关，提供内置 UI 与监控面板。', features: ['极速实例化', '内置知识库', 'AgentOS监控', '多模态支持'], capabilities: { single_agent: true, multi_agent: true, hitl: true, streaming: true, tool_calling: true, model_agnostic: true, mcp: true, a2a: true, state_management: true, memory: true, persistence: true, visual_tools: true }, latestVersion: null, latestReleaseDate: null, stars: 5200, npmDownloads: null }
  ];

  // 点阵图坐标数据: [模型自由度(0-100), 框架约束程度(0-100)]
  const freedomCoordinates = {
    'claude-agent-sdk': [5,70],
    'vercel-ai-sdk': [70,40],
    'google-adk': [50,60],
    'aws-strands-agents': [60,55],
    'openai-agents-sdk': [10,65],
    'microsoft-agent-framework': [55,50],
    'smolagents': [80,25],
    'llama-index': [90,30],
    'langchain': [95,45],
    'langgraph': [85,60],
    'pydantic-ai': [90,35],
    'pi-mono': [95,15],
    'crewai': [80,50],
    'agno': [85,40]
  };

  let currentView = 'cards';
  let frameworkData = [];
  let lastUpdated = null;
  const contentArea = document.getElementById('contentArea');
  const updateTimeSpan = document.getElementById('updateTime');
  const modal = document.getElementById('detailModal');
  const modalInner = document.getElementById('modalInner');

  function formatNumber(num) { if (!num) return '--'; return num >= 1000 ? (num/1000).toFixed(1)+'k' : num.toString(); }
  function formatFullDateTime(isoString) { if(!isoString) return ''; const d=new Date(isoString); return `${d.getFullYear()}年${String(d.getMonth()+1).padStart(2,'0')}月${String(d.getDate()).padStart(2,'0')}日 ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
  
  function getDecisionColor(decisionMode) {
    let mode = decisionMode;
    if (mode === undefined || mode === null || isNaN(mode)) {
      mode = 50;
    }
    mode = Math.min(100, Math.max(0, mode));
    const r = Math.min(255, Math.floor(255 * (1 - mode / 100)));
    const g = Math.min(255, Math.floor(255 * (mode / 100)));
    const b = Math.min(255, 50 + Math.floor(100 * (mode / 100)));
    return `rgb(${r}, ${g}, ${b})`;
  }

  async function loadAllData() {
    updateTimeSpan.textContent = '正在从 data.json 加载...';
    try {
      const res = await fetch('./data.json');
      if(!res.ok) throw new Error();
      const data = await res.json();
      let loadedData;
      if(data.frameworks) {
        loadedData = data.frameworks;
        lastUpdated = data.lastUpdated;
        updateTimeSpan.textContent = `✅ 数据更新于 ${formatFullDateTime(lastUpdated)}`;
      } else {
        loadedData = data;
        updateTimeSpan.textContent = '✅ 数据已加载（无时间戳）';
      }
      frameworkData = loadedData.map(fw => {
        if (fw.decision_mode === undefined || fw.decision_mode === null) {
          const fallback = frameworksFallback.find(f => f.id === fw.id);
          if (fallback && fallback.decision_mode !== undefined) {
            fw.decision_mode = fallback.decision_mode;
          } else {
            fw.decision_mode = 50;
          }
        }
        return fw;
      });
      renderView();
    } catch(e) {
      console.warn("加载外部数据失败，使用内置数据", e);
      frameworkData = JSON.parse(JSON.stringify(frameworksFallback));
      updateTimeSpan.textContent = '⚠️ 离线模式，显示内置数据';
      renderView();
    }
  }

  function showDetail(id) {
    const fw = frameworkData.find(f=>f.id===id);
    if(!fw) return;
    let capsHtml='';
    const labels = {
      single_agent:'单Agent', multi_agent:'多Agent', hitl:'人在循环', streaming:'流式',
      tool_calling:'工具调用', model_agnostic:'模型无关', mcp:'MCP', a2a:'A2A',
      state_management:'状态管理', memory:'记忆', persistence:'持久化', visual_tools:'可视化'
    };
    for(let [k,v] of Object.entries(fw.capabilities)){
      const label = labels[k] || k;
      capsHtml+=`<span style="margin-right:12px;">${v===true?'✅':v==='partial'?'⚠️':'❌'} ${label}</span>`;
    }
    const githubUrl = fw.githubRepo ? `https://github.com/${fw.githubRepo}` : '#';
    modalInner.innerHTML = `
      <div class="framework-name">${fw.name}</div>
      <div style="color:var(--text-secondary);margin-bottom:1rem;">${fw.org} · ${fw.license}</div>
      <p><strong>发布:</strong> ${fw.firstRelease} | <strong>版本:</strong> ${fw.latestVersion||'--'} | ⭐ ${formatNumber(fw.stars)}</p>
      <p><strong>语言:</strong> ${fw.languages.join(', ')}</p>
      <p><strong>LLM 自主度:</strong> ${fw.decision_mode}% (规则驱动 ← → LLM完全驱动)</p>
      <p style="margin:1rem 0;">${fw.longDesc}</p>
      <div><strong>核心特性:</strong><ul class="framework-features">${fw.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div><strong>能力:</strong><br>${capsHtml}</div>
      ${fw.githubRepo ? `<a class="github-link" href="${githubUrl}" target="_blank">🔗 GitHub 仓库</a>` : ''}
    `;
    modal.classList.add('active');
  }

  function renderCards() {
    const sorted = [...frameworkData].sort((a,b)=>(b.stars||0)-(a.stars||0));
    let html='<div class="frameworks-grid">';
    sorted.forEach(fw=>{
      html+=`<div class="card">
        <div class="card-header"><span class="org-badge">${fw.org}</span><span class="stars">⭐ ${formatNumber(fw.stars)}</span></div>
        <div class="card-title">${fw.name}</div>
        <div class="meta"><span>📅 ${fw.firstRelease}</span><span>🔖 ${fw.latestVersion||'--'}</span><span>🧬 ${fw.languages.join(',')}</span></div>
        <div class="desc">${fw.shortDesc}</div>
        <button class="detail-btn" data-id="${fw.id}">查看详细介绍 →</button>
      </div>`;
    });
    html+='</div>';
    contentArea.innerHTML=html;
    attachDetailEvents();
  }
  
  function renderList() {
    function formatDate(isoString) {
      if (!isoString) return '--';
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return '--';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    const sorted = [...frameworkData].sort((a, b) => (b.stars || 0) - (a.stars || 0));
    let html = `<table class="list-table"><thead>
      <tr><th>框架</th><th>维护方</th><th>发布时间</th>
      <th>当前版本</th><th>最新发布时间</th>
      <th>Stars</th><th>语言</th><th>操作</th>
    </tr></thead><tbody>`;
    sorted.forEach(fw => {
      const version = fw.latestVersion || '--';
      const releaseDate = formatDate(fw.latestReleaseDate);
      html += `<tr>
        <td><strong>${fw.name}</strong></td>
        <td>${fw.org}</td>
        <td>${fw.firstRelease}</td>
        <td>${version}</td>
        <td>${releaseDate}</td>
        <td>⭐ ${formatNumber(fw.stars)}</td>
        <td>${fw.languages.join(',')}</td>
        <td><button class="detail-btn" data-id="${fw.id}">详情</button></td>
      </tr>`;
    });
    html += '</tbody></table>';
    contentArea.innerHTML = html;
    attachDetailEvents();
  }

  function renderMatrix() {
    const groups=[{name:'🧠 智能体架构',dims:['single_agent','multi_agent','hitl','streaming','tool_calling']},{name:'🌐 模型与生态',dims:['model_agnostic','mcp','a2a','visual_tools']},{name:'⚙️ 工程化成熟度',dims:['state_management','memory','persistence']}];
    const dimLabels={single_agent:'单Agent',multi_agent:'多Agent协作',hitl:'人在循环',streaming:'流式处理',tool_calling:'工具调用',model_agnostic:'模型无关',mcp:'MCP协议',a2a:'A2A协议',visual_tools:'可视化/调试',state_management:'状态管理',memory:'记忆系统',persistence:'持久化'};
    let html='<div style="overflow-x:auto;"><table class="matrix-table"><thead><tr><th>能力维度</th>';
    frameworkData.forEach(f=>html+=`<th>${f.name}</th>`);
    html+='</tr></thead><tbody>';
    groups.forEach(g=>{
      html+=`<tr class="matrix-group-header"><td colspan="${frameworkData.length+1}">${g.name}</td></tr>`;
      g.dims.forEach(dim=>{
        html+=`<td>${dimLabels[dim]||dim}</td>`;
        frameworkData.forEach(fw=>{
          const val=fw.capabilities[dim];
          const icon=val===true?'<span class="check">✔️</span>':val==='partial'?'<span class="partial">◐</span>':'<span class="cross">✖️</span>';
          html+=`<td>${icon}</td>`;
        });
        html+='</tr>';
      });
    });
    html+='</tbody></table></div>';
    contentArea.innerHTML=html;
  }

  function renderScenarios() {
    const scenarioDefinitions = ['Web/TS前端集成', '企业多Agent协作', '复杂有状态工作流', '类型安全生产', '极简自定义引擎', 'Claude生态', 'Google Cloud生态', 'AWS生态', 'OpenAI生态', 'Azure企业级', '数据驱动RAG', '快速原型'];
    const scenarioMap={
      'claude-agent-sdk':[4,5],'vercel-ai-sdk':[0],'google-adk':[1,6],'aws-strands-agents':[1,7],'openai-agents-sdk':[1,8],'microsoft-agent-framework':[1,9],
      'smolagents':[4,10,11],'llama-index':[10],'langchain':[0,1,2,10],'langgraph':[2,3],'pydantic-ai':[3],'pi-mono':[4],'crewai':[1,11],'agno':[1,10,11]
    };
    let html='<div style="overflow-x:auto;"><table class="scenario-table"><thead><tr><th>框架</th>'+scenarioDefinitions.map(s=>`<th>${s}</th>`).join('')+'</tr></thead><tbody>';
    frameworkData.forEach(fw=>{
      html+=`<tr><td><strong>${fw.name}</strong></td>`;
      const applicable=scenarioMap[fw.id]||[];
      scenarioDefinitions.forEach((_,idx)=>{
        html+=`<td>${applicable.includes(idx)?'<span class="check">✔️</span>':''}</td>`;
      });
      html+='</tr>';
    });
    html+='</tbody></table></div>';
    contentArea.innerHTML=html;
  }


  function drawFreedomPointsAndLabels(container) {
    const existingDots = container.querySelectorAll('.freedom-dot');
    const existingLabels = container.querySelectorAll('.freedom-label');
    existingDots.forEach(el => el.remove());
    existingLabels.forEach(el => el.remove());

    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width === 0 || height === 0) {
      setTimeout(() => drawFreedomPointsAndLabels(container), 80);
      return;
    }
    const leftPad = 58, rightPad = 38, topPad = 38, bottomPad = 48;
    const plotWidth = width - leftPad - rightPad;
    const plotHeight = height - topPad - bottomPad;
    if (plotWidth <= 0 || plotHeight <= 0) return;

    frameworkData.forEach(fw => {
      const coords = freedomCoordinates[fw.id];
      if (!coords) return;
      let [xPercent, yPercent] = coords;
      xPercent = Math.min(100, Math.max(0, xPercent));
      yPercent = Math.min(100, Math.max(0, yPercent));
      const left = leftPad + (xPercent / 100) * plotWidth;
      const top = topPad + (100 - yPercent) / 100 * plotHeight;

      const dot = document.createElement('div');
      dot.className = 'freedom-dot';
      dot.style.backgroundColor = getDecisionColor(fw.decision_mode);
      dot.style.left = left + 'px';
      dot.style.top = top + 'px';
      dot.setAttribute('data-id', fw.id);
      dot.addEventListener('click', (e) => { e.stopPropagation(); showDetail(fw.id); });
      container.appendChild(dot);

      let offsetX = 12, offsetY = -12;
      if (xPercent > 85) offsetX = -58;
      if (yPercent < 20) offsetY = 12;
      if (xPercent < 15) offsetX = 12;
      const label = document.createElement('div');
      label.className = 'freedom-label';
      label.textContent = fw.name;
      label.style.left = (left + offsetX) + 'px';
      label.style.top = (top + offsetY) + 'px';
      container.appendChild(label);
    });

    let legend = container.querySelector('.decision-legend');
    if (!legend) {
      legend = document.createElement('div');
      legend.className = 'decision-legend';
      legend.innerHTML = `
        <span><span style="display:inline-block; width:12px; height:12px; background:rgb(255,0,85); border-radius:50%;"></span> 规则驱动(0~30)</span>
        <span><span style="display:inline-block; width:12px; height:12px; background:rgb(180,120,50); border-radius:50%;"></span> 混合模式(30~70)</span>
        <span><span style="display:inline-block; width:12px; height:12px; background:rgb(0,200,100); border-radius:50%;"></span> LLM完全驱动(70~100)</span>
      `;
      container.appendChild(legend);
    }
  }

  function renderLlmFreedom() {
    const containerHtml = `<div class="freedom-chart" id="freedomChartContainer">
      <div class="freedom-axes" id="freedomAxes"></div>
      <div class="axis-annotation" style="bottom: 30px; left: 68px;">模型自由度 弱 → 强</div>
      <div class="axis-annotation" style="top: 20px; left: 12px;">框架约束程度<br>高 ↑</div>
      <div class="axis-annotation" style="bottom: 70px; left: 12px;">低 ↓</div>
      <div class="note">⚫ 点击任意圆点查看详情 | 标签直接显示框架名称 | 颜色 = LLM自主度</div>
    </div>`;
    contentArea.innerHTML = containerHtml;
    const container = document.getElementById('freedomChartContainer');
    if (!container) return;
    requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0) setTimeout(() => drawFreedomPointsAndLabels(container), 50);
      else drawFreedomPointsAndLabels(container);
    });
  }

  function renderArchitecture() {
  // 获取当前主题颜色（通过 CSS 变量）
  const isDark = document.body.classList.contains('dark');
  const getCssVar = (varName) => getComputedStyle(document.body).getPropertyValue(varName).trim();
  
  const cyan = getCssVar('--cyan') || (isDark ? '#22d3ee' : '#0891b2');
  const orange = getCssVar('--orange') || (isDark ? '#f97316' : '#ea580c');
  const purple = getCssVar('--purple') || (isDark ? '#a855f7' : '#9333ea');
  const blue = getCssVar('--blue') || (isDark ? '#3b82f6' : '#2563eb');
  const green = getCssVar('--green') || (isDark ? '#10b981' : '#059669');
  const pink = getCssVar('--pink') || (isDark ? '#ec4899' : '#db2777');
  const yellow = getCssVar('--yellow') || (isDark ? '#facc15' : '#eab308');
  const text = getCssVar('--text') || (isDark ? '#e2e8f0' : '#1a202c');
  const textSecondary = getCssVar('--text-secondary') || (isDark ? '#94a3b8' : '#4a5568');

  const svgHtml = `
    <svg viewBox="0 0 1100 850" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; max-width:1200px; margin:0 auto; display:block;">
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(34, 211, 238, 0.05)" stroke-width="1"/>
        </pattern>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${cyan}" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${orange}" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${purple}" />
          <stop offset="100%" stop-color="#7c3aed" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${blue}" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${green}" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${pink}" />
          <stop offset="100%" stop-color="#db2777" />
        </linearGradient>
        <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${yellow}" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
        <marker id="linearArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <path d="M0 0 L7 3.5 L0 7" fill="none" stroke="white" stroke-width="1.5"/>
        </marker>
      </defs>
      <rect width="1100" height="850" fill="url(#grid)" />

      <!-- 业务代码层 -->
      <g class="arch-clickable" data-layer="business">
        <rect x="80" y="25" width="940" height="85" rx="12" fill="rgba(34, 211, 238, 0.05)" stroke="url(#cyanGrad)" stroke-width="1.8"/>
        <text x="550" y="58" text-anchor="middle" fill="${text}" font-size="20" font-weight="bold">业务代码层</text>
        <text x="550" y="80" text-anchor="middle" fill="${textSecondary}" font-size="12">定义业务流程、智能体意图、任务编排逻辑</text>
        <text x="550" y="97" text-anchor="middle" fill="${cyan}" font-size="11">上层业务无需感知底层框架细节</text>
      </g>
      <path d="M 550 110 L 550 145" stroke="${cyan}" stroke-width="1.8" marker-end="url(#linearArrow)"/>

      <!-- 适配抽象层 -->
      <g class="arch-clickable" data-layer="adapter">
        <rect x="80" y="155" width="940" height="85" rx="12" fill="rgba(249, 115, 22, 0.05)" stroke="url(#orangeGrad)" stroke-width="1.8"/>
        <text x="550" y="188" text-anchor="middle" fill="${text}" font-size="20" font-weight="bold">Orchestrator 适配抽象层</text>
        <text x="550" y="210" text-anchor="middle" fill="${textSecondary}" font-size="12">统一调用接口，屏蔽不同框架差异</text>
        <text x="550" y="227" text-anchor="middle" fill="${orange}" font-size="11">标准化入参、状态管理、异常回调</text>
      </g>
      <path d="M 550 240 L 550 275" stroke="${orange}" stroke-width="1.8" marker-end="url(#linearArrow)"/>

      <!-- 核心编排框架 -->
      <g class="arch-clickable" data-layer="orchestration">
        <rect x="80" y="285" width="940" height="165" rx="12" fill="rgba(168, 85, 247, 0.05)" stroke="url(#purpleGrad)" stroke-width="1.8"/>
        <text x="550" y="315" text-anchor="middle" fill="${text}" font-size="20" font-weight="bold">核心编排框架</text>
      </g>

      <!-- 子框架 LangChain -->
      <g class="arch-clickable" data-layer="langchain">
        <rect x="105" y="330" width="270" height="95" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="url(#blueGrad)" stroke-width="1.5"/>
        <text x="240" y="365" text-anchor="middle" fill="${text}" font-size="16" font-weight="600">LangChain / LangGraph</text>
        <text x="240" y="392" text-anchor="middle" fill="${textSecondary}" font-size="12">图编排、状态流转、复杂工作流</text>
      </g>

      <!-- 子框架 Claude -->
      <g class="arch-clickable" data-layer="claude">
        <rect x="415" y="330" width="270" height="95" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="url(#greenGrad)" stroke-width="1.5"/>
        <text x="550" y="365" text-anchor="middle" fill="${text}" font-size="16" font-weight="600">Claude Agent SDK</text>
        <text x="550" y="392" text-anchor="middle" fill="${textSecondary}" font-size="12">原生模型调用、轻量化智能体</text>
      </g>

      <!-- 子框架 pi-mono -->
      <g class="arch-clickable" data-layer="pi-mono">
        <rect x="725" y="330" width="270" height="95" rx="8" fill="rgba(236, 72, 153, 0.1)" stroke="url(#pinkGrad)" stroke-width="1.5"/>
        <text x="860" y="365" text-anchor="middle" fill="${text}" font-size="16" font-weight="600">pi-mono (Pi)</text>
        <text x="860" y="392" text-anchor="middle" fill="${textSecondary}" font-size="12">极简高性能、低代码智能体框架</text>
      </g>

      <!-- 编排框架到能力栈的箭头 -->
      <path d="M 550 450 L 550 478" stroke="${purple}" stroke-width="1.8" fill="none"/>
      <path d="M 240 478 L 550 478 L 860 478" stroke="${purple}" stroke-width="1.8" fill="none"/>
      <path d="M 240 478 L 240 488" stroke="${purple}" stroke-width="1.8" marker-end="url(#linearArrow)"/>
      <path d="M 550 478 L 550 488" stroke="${purple}" stroke-width="1.8" marker-end="url(#linearArrow)"/>
      <path d="M 860 478 L 860 488" stroke="${purple}" stroke-width="1.8" marker-end="url(#linearArrow)"/>

      <!-- Skills 能力层 -->
      <g class="arch-clickable" data-layer="skills">
        <rect x="80" y="498" width="300" height="110" rx="12" fill="rgba(34, 211, 238, 0.05)" stroke="url(#cyanGrad)" stroke-width="1.8"/>
        <text x="230" y="538" text-anchor="middle" fill="${text}" font-size="18" font-weight="bold">Skills 能力封装层</text>
        <text x="230" y="565" text-anchor="middle" fill="${textSecondary}" font-size="12">自定义技能、多步骤任务封装</text>
      </g>

      <!-- MCP 协议层 -->
      <g class="arch-clickable" data-layer="mcp">
        <rect x="400" y="498" width="300" height="110" rx="12" fill="rgba(168, 85, 247, 0.05)" stroke="url(#purpleGrad)" stroke-width="1.8"/>
        <text x="550" y="538" text-anchor="middle" fill="${text}" font-size="18" font-weight="bold">MCP 协议交互层</text>
        <text x="550" y="565" text-anchor="middle" fill="${textSecondary}" font-size="12">跨框架统一能力调用协议</text>
      </g>

      <!-- ToolCalling 工具调用层 -->
      <g class="arch-clickable" data-layer="toolcalling">
        <rect x="720" y="498" width="300" height="110" rx="12" fill="rgba(59, 130, 246, 0.05)" stroke="url(#blueGrad)" stroke-width="1.8"/>
        <text x="870" y="538" text-anchor="middle" fill="${text}" font-size="18" font-weight="bold">ToolCalling 工具调用层</text>
        <text x="870" y="565" text-anchor="middle" fill="${textSecondary}" font-size="12">外部API、检索、代码执行调度</text>
      </g>

      <!-- 能力栈到 LLM 的箭头 -->
      <path d="M 230 608 L 230 648" stroke="${cyan}" stroke-width="1.8" marker-end="url(#linearArrow)"/>
      <path d="M 550 608 L 550 648" stroke="${purple}" stroke-width="1.8" marker-end="url(#linearArrow)"/>
      <path d="M 870 608 L 870 648" stroke="${blue}" stroke-width="1.8" marker-end="url(#linearArrow)"/>

      <!-- LLM 模型服务层 -->
      <g class="arch-clickable" data-layer="llm">
        <rect x="80" y="658" width="940" height="85" rx="12" fill="rgba(250, 204, 21, 0.05)" stroke="url(#yellowGrad)" stroke-width="1.8"/>
        <text x="550" y="692" text-anchor="middle" fill="${text}" font-size="20" font-weight="bold">LLM 模型服务层</text>
        <text x="550" y="714" text-anchor="middle" fill="${textSecondary}" font-size="12">大语言模型推理、多模型路由、Token 调度</text>
        <text x="550" y="732" text-anchor="middle" fill="${yellow}" font-size="11">支持 OpenAI、Claude、Gemini、Llama 等主流模型</text>
      </g>
    </svg>
  `;

  contentArea.innerHTML = `<div class="arch-container" style="background: var(--card-bg); border-radius: 1.2rem; padding: 1rem; border: 1px solid var(--border);">${svgHtml}</div>`;

  // 绑定点击事件
  const archDetailMap = {
    business: { title: "业务代码层", content: "业务代码层是 AI Agent 应用的入口，负责定义业务流程、设置智能体的目标、编写任务编排逻辑。开发者在这一层描述“要做什么”，而不关心“怎么做”。典型工作包括：定义 Agent 角色（如客服、分析师）、设定工作流步骤（查询数据→分析结果→生成报告）、处理业务异常。这一层与具体框架解耦，方便后续迁移或升级底层技术。" },
    adapter: { title: "Orchestrator 适配抽象层", content: "适配抽象层作为统一调用接口，屏蔽了不同编排框架（LangChain、Claude SDK、pi-mono 等）的 API 差异。它提供了标准化的入参/出参格式、统一的状态管理机制、跨框架的异常回调处理。该层让上层业务代码可以无缝切换底层框架，例如从 LangGraph 迁移到 Claude SDK 时无需修改业务逻辑，只需更换适配器。" },
    orchestration: { title: "核心编排框架（整体）", content: "编排框架层是 AI Agent 的核心执行引擎，负责管理智能体的推理、工具调用、记忆存储和状态流转。该层集成了多种开源或商业框架，如 LangGraph（图编排）、Claude Agent SDK（原生高性能）、pi-mono（极简低代码）。开发者可根据场景选择最合适的框架，甚至混合使用。" },
    langchain: { title: "LangChain / LangGraph", content: "LangChain 是最流行的 AI 应用开发框架，提供链式调用、工具集成、记忆管理等模块。LangGraph 在其基础上增加了有向图编排能力，支持循环边、条件分支和状态检查点，适用于复杂的多步骤工作流（如 ReAct 循环、多轮检索）。两者都拥有庞大的生态（数百种集成）。" },
    claude: { title: "Claude Agent SDK", content: "Anthropic 官方推出的轻量级智能体框架，基于 Claude 模型原生构建。支持 MCP 协议、钩子系统（Hook）、文件/Shell 操作等。以“自治代理循环”为核心，开发者只需定义工具和提示词，Agent 自动规划并执行任务。适合需要深度依赖 Claude 模型的场景。" },
    "pi-mono": { title: "pi-mono (Pi)", content: "极致极简的 AI 引擎，默认仅提供 4 个内置工具，系统提示词不到 1000 token。设计哲学是“极简无限扩展”，不依赖 LangChain，通过模块化 npm 包支持 20+ 模型提供商。适用于对性能和资源占用有苛刻要求的嵌入式或终端智能体场景。" },
    skills: { title: "Skills 能力封装层", content: "Skills 层将原子操作（如发送邮件、查询数据库、调用 API）封装为可复用的“技能”。每个 Skill 包含输入校验、执行逻辑、错误处理和输出格式化。Agent 可以根据用户意图动态组合多个 Skill，实现复杂任务。该层也支持自定义业务技能，例如“生成周报技能”包含数据拉取、分析、排版等子步骤。" },
    mcp: { title: "MCP 协议交互层", content: "Model Context Protocol (MCP) 是一个开放标准，用于统一 AI 应用与外部工具、数据源之间的通信。MCP 层将工具的能力以标准化接口暴露，使得任何遵循 MCP 协议的 Agent 框架都能直接调用。该层大幅降低了工具接入成本，实现了框架与工具的解耦。" },
    toolcalling: { title: "ToolCalling 工具调用层", content: "ToolCalling 层负责执行 Agent 请求的具体工具函数。它处理工具的发现、参数解析、执行调度、结果返回。支持同步/异步调用、超时控制、重试策略和熔断机制。典型工具包括：外部 API（天气、地图）、向量检索（RAG）、代码解释器、数据库查询等。" },
    llm: { title: "LLM 模型服务层", content: "LLM 模型服务层是整个架构的智能底座，提供大语言模型的推理能力、多模型路由、Token 调度、成本监控等基础服务。该层封装了不同模型提供商（OpenAI、Anthropic、Google、Meta 等）的 API 差异，对外提供统一的推理接口，并支持模型热切换、负载均衡和流式输出。" }
  };

  document.querySelectorAll('.arch-clickable').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const layer = el.getAttribute('data-layer');
      const info = archDetailMap[layer];
      if (info) {
        modalInner.innerHTML = `<div class="framework-name">${info.title}</div><div style="margin-top:1rem;">${info.content}</div>`;
        modal.classList.add('active');
      }
    });
  });
}

  function renderRadar() {
  // 雷达图的 HTML 结构（基于原 selection_radar.html 的 .main-wrap 内容，但去掉页面标题和主题按钮）
  const radarHtml = `
    <div class="radar-container" style="background: var(--card-bg); border-radius: 1.2rem; padding: 1.5rem; border: 1px solid var(--border);">
      <div class="main-wrap" style="display: grid; grid-template-columns: 280px 1fr; gap: 24px;">
        <div class="select-panel" style="background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border); padding: 20px;">
          <div class="panel-title" style="font-size: 18px; font-weight: 600; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--border);">选择对比框架</div>
          <div class="frame-item" data-name="langgraph"><input type="checkbox" checked id="langgraph"> <label for="langgraph">LangChain / LangGraph</label></div>
          <div class="frame-item" data-name="claude"><input type="checkbox" id="claude"> <label for="claude">Claude Agent SDK</label></div>
          <div class="frame-item" data-name="pimono"><input type="checkbox" id="pimono"> <label for="pimono">pi-mono (Pi)</label></div>
          <div class="frame-item" data-name="googleadk"><input type="checkbox" id="googleadk"> <label for="googleadk">Google ADK</label></div>
          <div class="frame-item" data-name="openaiagent"><input type="checkbox" id="openaiagent"> <label for="openaiagent">OpenAI Agents SDK</label></div>
          <div class="frame-item" data-name="crewai"><input type="checkbox" id="crewai"> <label for="crewai">CrewAI</label></div>
          <div class="frame-item" data-name="agno"><input type="checkbox" id="agno"> <label for="agno">Agno</label></div>
        </div>
        <div class="chart-box" style="background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border); padding: 20px;">
          <canvas id="evalRadarChart" style="width:100%; height:auto; min-height: 260px;"></canvas>
        </div>
      </div>
    </div>
  `;
  contentArea.innerHTML = radarHtml;

  // 重新绑定复选框事件（因为 DOM 重新生成了）
  const dimensionInfo = [
    { label: '流程可靠性', desc: '生产环境容错率极低，框架必须保证流程按预期执行，不乱跑、不无限循环，具备强状态管理与确定性执行路径' },
    { label: '断点恢复', desc: '支持长时间任务自动存档，任务中断后可从最近节点恢复进度，满足长周期智能体业务刚性需求' },
    { label: '权限安全', desc: '可精细化管控工具调用权限，留存完整操作审计日志，敏感操作支持人工审批拦截' },
    { label: '可观测调试', desc: '具备全链路日志追踪、可视化调试能力，可回溯决策上下文，快速排查线上故障' },
    { label: '多模型兼容', desc: '兼容多家厂商大模型，无强制绑定限制，保障技术选型与商务议价灵活性' },
    { label: '生态扩展性', desc: '可无缝对接企业数据库、网关、内部业务系统，依托标准化协议降低集成改造成本' },
    { label: '人机协同', desc: '关键业务节点可暂停流转，支持人工审核、修正内容后继续执行流程' },
    { label: '社区稳定性', desc: '参考版本迭代频次、问题响应速度、落地案例规模，评估长期维护与填坑成本' }
  ];
  const dimensionLabels = dimensionInfo.map(item => item.label);

  const frameScoreData = {
    langgraph: { name: "LangChain/LangGraph", color: "rgba(124, 58, 237, 0.6)", borderColor: "#7c3aed", scores: [9, 9.5, 8.5, 9, 8, 9, 9, 9] },
    claude: { name: "Claude Agent SDK", color: "rgba(16, 185, 129, 0.6)", borderColor: "#10b981", scores: [8, 6, 7, 6.5, 6, 7, 5.5, 8.5] },
    pimono: { name: "pi-mono (Pi)", color: "rgba(236, 72, 153, 0.6)", borderColor: "#ec4899", scores: [7, 5, 6, 5, 8.5, 6.5, 5, 6] },
    googleadk: { name: "Google ADK", color: "rgba(59, 130, 246, 0.6)", borderColor: "#3b82f6", scores: [9, 8.5, 9, 8.5, 7, 9, 8, 8.5] },
    openaiagent: { name: "OpenAI Agents SDK", color: "rgba(220, 38, 38, 0.6)", borderColor: "#dc2626", scores: [8.5, 8, 9, 8.5, 5, 8, 9, 9] },
    crewai: { name: "CrewAI", color: "rgba(249, 115, 22, 0.6)", borderColor: "#f97316", scores: [8.5, 7, 7.5, 7, 7.5, 8, 8.5, 8.5] },
    agno: { name: "Agno", color: "rgba(23, 101, 211, 0.6)", borderColor: "#1765d3", scores: [8, 7.5, 7, 8, 8.5, 7.5, 7.5, 8] }
  };

  let radarChart = null;
  const checkboxes = document.querySelectorAll('.frame-item input[type="checkbox"]');

  function getCurrentThemeColors() {
    const isDark = document.body.classList.contains('dark');
    return {
      textColor: isDark ? '#f1f5f9' : '#1e293b',
      gridColor: 'rgba(148, 163, 184, 0.2)'
    };
  }

  function getCheckedDatasets() {
    const datasets = [];
    checkboxes.forEach(cb => {
      if (cb.checked) {
        const data = frameScoreData[cb.id];
        datasets.push({
          label: data.name, data: data.scores,
          backgroundColor: data.color, borderColor: data.borderColor,
          borderWidth: 2, pointRadius: 4
        });
      }
    });
    return datasets;
  }

  function initRadarChart() {
    const ctx = document.getElementById('evalRadarChart').getContext('2d');
    const colors = getCurrentThemeColors();
    radarChart = new Chart(ctx, {
      type: 'radar',
      data: { labels: dimensionLabels, datasets: getCheckedDatasets() },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            min: 0, max: 10, ticks: { stepSize: 2, backdropColor: 'transparent' },
            grid: { color: colors.gridColor },
            angleLines: { color: colors.gridColor },
            pointLabels: { color: colors.textColor, font: { size: 12 } }
          }
        },
        plugins: {
          legend: { position: 'top', labels: { color: colors.textColor, padding: 20 } },
          tooltip: {
            callbacks: {
              title: (ctx) => dimensionInfo[ctx[0].dataIndex].label,
              label: (ctx) => ['评分：' + ctx.raw, dimensionInfo[ctx.dataIndex].desc]
            }
          }
        }
      }
    });
  }

  function updateRadarChart() {
    if (!radarChart) return;
    const colors = getCurrentThemeColors();
    radarChart.options.scales.r.grid.color = colors.gridColor;
    radarChart.options.scales.r.angleLines.color = colors.gridColor;
    radarChart.options.scales.r.pointLabels.color = colors.textColor;
    radarChart.options.plugins.legend.labels.color = colors.textColor;
    radarChart.data.datasets = getCheckedDatasets();
    radarChart.update();
  }

  // 绑定复选框变化事件
  checkboxes.forEach(cb => cb.addEventListener('change', updateRadarChart));
  
  // 初始化图表
  initRadarChart();

  // 保存到全局变量，以便在深色模式切换时更新
  window.__radarChart = { update: updateRadarChart };
}

  
  
  function renderView() {
    if (!frameworkData.length) { contentArea.innerHTML = '<div class="loading-indicator">暂无数据</div>'; return; }
    if (currentView === 'cards') renderCards();
    else if (currentView === 'list') renderList();
    else if (currentView === 'matrix') renderMatrix();
    else if (currentView === 'scenarios') renderScenarios();
    else if (currentView === 'llm-freedom') renderLlmFreedom();
    else if (currentView === 'architecture') renderArchitecture();
    else if (currentView === 'radar') renderRadar();
  }

  function attachDetailEvents() {
    document.querySelectorAll('.detail-btn').forEach(btn=>btn.addEventListener('click',(e)=>showDetail(e.target.getAttribute('data-id'))));
  }

  document.getElementById('closeModalBtn').addEventListener('click',()=>modal.classList.remove('active'));
  modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('active');});
  document.querySelectorAll('#viewControls .view-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('#viewControls .view-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentView=btn.getAttribute('data-view');
      renderView();
    });
  });
  document.getElementById('refreshDataBtn').addEventListener('click',loadAllData);
  const darkToggle=document.getElementById('darkModeToggle');
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){ document.body.classList.add('dark'); darkToggle.textContent='☀️ 浅色模式'; }
  darkToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    darkToggle.textContent=document.body.classList.contains('dark')?'☀️ 浅色模式':'🌙 深色模式';
    if(currentView==='llm-freedom') renderLlmFreedom();
    if(currentView==='architecture') renderArchitecture();
    if(currentView==='radar' && window.__radarChart) window.__radarChart.update();
  });

  loadAllData();
  setInterval(loadAllData, 60*60*1000);
})();
