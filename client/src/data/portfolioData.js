export const resumeData = {
  personal: {
    name: 'NILESH VERMA',
    title: 'B.Tech Information Technology Student',
    role: 'AI & Full Stack Developer (Next.js · Node.js · FastAPI)',
    email: 'nileshverma0052@gmail.com',
    phone: '+91 9754512932',
    location: 'Bhopal, Madhya Pradesh, India',
    linkedin: 'https://linkedin.com/in/nilesh-verma-9845a3266',
    github: 'https://github.com/Nilesh6251',
    summary: 'B.Tech Information Technology student with hands-on project experience building full-stack, cloud-deployed applications using Next.js, Node.js, Express.js, React.js, and FastAPI. Skilled in modern JavaScript (ES6+), Python, MongoDB, SQL, and cloud deployment (AWS, Google Cloud). Completed a Google Cloud Generative AI virtual internship focused on Vertex AI and prompt engineering. Seeking a software development internship to apply and further strengthen technical expertise across modern web and cloud architectures.'
  },
  
  education: [
    {
      institution: 'Bansal Institute of Science & Technology, Bhopal, Madhya Pradesh, India',
      degree: 'B.Tech in Information Technology',
      score: 'CGPA: 6.8 / 10.0 (through Semester III)',
      year: 'Expected 2028',
      current: true
    },
    {
      institution: 'Authentic Public H.S. School, Puchama, Sehore, India',
      degree: 'M.P. Board (Class XII)',
      score: '80.05%',
      year: '2024'
    },
    {
      institution: 'Bright Career H. School, Chandbad, Sehore, India',
      degree: 'M.P. Board (Class X)',
      score: '72.40%',
      year: '2022'
    }
  ],

  technicalSkills: {
    languages: ['JavaScript (ES6+)', 'Python', 'C++', 'C'],
    frontend: ['Next.js (App Router / SSR)', 'React.js', 'React Native (Expo)', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT Authentication'],
    cloud: ['AWS (Cloud Fundamentals Certified)', 'Google Cloud (GCP)', 'Firebase', 'CI/CD Pipelines'],
    databases: ['SQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker']
  },

  experience: [
    {
      role: 'Google Cloud Generative AI Virtual Internship',
      company: 'SmartBridge',
      period: '2025',
      technologies: ['Python', 'Vertex AI', 'BigQuery', 'Cloud Functions'],
      highlights: [
        'Built and deployed generative AI applications using Vertex AI on Google Cloud.',
        'Completed multiple Google Cloud Skill Boost labs covering prompt engineering and LLM fundamentals.',
        'Applied cloud deployment workflows to real-world, AI-driven solutions.'
      ]
    }
  ],

  certifications: [
    {
      title: 'Gen AI Academy Completion Certificate',
      issuer: 'Hack2Skill',
      date: '2025',
      icon: 'fa-brain',
      badgeColor: 'border-[#a855f7] text-[#a855f7] bg-[#a855f7]/10'
    },
    {
      title: 'AWS Academy Graduate — AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2024',
      icon: 'fa-aws',
      badgeColor: 'border-[#facc15] text-[#facc15] bg-[#facc15]/10'
    },
    {
      title: 'SQL (Basic) Certification',
      issuer: 'HackerRank',
      date: '2024',
      icon: 'fa-database',
      badgeColor: 'border-[#10b981] text-[#10b981] bg-[#10b981]/10'
    }
  ],

  achievements: [
    {
      title: '2nd Runner-Up — Internal Smart India Hackathon (SIH) 2025',
      org: 'Bansal Institute of Science & Technology',
      desc: 'Awarded 2nd Runner-Up position for engineering FasalSathi, an AI-powered smart agriculture platform integrating Computer Vision disease detection with automated localized farmer advisories.'
    },
    {
      title: 'Google Cloud Skill Boost Badges',
      org: 'Google Cloud Training',
      desc: 'Earned multiple verified Google Cloud Skill Boost badges in Generative AI, Prompt Engineering, Large Language Models (LLMs), and Cloud Architecture.'
    }
  ],

  projects: [
    {
      id: 1,
      cat: ['ai', 'mobile'],
      badge: 'HEALTHCARE AI · PERSONAL PROJECT',
      title: 'MediSync',
      sub: 'AI Medication Platform & Prescription Scanner',
      techStackText: 'React Native, FastAPI, Python, MongoDB, Gemini Vision, Groq Llama-3, Whisper, GCP, Firebase',
      desc: 'Prescription scanner turning handwritten notes into automated schedules with AI voice calls and alerts. Developed a FastAPI backend with JWT authentication, MongoDB, and an automated reminder engine with patient and doctor apps.',
      techDeepDive: [
        { label: 'Multimodal OCR & Vision', detail: 'Google Gemini Vision 1.5 & OpenCV preprocessing pipeline extracts drug dosage, timing, and physician notes directly from handwritten and blurred prescription scans.' },
        { label: 'Voice AI & Escalation', detail: 'Groq-accelerated Llama-3 model triggers automated conversational reminder phone calls via Whisper text-to-speech engine if scheduled doses are missed.' },
        { label: 'Cloud Infrastructure', detail: 'Cloud-native services on Google Cloud Platform and Firebase with CI/CD deployment pipelines.' }
      ],
      tags: ['React Native', 'FastAPI', 'Python', 'MongoDB', 'Gemini Vision', 'Groq Llama-3', 'Whisper', 'GCP', 'Firebase'],
      github: 'https://github.com/Nilesh6251/medicine-.git',
      color: 'border-[#a855f7]',
      headerBg: 'bg-[#a855f7]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#a855f7]'
    },
    {
      id: 2,
      cat: ['ai', 'fullstack'],
      badge: 'TEAM PROJECT · SIH 2025 RUNNER-UP',
      title: 'FasalSathi',
      sub: 'AI Smart Agriculture & Disease Detection',
      techStackText: 'Python, FastAPI, TensorFlow, OpenCV, React, MongoDB, Google Cloud',
      desc: 'Plant disease detection CV model with crop recommendation engine and weather insights. Built an AI-powered agriculture platform enabling disease detection, crop recommendations, and smart farming advisory.',
      techDeepDive: [
        { label: 'Pathology Computer Vision', detail: 'TensorFlow CNN models with OpenCV image preprocessing to identify 20+ botanical leaf diseases from user photo uploads.' },
        { label: 'Weather Telemetry Engine', detail: 'FastAPI microservices integrating meteorological forecasts to anticipate frost, rain, and optimal agrochemical spray windows.' },
        { label: 'Full-Stack Architecture', detail: 'React.js farmer portal and MongoDB database deployed on Google Cloud Platform.' }
      ],
      tags: ['Python', 'FastAPI', 'TensorFlow', 'OpenCV', 'React', 'MongoDB', 'Google Cloud'],
      github: 'https://github.com/Pawankus6261/Fasal-sathi.git',
      color: 'border-[#10b981]',
      headerBg: 'bg-[#10b981]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#10b981]'
    },
    {
      id: 3,
      cat: ['fullstack'],
      badge: 'ENTERPRISE ANALYTICS & ADMIN',
      title: 'FasalSathi Admin Panel',
      sub: 'Administrative & Telemetry Control Center',
      techStackText: 'React.js, Tailwind CSS, Node.js, Express, REST API, MongoDB',
      desc: 'Analytics and administrative control center for disease reports and user telemetry. Built for agricultural officers and admins to monitor crop pathology trends across rural districts.',
      techDeepDive: [
        { label: 'Telemetry Visualizations', detail: 'Interactive dashboards displaying geospatial infestation severity and farmer engagement telemetry.' },
        { label: 'RESTful Admin APIs', detail: 'Node.js and Express backend with role-based JWT access controls and MongoDB schema indexing.' }
      ],
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'REST API', 'MongoDB'],
      github: 'https://github.com/Nilesh6251/fasal-sathi-admin-panal-.git',
      color: 'border-[#3b82f6]',
      headerBg: 'bg-[#3b82f6]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]'
    },
    {
      id: 4,
      cat: ['ai'],
      badge: 'REAL-TIME CONVERSATIONAL AI',
      title: 'FasalSathi AI Chatbot',
      sub: 'Contextual Agri-Advisory LLM Assistant',
      techStackText: 'Python, FastAPI, Google Gemini API, WebSockets, Tailwind CSS',
      desc: 'Real-time agricultural Q&A assistant trained for farmer support. Answers complex crop management, pest prevention, and fertilizer queries in real-time with sub-second response streaming.',
      techDeepDive: [
        { label: 'WebSocket Token Streaming', detail: 'FastAPI persistent bi-directional WebSockets delivering token-by-token streaming responses.' },
        { label: 'Prompt Architecture', detail: 'Agricultural system prompts preventing hallucinations and delivering accurate vernacular advice.' }
      ],
      tags: ['Python', 'FastAPI', 'Google Gemini API', 'WebSockets', 'Tailwind CSS'],
      github: 'https://github.com/Nilesh6251/chatbot-fassal-sathi.git',
      color: 'border-[#a855f7]',
      headerBg: 'bg-[#a855f7]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#a855f7]'
    },
    {
      id: 5,
      cat: ['blockchain'],
      badge: 'WEB3 DECENTRALIZED PROTOCOL',
      title: 'SkillChain',
      sub: 'Decentralized Skill & Credential Verification',
      techStackText: 'React.js, Web3.js, Solidity, Smart Contracts, Ethereum / Polygon',
      desc: 'Decentralized skill verification and immutable credential issuing system. Enables universities and organizations to issue tamper-proof verifiable certificates directly on-chain.',
      techDeepDive: [
        { label: 'Solidity Smart Contracts', detail: 'Immutable on-chain certificate hashing preventing fraudulent academic and professional claims.' },
        { label: 'Web3 Wallet DApp', detail: 'Seamless MetaMask integration using Web3.js and responsive React frontend.' }
      ],
      tags: ['React.js', 'Web3.js', 'Solidity', 'Smart Contracts', 'Ethereum / Polygon'],
      github: 'https://github.com/Nilesh6251/skill-chain.git',
      color: 'border-[#facc15]',
      headerBg: 'bg-[#facc15]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#facc15]'
    },
    {
      id: 6,
      cat: ['fullstack'],
      badge: 'AGRI-COMMERCE MERN STACK',
      title: 'KisanSetu',
      sub: 'Direct Farmer-to-Buyer Marketplace',
      techStackText: 'Node.js, Express.js, MongoDB, React.js, Tailwind CSS',
      desc: 'Direct farmer-to-buyer e-commerce marketplace bypassing middlemen. Empowers farmers with fair market pricing and real-time buyer connectivity.',
      techDeepDive: [
        { label: 'Direct Procurement System', detail: 'Direct negotiation and ordering workflows connecting producers with wholesale buyers.' },
        { label: 'MERN Stack Architecture', detail: 'Node.js, Express.js, MongoDB database, and React.js frontend with secure JWT sessions.' }
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS'],
      github: 'https://github.com/Nilesh6251/KisanSetu.git',
      color: 'border-[#3b82f6]',
      headerBg: 'bg-[#3b82f6]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]'
    },
    {
      id: 7,
      cat: ['fullstack'],
      badge: 'FINANCIAL ANALYTICS',
      title: 'Smart Budget Tracker',
      sub: 'Personal Finance Analytics & Visual Expense Manager',
      techStackText: 'HTML5, CSS3, JavaScript, Chart.js, LocalStorage API',
      desc: 'Personal finance analytics web app with interactive expense management and dynamic Chart.js visualizations, automated category breakdown, and monthly budget alerts.',
      techDeepDive: [
        { label: 'Chart.js Visualizations', detail: 'Real-time doughnut and line charts analyzing burn rates and spend categories.' },
        { label: 'Client-Side Persistence', detail: 'Instant zero-latency data caching using LocalStorage API with zero backend latency.' }
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'LocalStorage API'],
      github: 'https://github.com/Nilesh6251/smart-budget-.git',
      color: 'border-[#10b981]',
      headerBg: 'bg-[#10b981]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#10b981]'
    },
    {
      id: 8,
      cat: ['mobile'],
      badge: 'IOT & RIDER SAFETY',
      title: 'Safe Ride Guardian',
      sub: 'Crash Detection & Real-Time Emergency Escalation',
      techStackText: 'React Native, Node.js, Express, Python, Geolocation API',
      desc: 'Crash detection and real-time emergency response escalation app for riders. Uses smartphone accelerometer telemetry to detect high-impact collisions and broadcast emergency GPS beacons.',
      techDeepDive: [
        { label: 'Crash Detection Logic', detail: 'Processes sudden deceleration vector spikes via Python algorithm to eliminate false triggers.' },
        { label: 'Emergency Beacon Dispatch', detail: 'Automated SMS and geolocation broadcast to local emergency contacts and EMS services.' }
      ],
      tags: ['React Native', 'Node.js', 'Express', 'Python', 'Geolocation API'],
      github: 'https://github.com/Nilesh6251/safe-ride-guardian.git',
      color: 'border-[#3b82f6]',
      headerBg: 'bg-[#3b82f6]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]'
    },
    {
      id: 9,
      cat: ['creative'],
      badge: 'HTML5 CANVAS & GAME DEV',
      title: 'Mind Maze Game',
      sub: 'Procedural Labyrinth Browser Puzzle Game',
      techStackText: 'JavaScript (ES6+), HTML5 Canvas 2D Context, CSS3 Animations',
      desc: 'Interactive browser puzzle game featuring procedural maze generation and 2D canvas collision physics. Players navigate dynamically generated labyrinths with keyboard controls, timer tracking, and level progressions.',
      techDeepDive: [
        { label: 'Canvas Physics Engine', detail: 'Procedural randomized depth-first search pathfinding with real-time coordinate collision detection on HTML5 2D canvas context.' },
        { label: '60fps Render Loop', detail: 'Fluid requestAnimationFrame animation loop with smooth keyboard inputs and zero external gaming engine bloat.' }
      ],
      tags: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Dev', 'Pathfinding'],
      github: 'https://github.com/Nilesh6251/Mind--maze-game.git',
      color: 'border-[#a855f7]',
      headerBg: 'bg-[#a855f7]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#a855f7]'
    },
    {
      id: 10,
      cat: ['fullstack', 'creative'],
      badge: 'CREATIVE FRONTEND & MEDIA',
      title: 'Apex Photo Club',
      sub: 'Visual Photography Gallery & Community Showcase',
      techStackText: 'HTML5, CSS3, JavaScript, Responsive Masonry Grid, Lightbox Modal',
      desc: 'High-aesthetic photography club platform featuring fluid masonry layouts, interactive category filtering, and modal lightbox photo viewers. Designed for visual artists to exhibit curated high-resolution albums with fast loading times.',
      techDeepDive: [
        { label: 'Fluid Masonry Layout', detail: 'Adaptive CSS grid and flexbox layout dynamically adjusting to varying portrait and landscape photo aspect ratios.' },
        { label: 'Interactive Lightbox Modal', detail: 'Zero-bloat modal viewer with smooth keyboard navigation, full-screen expansion, and EXIF detail tags.' }
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Masonry Grid', 'Lightbox API', 'UI/UX'],
      github: 'https://github.com/Nilesh6251/apexphotoclub.git',
      color: 'border-[#facc15]',
      headerBg: 'bg-[#facc15]',
      headerText: 'text-black',
      shadow: '!shadow-[6px_6px_0px_#facc15]'
    }
  ]
};
