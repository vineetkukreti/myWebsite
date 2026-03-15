/**
 * Portfolio - Dark Terminal Theme
 * GitHub API integration + Dynamic content
 */

// ============================================
// GitHub API Configuration
// ============================================

// ============================================
// Device & Motion Detection
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const GITHUB_USERNAME = 'vineetkukreti';
const GITHUB_API_BASE = 'https://api.github.com';

// ============================================
// Portfolio Data
// ============================================

const portfolioData = {
  experiences: [
    {
      title: 'AI Engineer',
      company: 'Southguild Technologies',
      date: 'May 2024 - Present',
      description: 'Built production-grade healthcare AI platforms across dermatopathology and oncology.',
      bullets: [
        'Developed NLP-to-Cypher pipeline achieving 98.8% accuracy (88/89 queries) on Neo4j knowledge graph',
        'Designed unified ETL pipelines processing 100K+ biomedical records for cancer research',
        'Deployed scalable microservices using FastAPI and Docker, reducing clinician research time by 60%'
      ],
      current: true
    },
    {
      title: 'Machine Learning Intern',
      company: 'TEKNOCRAT SERVICES LIMITED',
      date: 'Apr - Aug 2024',
      description: 'Contributed to pivotal projects leveraging machine learning and computer vision skills.',
      bullets: [
        'Built ML models for image classification and object detection pipelines',
        'Collaborated on production computer vision workflows'
      ]
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg Inc.',
      date: 'Feb 2023 - Apr 2024',
      description: 'Provided expert knowledge and assistance in various subject areas.'
    },
    {
      title: 'Data Science Intern',
      company: 'Insignia Consultancy Solutions',
      date: 'Jul - Oct 2023',
      description: 'Gained hands-on experience in data science techniques and methodologies.'
    },
    {
      title: 'Teaching Assistant',
      company: 'Coding Ninjas',
      date: 'Feb - Mar 2023',
      description: 'Provided clear explanations and resolved programming doubts for 110+ students, receiving a rating of 4.67/5.'
    },
    {
      title: 'Web Developer',
      company: 'APhO 2022',
      date: 'Dec 2021 - Jun 2022',
      description: 'Created website for the Asian Physics Olympiad 2022, commissioned by the Indian government. Achieved top Google rankings.'
    }
  ],
  education: {
    degree: 'B.Tech (Hons.) in Computer Science Engineering',
    institution: 'Graphic Era University, Dehradun',
    date: 'Aug 2020 - Jun 2024',
    grade: '8.5 CGPA',
    specialization: 'Machine Learning & Artificial Intelligence'
  },
  achievements: [
    { text: 'Published 2 research papers in IEEE International Conferences on AI & Machine Learning', icon: 'fas fa-file-alt' },
    { text: 'Hold 3 patents in AI/ML applications developed during undergraduate research', icon: 'fas fa-lightbulb' },
    { text: 'Awarded PMSS Scholarship (Prime Minister\'s Scholarship Scheme) for academic excellence', icon: 'fas fa-award' },
    { text: 'Vice President, IEEE Student Branch at Graphic Era Hill University', icon: 'fas fa-users' },
    { text: 'Co-founder & Technical Head, Shikar Club — entrepreneurship & innovation community', icon: 'fas fa-rocket' },
    { text: 'Kaggle Notebooks Expert — published notebooks on water potability prediction (91% accuracy), MNIST deep learning, and NLP embeddings', icon: 'fab fa-kaggle' }
  ],
  skills: [
    { name: 'Python', icon: 'fab fa-python', highlight: false },
    { name: 'Machine Learning', icon: 'fas fa-brain', highlight: false },
    { name: 'Deep Learning', icon: 'fas fa-network-wired', highlight: false },
    { name: 'Healthcare AI', icon: 'fas fa-heartbeat', highlight: true },
    { name: 'NLP & LLMs', icon: 'fas fa-language', highlight: false },
    { name: 'RAG', icon: 'fas fa-robot', highlight: true },
    { name: 'Neo4j', icon: 'fas fa-project-diagram', highlight: false },
    { name: 'TensorFlow', icon: 'fab fa-google', highlight: false },
    { name: 'PyTorch', icon: 'fas fa-fire', highlight: false },
    { name: 'Computer Vision', icon: 'fas fa-eye', highlight: false },
    { name: 'Flask / FastAPI', icon: 'fas fa-flask', highlight: false },
    { name: 'Docker', icon: 'fab fa-docker', highlight: false },
    { name: 'PostgreSQL', icon: 'fas fa-database', highlight: false },
    { name: 'OpenAI / Claude', icon: 'fas fa-wand-magic-sparkles', highlight: true },
    { name: 'Kaggle Expert', icon: 'fab fa-kaggle', highlight: true }
  ],
  // Featured projects (Power Projects — merged for recruiter impact)
  featuredProjects: [
    {
      id: 'healthcare-ai',
      category: 'Healthcare AI',
      icon: 'fas fa-heartbeat',
      title: 'Healthcare AI Knowledge Platform',
      tagline: 'LLM + knowledge graph system enabling clinical insights and biomedical research.',
      description: 'End-to-end AI platform that extracts biomedical data from research databases, builds gene-pathway knowledge graphs in Neo4j, processes oncology patient records, and enables AI-powered clinical question answering with cited sources.',
      tags: ['Neo4j', 'RAG', 'LLM', 'Python', 'FastAPI', 'Claude', 'Cohere'],
      impact: '98.8% accuracy (88/89) | 5× faster retrieval',
      fullDescription: [
        'Built an end-to-end, clinician-validated healthcare AI platform that unifies dermatopathology retrieval, oncology data processing, and biomedical knowledge graph construction. The system was validated by clinicians and presented at a medical conference.',
        'Engineered an NLP-to-Cypher pipeline leveraging Cohere, Claude, and OpenAI for Neo4j knowledge graph queries — achieving 98.8% accuracy (88/89) and outperforming baseline LLM-only approaches. Enabled 5× faster clinical insight retrieval, reducing clinician research time by over 60%.',
        'Built unified ETL pipelines integrating heterogeneous biomedical databases to support gastric cancer drug-target discovery, modelling gene-protein-pathway-mutation interactions across 100K+ records. Reduced manual oncology data processing by 80% while improving biomedical data accessibility by 65%.'
      ],
      impactMetrics: [
        { value: '98.8%', label: 'Accuracy (88/89)', icon: 'fas fa-bullseye' },
        { value: '5×', label: 'Faster Retrieval', icon: 'fas fa-bolt' },
        { value: '100K+', label: 'Records Processed', icon: 'fas fa-dna' },
        { value: '80%', label: 'Less Manual Work', icon: 'fas fa-clock' }
      ],
      techStack: [
        { name: 'Python', category: 'Language' },
        { name: 'Neo4j', category: 'Graph DB' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'Claude', category: 'LLM' },
        { name: 'Cohere', category: 'Embeddings' },
        { name: 'LangChain', category: 'Framework' },
        { name: 'Docker', category: 'DevOps' }
      ],
      architectureSteps: [
        { label: 'Biomedical APIs', icon: 'fas fa-database' },
        { label: 'Async ETL Pipeline', icon: 'fas fa-cogs' },
        { label: 'PostgreSQL + Neo4j', icon: 'fas fa-project-diagram' },
        { label: 'Knowledge Graph', icon: 'fas fa-brain' },
        { label: 'LLM Query Engine', icon: 'fas fa-search' },
        { label: 'Clinical Insights', icon: 'fas fa-chart-line' }
      ],
      engineeringHighlights: [
        'Engineered NLP-to-Cypher pipeline leveraging Cohere, Claude, and OpenAI — 98.8% accuracy (88/89), outperforming baseline LLM-only approaches',
        'Enabled 5× faster clinical insight retrieval, reducing clinician research time by over 60%',
        'Built unified ETL pipeline integrating heterogeneous biomedical databases for gastric cancer drug-target discovery across 100K+ records',
        'Modeled end-to-end gene interaction journeys across proteins, pathways, DNA elements, mutations, and regulatory mechanisms',
        'System validated by clinicians and presented at a medical conference; deployed as production microservice architecture'
      ],
      seniorSignals: [
        { label: 'AI Engineering', icon: 'fas fa-robot' },
        { label: 'Data Engineering', icon: 'fas fa-database' },
        { label: 'Knowledge Graphs', icon: 'fas fa-project-diagram' },
        { label: 'Healthcare Domain', icon: 'fas fa-heartbeat' },
        { label: 'System Architecture', icon: 'fas fa-sitemap' }
      ],
      demoVideo: 'assets/medicare_demo.webm'
    },
    {
      id: 'enterprise-rag',
      category: 'Enterprise AI',
      icon: 'fas fa-search',
      title: 'Enterprise RAG Knowledge System',
      tagline: 'Production-grade enterprise AI search platform for internal document intelligence.',
      description: 'Multi-model RAG system that ingests enterprise documents from SharePoint, enforces permission-based access controls, and answers questions using LLMs with real-time streaming responses.',
      tags: ['FastAPI', 'Vector DB', 'OpenAI', 'Reranking', 'SharePoint'],
      impact: 'Hours → seconds | Permission-aware search',
      fullDescription: [
        'Designed and built a production-grade enterprise search platform that transforms how organizations find and use their internal knowledge. The system ingests documents from SharePoint and other enterprise sources, maintaining permission-based access controls throughout the entire retrieval pipeline.',
        'The platform features a multi-model LLM pipeline across 4 AI providers: documents are chunked intelligently, embedded using state-of-the-art models, stored in a vector database, and retrieved using a reranking strategy that dramatically improves relevance over basic vector search.',
        'Reduced document retrieval time from hours to seconds. Real-time streaming responses give users immediate feedback, while permission-aware search ensures employees only access documents they are authorized to view — a critical enterprise compliance requirement.'
      ],
      impactMetrics: [
        { value: 'Hours→Sec', label: 'Retrieval Speed', icon: 'fas fa-bolt' },
        { value: '100%', label: 'Permission-Aware', icon: 'fas fa-shield-alt' },
        { value: '4', label: 'AI Providers', icon: 'fas fa-layer-group' },
        { value: 'Real-time', label: 'Streaming', icon: 'fas fa-stream' }
      ],
      techStack: [
        { name: 'Python', category: 'Language' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'OpenAI', category: 'LLM' },
        { name: 'Cohere', category: 'Reranking' },
        { name: 'Pinecone', category: 'Vector DB' },
        { name: 'SharePoint', category: 'Source' },
        { name: 'Redis', category: 'Cache' },
        { name: 'Docker', category: 'DevOps' }
      ],
      architectureSteps: [
        { label: 'SharePoint Docs', icon: 'fas fa-file-alt' },
        { label: 'Ingestion Pipeline', icon: 'fas fa-download' },
        { label: 'Chunking + Embed', icon: 'fas fa-cut' },
        { label: 'Vector DB', icon: 'fas fa-database' },
        { label: 'Reranking', icon: 'fas fa-sort-amount-up' },
        { label: 'LLM Generation', icon: 'fas fa-robot' }
      ],
      engineeringHighlights: [
        'Implemented permission-aware vector search — access controls flow from SharePoint through the entire retrieval pipeline',
        'Built multi-model orchestration layer supporting OpenAI, Claude, and open-source models with automatic fallback',
        'Designed intelligent chunking strategy that preserves document structure and cross-references',
        'Created real-time streaming pipeline delivering tokens to the UI as they are generated',
        'Achieved sub-second retrieval across 100K+ document corpus with Cohere reranking'
      ],
      seniorSignals: [
        { label: 'RAG Architecture', icon: 'fas fa-brain' },
        { label: 'LLM Orchestration', icon: 'fas fa-robot' },
        { label: 'Enterprise Systems', icon: 'fas fa-building' },
        { label: 'Search Infrastructure', icon: 'fas fa-search' },
        { label: 'Security & Permissions', icon: 'fas fa-shield-alt' }
      ]
    },
    {
      id: 'data-intelligence',
      category: 'Data Intelligence',
      icon: 'fas fa-chart-bar',
      title: 'AI-Powered Data Intelligence Platform',
      tagline: 'AI-assisted data processing and procurement analytics platform.',
      description: 'Enterprise platform that ingests messy data files, normalizes schemas using AI-powered header detection, and performs real-time analytics with 20+ modules and streaming insights.',
      tags: ['FastAPI', 'PostgreSQL', 'DuckDB', 'Pandas', 'Claude AI'],
      impact: '100MB+ datasets | 70% less manual prep',
      fullDescription: [
        'Built an enterprise data platform that transforms messy, inconsistent data files into clean, analyzable datasets. The system uses AI-powered header detection to automatically identify column types, data formats, and schema structures — eliminating hours of manual data preparation.',
        'The platform supports 20+ analytics modules covering statistical analysis, trend detection, anomaly identification, and predictive modeling. A streaming analytics engine processes data in real-time, delivering insights progressively as they are computed rather than waiting for batch completion.',
        'Processed 100MB+ enterprise datasets from multiple sources with inconsistent formatting. Reduced manual data preparation time by 70% and achieved sub-second analytics queries using DuckDB\'s columnar engine.'
      ],
      impactMetrics: [
        { value: '100MB+', label: 'Dataset Scale', icon: 'fas fa-database' },
        { value: '20+', label: 'Analytics Modules', icon: 'fas fa-chart-pie' },
        { value: '70%', label: 'Less Manual Prep', icon: 'fas fa-magic' },
        { value: 'Sub-sec', label: 'Query Speed', icon: 'fas fa-bolt' }
      ],
      techStack: [
        { name: 'Python', category: 'Language' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'DuckDB', category: 'Analytics' },
        { name: 'Pandas', category: 'Data' },
        { name: 'Claude AI', category: 'LLM' },
        { name: 'Redis', category: 'Queue' },
        { name: 'Docker', category: 'DevOps' }
      ],
      architectureSteps: [
        { label: 'Enterprise Files', icon: 'fas fa-file-upload' },
        { label: 'AI Header Detection', icon: 'fas fa-magic' },
        { label: 'Schema Normalization', icon: 'fas fa-table' },
        { label: 'Data Warehouse', icon: 'fas fa-warehouse' },
        { label: 'Analytics Engine', icon: 'fas fa-calculator' },
        { label: 'Streaming Insights', icon: 'fas fa-chart-line' }
      ],
      engineeringHighlights: [
        'Built AI-powered header detection that correctly identifies column types and schemas from messy enterprise files',
        'Designed schema normalization pipeline that handles 50+ different file formats and encodings',
        'Implemented DuckDB-based analytics engine for in-process analytical queries at columnar speeds',
        'Created streaming insights pipeline — analytics results are delivered progressively as they compute',
        'Achieved 70% reduction in manual data preparation time across enterprise client datasets'
      ],
      seniorSignals: [
        { label: 'Data Engineering', icon: 'fas fa-database' },
        { label: 'Backend Systems', icon: 'fas fa-server' },
        { label: 'Enterprise Automation', icon: 'fas fa-cogs' },
        { label: 'Analytics Infrastructure', icon: 'fas fa-chart-bar' },
        { label: 'AI Integration', icon: 'fas fa-robot' }
      ]
    },
    {
      id: 'forecasting',
      category: 'Machine Learning',
      icon: 'fas fa-chart-line',
      title: 'AI Forecasting & Decision Intelligence',
      tagline: 'ML pipeline for enterprise demand forecasting with automated model optimization.',
      description: 'Forecasting pipeline that trains demand prediction models with automatic hyperparameter tuning, reduces 5,000 models to 50 via intelligent clustering, and integrates with enterprise ERP systems.',
      tags: ['Python', 'statsmodels', 'pmdarima', 'multiprocessing'],
      impact: '75% faster training | 5K → 50 models',
      fullDescription: [
        'Designed and built an ML pipeline that automates enterprise demand forecasting, replacing a manual process that required data scientists to individually tune thousands of time-series models across product-location combinations.',
        'The system uses automatic hyperparameter tuning via pmdarima\'s auto-ARIMA to find optimal model parameters. Parallel model training using Python\'s multiprocessing reduced training time by 75%. Intelligent model clustering reduced the model count from 5,000 to 50 representative models while maintaining >95% forecast accuracy.',
        'Enabled scalable product demand forecasting integrated with enterprise ERP systems. Dramatically reduced infrastructure costs and maintenance overhead through automated retraining triggers and drift detection.'
      ],
      impactMetrics: [
        { value: '75%', label: 'Faster Training', icon: 'fas fa-tachometer-alt' },
        { value: '5K→50', label: 'Model Reduction', icon: 'fas fa-compress-arrows-alt' },
        { value: '>95%', label: 'Accuracy', icon: 'fas fa-check-circle' },
        { value: 'Auto', label: 'Hyperparameter Tuning', icon: 'fas fa-sliders-h' }
      ],
      techStack: [
        { name: 'Python', category: 'Language' },
        { name: 'statsmodels', category: 'ML' },
        { name: 'pmdarima', category: 'AutoML' },
        { name: 'Pandas', category: 'Data' },
        { name: 'multiprocessing', category: 'Compute' },
        { name: 'NumPy', category: 'Math' },
        { name: 'Matplotlib', category: 'Viz' }
      ],
      architectureSteps: [
        { label: 'ERP Data', icon: 'fas fa-database' },
        { label: 'Preprocessing', icon: 'fas fa-filter' },
        { label: 'Auto-ARIMA Training', icon: 'fas fa-brain' },
        { label: 'Model Evaluation', icon: 'fas fa-balance-scale' },
        { label: 'Forecast Generation', icon: 'fas fa-chart-line' },
        { label: 'Business Insights', icon: 'fas fa-file-alt' }
      ],
      engineeringHighlights: [
        'Implemented automatic hyperparameter tuning using pmdarima auto-ARIMA across thousands of time series',
        'Built parallel model training pipeline using Python multiprocessing — 75% faster than sequential approach',
        'Designed intelligent model clustering that reduced 5,000 individual models to 50 representative ones',
        'Created model evaluation framework with automated accuracy benchmarking and drift detection',
        'Deployed production pipeline processing ERP data feeds with automated retraining triggers'
      ],
      seniorSignals: [
        { label: 'ML Engineering', icon: 'fas fa-brain' },
        { label: 'Time-Series Analysis', icon: 'fas fa-chart-line' },
        { label: 'Performance Optimization', icon: 'fas fa-tachometer-alt' },
        { label: 'Enterprise Integration', icon: 'fas fa-plug' },
        { label: 'MLOps', icon: 'fas fa-infinity' }
      ]
    }
  ],
  patents: [
    {
      title: "FIRE RENDER MODEL",
      number: "202211059773 A",
      description: "Real-time forest fire detection system using What Three Words technology for accurate location and swift response.",
      tags: ["AI", "Safety"]
    },
    {
      title: "SUPERB: VISION TOOL",
      number: "202211059770 A",
      description: "Smart glasses with AI technology to provide real-time data and navigation assistance for visually impaired individuals.",
      tags: ["Assistive Tech", "CV"]
    },
    {
      title: "Water Breeze Model",
      number: "202211004912 A",
      description: "Revolutionary system that harnesses condensation to provide a sustainable source of clean drinking water from sea or air.",
      tags: ["Sustainability", "IoT"]
    }
  ],
  // All 8 individual projects (for "See All Projects" view)
  allProjects: [
    {
      title: 'PathAssist / DermaPath',
      category: 'Healthcare AI',
      description: 'AI dermatopathology knowledge system using LLMs + Neo4j knowledge graph. Achieved 98.8% accuracy, 5x faster retrieval for clinicians.',
      metrics: ['98.8% Accuracy', '5x Faster', '60% Less Research Time'],
      tags: ['Neo4j', 'Claude', 'FastAPI', 'Cohere'],
      featuredId: 'healthcare-ai'
    },
    {
      title: 'Navya Medical AI Pipeline',
      category: 'Healthcare AI',
      description: 'AI system extracting and structuring oncology patient data from clinical reports. Reduced manual processing by 80%, automated 100+ clinical fields.',
      metrics: ['80% Less Manual Work', '100+ Fields Extracted'],
      tags: ['Claude AI', 'MongoDB', 'Neo4j', 'Pandas']
    },
    {
      title: 'Target Discovery Biomedical ETL',
      category: 'Healthcare AI',
      description: 'High-scale ETL system building a biomedical knowledge graph for cancer research. Integrated 5+ databases, processed 100K+ records with 96%+ success rate.',
      metrics: ['100K+ Records', '96%+ Success', '5+ Databases'],
      tags: ['asyncio', 'PostgreSQL', 'Neo4j']
    },
    {
      title: 'SharePoint Enterprise RAG System',
      category: 'Enterprise AI',
      description: 'Enterprise AI assistant answering questions from internal documents with permission-aware vector search and real-time streaming.',
      metrics: ['Hours \u2192 Seconds', 'Permission-Aware'],
      tags: ['FastAPI', 'Vector DB', 'OpenAI', 'Reranking'],
      featuredId: 'enterprise-rag'
    },
    {
      title: 'MAB Intelligence Analytics',
      category: 'Data Engineering',
      description: 'AI-powered procurement analytics processing 100MB+ datasets. Sub-second queries via Parquet streaming, 20+ analytics modules.',
      metrics: ['100MB+ Datasets', '20+ Analytics Modules', '60-70% Less Prep'],
      tags: ['DuckDB', 'FastAPI', 'Claude AI'],
      featuredId: 'data-intelligence'
    },
    {
      title: 'Asian Pacific Excel Automation',
      category: 'Data Engineering',
      description: 'Enterprise tool converting complex financial Excel master sheets into 16 bank-specific formats. Hours to seconds processing time.',
      metrics: ['16 Bank Formats', '20+ Sheet Master'],
      tags: ['Pandas', 'OpenPyXL', 'FastAPI']
    },
    {
      title: 'MediCareAI Healthcare Platform',
      category: 'Enterprise AI',
      description: 'Full-stack AI healthcare system with medical chat, report analysis, and health insights. 60+ APIs, 12 backend modules, Apple Health integration.',
      metrics: ['60+ APIs', '12 Modules', 'Real-time Streaming'],
      tags: ['Qdrant', 'Gemini', 'FastAPI', 'Cohere']
    },
    {
      title: 'ARIMA Product Forecasting',
      category: 'ML Systems',
      description: 'ML system forecasting product demand using time series models. Reduced training time 75%, model count from 5000 to 50 with >95% accuracy.',
      metrics: ['75% Faster Training', '5K \u2192 50 Models', '>95% Accuracy'],
      tags: ['statsmodels', 'pmdarima', 'multiprocessing'],
      featuredId: 'forecasting'
    }
  ]
};

// ============================================
// GitHub API Functions
// ============================================

async function fetchGitHubProfile() {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('GitHub API error');
    const data = await response.json();

    document.getElementById('gh-repos').textContent = data.public_repos;

    const viewAllBtn = document.querySelector('.github-repos-link');
    if (viewAllBtn) {
      viewAllBtn.innerHTML = `<i class="fab fa-github"></i> View All ${data.public_repos} Repositories <i class="fas fa-arrow-right"></i>`;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch GitHub profile:', error);
    document.getElementById('gh-repos').textContent = '74';
  }
}

// ============================================
// Interactive Terminal Effect
// ============================================

function interactiveTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  const commands = [
    { cmd: 'vineet --role', response: 'AI/ML Engineer' },
    { cmd: 'vineet --impact', response: '98.8% accuracy \u00b7 3 patents \u00b7 100K+ records' },
    { cmd: 'vineet --domains', response: 'Healthcare AI \u00b7 Data Intelligence \u00b7 Enterprise Automation' }
  ];

  let cmdIndex = 0;

  function typeCommand(text, container, callback) {
    let i = 0;
    const span = document.createElement('span');
    span.className = 'terminal-typed';
    container.appendChild(span);
    function next() {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
        setTimeout(next, 60);
      } else {
        callback();
      }
    }
    next();
  }

  function showResponse(text, callback) {
    const line = document.createElement('div');
    line.className = 'terminal-response';
    line.textContent = text;
    body.appendChild(line);
    setTimeout(callback, 800);
  }

  function runCommand() {
    if (cmdIndex >= commands.length) {
      // Add blinking cursor at end and restart after delay
      const cursorLine = document.createElement('div');
      cursorLine.className = 'terminal-line';
      cursorLine.innerHTML = '<span class="terminal-prompt">> </span><span class="terminal-cursor">|</span>';
      body.appendChild(cursorLine);
      setTimeout(() => {
        body.innerHTML = '';
        cmdIndex = 0;
        runCommand();
      }, 4000);
      return;
    }

    const { cmd, response } = commands[cmdIndex];
    const line = document.createElement('div');
    line.className = 'terminal-line';
    const prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = '> ';
    line.appendChild(prompt);
    body.appendChild(line);

    typeCommand(cmd, line, () => {
      setTimeout(() => {
        showResponse(response, () => {
          cmdIndex++;
          runCommand();
        });
      }, 300);
    });
  }

  runCommand();
}

// ============================================
// Animated Counters
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const isDecimal = target % 1 !== 0;
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ============================================
// Populate Skills
// ============================================

function populateSkills() {
  const skillsContainer = document.getElementById('skills-grid');
  if (!skillsContainer) return;

  const mid = Math.ceil(portfolioData.skills.length / 2);
  const row1 = portfolioData.skills.slice(0, mid);
  const row2 = portfolioData.skills.slice(mid);

  skillsContainer.innerHTML = `
    <div class="skills-row">
      ${row1.map(skill => `
        <div class="skill-pill${skill.highlight ? ' highlight' : ''}">
          <i class="${skill.icon}"></i>
          <span class="skill-name">${skill.name}</span>
        </div>
      `).join('')}
    </div>
    <div class="skills-row">
      ${row2.map(skill => `
        <div class="skill-pill${skill.highlight ? ' highlight' : ''}">
          <i class="${skill.icon}"></i>
          <span class="skill-name">${skill.name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================
// Populate Featured Projects
// ============================================

function populateFeaturedProjects() {
  const container = document.getElementById('featured-grid');
  if (!container) return;

  container.innerHTML = portfolioData.featuredProjects.map((project, i) => `
    <button class="featured-card" data-project="${project.id}" aria-label="View details for ${project.title}">
      <div class="featured-card-header">
        <span class="featured-category">
          <i class="${project.icon}"></i> ${project.category}
        </span>
        <span class="featured-number">0${i + 1}</span>
      </div>
      <h3 class="featured-card-title">${project.title}</h3>
      <p class="featured-card-desc">${project.tagline}</p>
      <div class="featured-card-impact-row">
        ${project.impactMetrics.slice(0, 2).map(m => `
          <span class="featured-metric"><i class="${m.icon}"></i> ${m.value} ${m.label}</span>
        `).join('')}
      </div>
      <div class="featured-card-tags">
        ${project.tags.slice(0, 5).map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="featured-card-footer">
        <span class="featured-view-hint">View Full Case Study <i class="fas fa-arrow-right"></i></span>
      </div>
    </button>
  `).join('');

  container.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
      const project = portfolioData.featuredProjects.find(p => p.id === card.dataset.project);
      if (project) openProjectModal(project);
    });
  });
}

// ============================================
// Project Detail Modal
// ============================================

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  populateModal(project);
  modal.classList.remove('hidden');
  document.body.classList.add('body-no-scroll');
  history.pushState({ modal: true }, '', `#project-${project.id}`);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal || modal.classList.contains('hidden')) return;

  modal.classList.add('hidden');
  document.body.classList.remove('body-no-scroll');

  if (history.state && history.state.modal) {
    history.back();
  }
}

function populateModal(project) {
  document.getElementById('modal-category').innerHTML =
    `<i class="${project.icon}"></i> ${project.category}`;
  document.getElementById('modal-title').textContent = project.title;

  document.getElementById('modal-metrics').innerHTML = project.impactMetrics.map(m => `
    <div class="metric-card">
      <i class="${m.icon}"></i>
      <span class="metric-value">${m.value}</span>
      <span class="metric-label">${m.label}</span>
    </div>
  `).join('');

  document.getElementById('modal-description').innerHTML =
    project.fullDescription.map(p => `<p>${p}</p>`).join('');

  document.getElementById('modal-tech').innerHTML = project.techStack.map(t => `
    <span class="tech-pill">
      <span class="tech-name">${t.name}</span>
      <span class="tech-category">${t.category}</span>
    </span>
  `).join('');

  document.getElementById('modal-architecture').innerHTML = project.architectureSteps.map((step, i) => `
    <div class="arch-step">
      <div class="arch-icon"><i class="${step.icon}"></i></div>
      <span class="arch-label">${step.label}</span>
    </div>
    ${i < project.architectureSteps.length - 1 ? '<div class="arch-arrow"><i class="fas fa-chevron-right"></i></div>' : ''}
  `).join('');

  document.getElementById('modal-highlights').innerHTML = project.engineeringHighlights.map(h => `
    <div class="highlight-item">
      <span class="highlight-marker">></span>
      <span>${h}</span>
    </div>
  `).join('');

  document.getElementById('modal-signals').innerHTML = project.seniorSignals.map(s => `
    <span class="signal-pill">
      <i class="${s.icon}"></i>
      <span>${s.label}</span>
    </span>
  `).join('');

  // Handle demo video section
  const demoSection = document.getElementById('modal-demo-section');
  const demoContainer = document.getElementById('modal-demo');
  if (project.demoVideo) {
    demoSection.classList.remove('hidden');
    demoContainer.innerHTML = `
      <video class="demo-video" controls preload="metadata">
        <source src="${project.demoVideo}" type="video/webm">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    demoSection.classList.add('hidden');
    demoContainer.innerHTML = '';
  }
}

function setupProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-close').addEventListener('click', closeProjectModal);
  document.getElementById('modal-overlay').addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  window.addEventListener('popstate', () => {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.classList.remove('body-no-scroll');
    }
  });
}

// ============================================
// All Projects View
// ============================================

function populateAllProjects(filter = 'all') {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;

  const projects = filter === 'all'
    ? portfolioData.allProjects
    : portfolioData.allProjects.filter(p => p.category === filter);

  grid.innerHTML = projects.map((project, i) => {
    const num = String(portfolioData.allProjects.indexOf(project) + 1).padStart(2, '0');
    const clickable = project.featuredId ? ` data-featured="${project.featuredId}"` : '';
    return `
      <div class="all-project-card${project.featuredId ? ' clickable' : ''}" data-category="${project.category}"${clickable}>
        <div class="all-project-card-header">
          <span class="featured-category"><i class="fas fa-folder"></i> ${project.category}</span>
          <span class="all-project-card-number">${num}</span>
        </div>
        <h3 class="all-project-card-title">${project.title}</h3>
        <p class="all-project-card-desc">${project.description}</p>
        <div class="all-project-card-metrics">
          ${project.metrics.map(m => `<span class="all-project-metric">${m}</span>`).join('')}
        </div>
        <div class="all-project-card-tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${project.featuredId ? '<div class="all-project-card-footer"><span class="featured-view-hint">View Case Study <i class="fas fa-arrow-right"></i></span></div>' : ''}
      </div>
    `;
  }).join('');

  // Wire clickable cards to open featured project modals
  grid.querySelectorAll('.all-project-card[data-featured]').forEach(card => {
    card.addEventListener('click', () => {
      const featured = portfolioData.featuredProjects.find(p => p.id === card.dataset.featured);
      if (featured) {
        closeAllProjects();
        setTimeout(() => openProjectModal(featured), 350);
      }
    });
  });
}

function openAllProjects() {
  const view = document.getElementById('all-projects-view');
  if (!view) return;

  populateAllProjects('all');
  view.classList.remove('hidden');
  document.body.classList.add('body-no-scroll');
  history.pushState({ allProjects: true }, '', '#all-projects');
}

function closeAllProjects() {
  const view = document.getElementById('all-projects-view');
  if (!view || view.classList.contains('hidden')) return;

  view.classList.add('hidden');
  document.body.classList.remove('body-no-scroll');

  if (history.state && history.state.allProjects) {
    history.back();
  }
}

function setupAllProjects() {
  const openBtn = document.getElementById('see-all-projects-btn');
  const closeBtn = document.getElementById('all-projects-close');
  const contactBtn = document.getElementById('all-projects-contact');
  const filtersContainer = document.getElementById('all-projects-filters');

  if (openBtn) openBtn.addEventListener('click', openAllProjects);
  if (closeBtn) closeBtn.addEventListener('click', closeAllProjects);
  if (contactBtn) contactBtn.addEventListener('click', closeAllProjects);

  if (filtersContainer) {
    filtersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      populateAllProjects(btn.dataset.filter);
    });
  }

  // Handle popstate for browser back
  window.addEventListener('popstate', () => {
    const view = document.getElementById('all-projects-view');
    if (view && !view.classList.contains('hidden')) {
      view.classList.add('hidden');
      document.body.classList.remove('body-no-scroll');
    }
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    const view = document.getElementById('all-projects-view');
    if (e.key === 'Escape' && view && !view.classList.contains('hidden')) {
      closeAllProjects();
    }
  });
}

// ============================================
// Populate Experience
// ============================================

function populateExperience() {
  const experienceContainer = document.getElementById('experience-list');
  if (!experienceContainer) return;

  experienceContainer.innerHTML = portfolioData.experiences.map(exp => `
    <div class="experience-item${exp.current ? ' experience-current' : ''}">
      <div class="experience-left">
        <div class="experience-date">
          ${exp.date}
          ${exp.current ? '<span class="experience-current-badge">CURRENT</span>' : ''}
        </div>
        <div class="experience-company">${exp.company}</div>
      </div>
      <div class="experience-right">
        <h3 class="experience-title">${exp.title}</h3>
        <p class="experience-description">${exp.description}</p>
        ${exp.bullets ? `
          <ul class="experience-bullets">
            ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// ============================================
// Populate Patents
// ============================================

function populatePatents() {
  const patentsContainer = document.getElementById('patents-grid');
  if (!patentsContainer) return;

  patentsContainer.innerHTML = portfolioData.patents.map(patent => `
    <div class="patent-card">
      <div class="patent-badge">
        <span>Patent Pending</span>
      </div>
      <h3 class="patent-title">${patent.title}</h3>
      <p class="patent-description">${patent.description}</p>
      <span class="patent-number">${patent.number}</span>
    </div>
  `).join('');
}

// ============================================
// Populate Education & Achievements
// ============================================

function populateEducation() {
  const container = document.getElementById('education-content');
  if (!container) return;

  const edu = portfolioData.education;
  const achievements = portfolioData.achievements;

  container.innerHTML = `
    <div class="education-card">
      <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
      <div class="edu-details">
        <h3 class="edu-degree">${edu.degree}</h3>
        <p class="edu-institution">${edu.institution}</p>
        <div class="edu-meta">
          <span class="edu-date"><i class="fas fa-calendar"></i> ${edu.date}</span>
          <span class="edu-grade"><i class="fas fa-star"></i> ${edu.grade}</span>
        </div>
        <span class="edu-specialization">${edu.specialization}</span>
      </div>
    </div>
    <div class="achievements-grid">
      ${achievements.map(a => `
        <div class="achievement-item">
          <div class="achievement-icon"><i class="${a.icon}"></i></div>
          <span>${a.text}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================
// Smooth Scroll
// ============================================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// Mobile Menu
// ============================================

function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuOverlay = document.getElementById('close-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  const closeMenu = () => {
    mobileMenu?.classList.add('hidden');
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMenuOverlay) {
    closeMenuOverlay.addEventListener('click', closeMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// Contact Form Handler (EmailJS)
// ============================================

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    const templateParams = {
      from_name: form.querySelector('input[type="text"]').value,
      from_email: form.querySelector('input[type="email"]').value,
      message: form.querySelector('textarea').value,
      to_name: 'Vineet'
    };

    emailjs.send('service_04j55t8', 'template_iwfx0dp', templateParams)
      .then(function () {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
        submitBtn.classList.add('btn-success');
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-success', 'btn-error');
        }, 3000);
      }, function (error) {
        console.error('FAILED...', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to Send';
        submitBtn.classList.add('btn-error');

        alert('Failed to send message. Please try again later or contact me directly at vineetkukreti34@gmail.com');

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-success', 'btn-error');
        }, 3000);
      });
  });
}

// ============================================
// Theme Switcher
// ============================================

function setupThemeSwitcher() {
  const toggle = document.getElementById('theme-toggle');
  const dropdown = document.getElementById('theme-dropdown');
  if (!toggle || !dropdown) return;

  // Load saved theme
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) {
    document.body.setAttribute('data-theme', saved);
    dropdown.querySelectorAll('.theme-swatch').forEach(s => {
      s.classList.toggle('active', s.dataset.theme === saved);
    });
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  dropdown.addEventListener('click', (e) => {
    const swatch = e.target.closest('.theme-swatch');
    if (!swatch) return;

    const theme = swatch.dataset.theme;
    if (theme === 'cyan') {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('portfolio-theme');
    } else {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    }

    dropdown.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    dropdown.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
  });
}

// ============================================
// Scroll Spy (Active Nav State)
// ============================================

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

// ============================================
// Back to Top Button
// ============================================

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// Scroll Progress Bar
// ============================================

function setupScrollProgress() {
  if (prefersReducedMotion) return;

  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ============================================
// Cursor Glow Spotlight
// ============================================

function setupCursorGlow() {
  if (!isDesktop || prefersReducedMotion) return;

  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let rafId = null;
  document.addEventListener('mousemove', (e) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      glow.style.setProperty('--glow-x', e.clientX + 'px');
      glow.style.setProperty('--glow-y', e.clientY + 'px');
      if (!glow.classList.contains('active')) glow.classList.add('active');
      rafId = null;
    });
  }, { passive: true });

  document.addEventListener('mouseleave', () => glow.classList.remove('active'));
}

// ============================================
// 3D Tilt Cards
// ============================================

function setupTiltCards() {
  if (!isDesktop || prefersReducedMotion) return;

  const cards = document.querySelectorAll('.featured-card');
  const MAX_TILT = 5;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('tilting'));

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -MAX_TILT;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * MAX_TILT;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('tilting');
      card.style.transform = '';
    });
  });
}

// ============================================
// Magnetic Hover Buttons
// ============================================

function setupMagneticButtons() {
  if (!isDesktop || prefersReducedMotion) return;

  const MAX_DIST = 40;
  const MAX_MOVE = 4;

  document.addEventListener('mousemove', (e) => {
    const btn = e.target.closest('.btn-primary');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MAX_DIST) {
      const strength = 1 - dist / MAX_DIST;
      btn.style.transform = `translate(${dx * strength * MAX_MOVE / MAX_DIST}px, ${dy * strength * MAX_MOVE / MAX_DIST - 2}px)`;
      btn.classList.add('magnetic-active');
    }
  }, { passive: true });

  document.addEventListener('mouseleave', (e) => {
    const btn = e.target.closest('.btn-primary');
    if (btn) {
      btn.style.transform = '';
      btn.classList.remove('magnetic-active');
    }
  }, true);

  // Reset on mouseout from buttons
  document.addEventListener('mouseout', (e) => {
    const btn = e.target.closest('.btn-primary');
    if (btn && !btn.contains(e.relatedTarget)) {
      btn.style.transform = '';
      btn.classList.remove('magnetic-active');
    }
  }, { passive: true });
}

// ============================================
// Text Scramble on Section Titles
// ============================================

function setupTextScramble() {
  if (prefersReducedMotion) return;

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const FRAMES_PER_CHAR = 3;

  function scramble(el) {
    const original = el.getAttribute('data-scramble');
    if (!original) return;
    const len = original.length;
    const totalFrames = len * FRAMES_PER_CHAR;
    let frame = 0;

    function tick() {
      let out = '';
      const resolved = Math.floor((frame / totalFrames) * len);
      for (let i = 0; i < len; i++) {
        if (i < resolved) out += original[i];
        else if (original[i] === ' ') out += ' ';
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      frame++;
      if (frame <= totalFrames) requestAnimationFrame(tick);
      else el.textContent = original;
    }
    requestAnimationFrame(tick);
  }

  const titles = document.querySelectorAll('.section-title');
  titles.forEach(t => t.setAttribute('data-scramble', t.textContent));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scramble(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5, rootMargin: '0px 0px -100px 0px' });

  titles.forEach(t => observer.observe(t));
}

// ============================================
// Scroll Animations (Intersection Observer) + Stagger
// ============================================

function setupScrollAnimations() {
  if (prefersReducedMotion) return;

  const STAGGER_MS = 80;

  // Apply stagger delays to items within containers
  [
    { container: '.featured-grid', items: '.featured-card' },
    { container: '.skills-row', items: '.skill-pill' },
    { container: '.patents-grid', items: '.patent-card' },
    { container: '.achievements-grid', items: '.achievement-item' },
    { container: '.experience-list', items: '.experience-item' }
  ].forEach(({ container, items }) => {
    document.querySelectorAll(container).forEach(parent => {
      parent.querySelectorAll(items).forEach((el, i) => {
        el.style.setProperty('--stagger-delay', `${i * STAGGER_MS}ms`);
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-title, .section-description, .featured-card, .experience-item, .patent-card, .bento-item, .skill-pill, .education-card, .achievement-item, .stats-card, .hero-terminal, .impact-card-hero').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  interactiveTerminal();
  animateCounters();
  populateSkills();
  populateFeaturedProjects();
  populateExperience();
  populateEducation();
  populatePatents();
  setupSmoothScroll();
  setupMobileMenu();
  setupContactForm();
  setupProjectModal();
  setupAllProjects();
  setupThemeSwitcher();
  setupScrollSpy();
  setupBackToTop();
  setupScrollProgress();
  setupCursorGlow();
  setupTiltCards();
  setupMagneticButtons();

  // Fetch GitHub profile stats for hero card
  await fetchGitHubProfile();

  // Setup scroll animations after content is loaded
  setupScrollAnimations();
  setupTextScramble();

  console.log('Portfolio Loaded!');
});
