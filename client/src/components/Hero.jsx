import { useState, useEffect } from 'react';
import { playCyberBeep, playSuccessBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const Hero = () => {
  const [commands, setCommands] = useState([]);
  const [roleIndex, setRoleIndex] = useState(0);

  // Clean, high-impact developer roles (featuring Next.js & Node.js)
  const roles = [
    'AI & Full Stack Developer',
    'Next.js & Node.js Specialist',
    'FastAPI & React.js Architect',
    'GenAI Solutions Specialist',
    'Cloud & Systems Builder',
  ];

  // Cycling titles
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  // Terminal commands simulator
  useEffect(() => {
    const defaultLog = [
      { type: 'cmd', text: '$ whoami' },
      { type: 'out', text: `→ ${resumeData.personal.name} | ${resumeData.personal.role}` },
      { type: 'cmd', text: '$ stack --list' },
      { type: 'out', text: '→ Next.js, Node.js, Express, React, FastAPI, Python, MongoDB, SQL, GCP, AWS' },
      { type: 'cmd', text: '$ internship --status' },
      { type: 'out', text: '→ Google Cloud GenAI Virtual Intern (SmartBridge · Vertex AI)' },
      { type: 'cmd', text: '$ status --hiring' },
      { type: 'out', text: '→ ✅ Available for Software Development Internships & Full-Stack Roles' },
    ];
    setCommands(defaultLog);
  }, []);

  const handleRunCommand = (cmdName) => {
    playCyberBeep(900, 'square', 0.06);
    if (cmdName === 'clear') {
      setCommands([]);
      return;
    }
    if (cmdName === 'whoami') {
      setCommands(prev => [
        ...prev.slice(-6),
        { type: 'cmd', text: '$ whoami' },
        { type: 'out', text: `→ ${resumeData.personal.name} | ${resumeData.personal.role}` }
      ]);
    } else if (cmdName === 'stack') {
      setCommands(prev => [
        ...prev.slice(-6),
        { type: 'cmd', text: '$ stack --list' },
        { type: 'out', text: '→ Next.js, Node.js, Express, React, FastAPI, Python, MongoDB, SQL, GCP, AWS, Docker' }
      ]);
    } else if (cmdName === 'contact') {
      setCommands(prev => [
        ...prev.slice(-6),
        { type: 'cmd', text: '$ contact --quick' },
        { type: 'out', text: `→ ${resumeData.personal.email} | ${resumeData.personal.phone}` }
      ]);
    } else if (cmdName === 'awards') {
      playSuccessBeep();
      setCommands(prev => [
        ...prev.slice(-6),
        { type: 'cmd', text: '$ awards --fetch' },
        { type: 'out', text: '→ 🏆 2nd Runner-Up: SIH 2025 | ☁️ Google Cloud Skill Boost GenAI' }
      ]);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Bio */}
          <div className="lg:col-span-7">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border-2 border-[#10b981] bg-[#10b981] text-black font-['Fira_Code'] font-bold text-xs uppercase shadow-[3px_3px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
              SEEKING SOFTWARE DEVELOPMENT INTERNSHIPS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-4 uppercase tracking-tight">
              NILESH VERMA
            </h1>

            {/* Dynamic Typewriter / Changing Role */}
            <div className="h-14 sm:h-16 flex items-center mb-6 overflow-hidden">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#3b82f6] text-outline font-['Space_Grotesk'] tracking-wide">
                {roles[roleIndex]}
              </span>
            </div>

            {/* Clean Bio without college overload */}
            <p className="text-gray-300 text-base sm:text-lg font-medium mb-8 max-w-xl leading-relaxed">
              B.Tech Information Technology student building production-grade, cloud-deployed systems with <span className="bg-[#3b82f6] text-black font-bold px-1.5 py-0.5">Next.js & React</span>, <span className="bg-[#10b981] text-black font-bold px-1.5 py-0.5">Node.js & Express</span>, <span className="bg-[#facc15] text-black font-bold px-1.5 py-0.5">FastAPI</span>, and <span className="bg-[#a855f7] text-black font-bold px-1.5 py-0.5">Google Cloud Vertex AI</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#projects" 
                onClick={() => playCyberBeep(700, 'sine')}
                className="neo-btn px-7 py-4 text-sm font-black"
              >
                EXPLORE PROJECTS <i className="fa-solid fa-arrow-down ml-1"></i>
              </a>

              <a 
                href="#contact" 
                onClick={() => playCyberBeep(850, 'sine')}
                className="neo-btn-outline px-7 py-4 text-sm font-black border-[#10b981] text-[#10b981] !shadow-[4px_4px_0px_#10b981] hover:!bg-[#10b981] hover:!text-black"
              >
                GET IN TOUCH <i className="fa-regular fa-paper-plane ml-1"></i>
              </a>

              <a 
                href={resumeData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => playCyberBeep(1000, 'sine')}
                className="neo-btn-outline px-5 py-4 text-sm font-bold border-white text-white !shadow-[4px_4px_0px_#fff] hover:!bg-white hover:!text-black"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>

              <a 
                href={resumeData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => playCyberBeep(1100, 'sine')}
                className="neo-btn-outline px-5 py-4 text-sm font-bold border-white text-white !shadow-[4px_4px_0px_#fff] hover:!bg-white hover:!text-black"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-zinc-800">
              <div className="bg-[#0f0f13] border-2 border-black p-3 shadow-[3px_3px_0px_#3b82f6]">
                <div className="text-2xl font-black text-[#3b82f6]">10</div>
                <div className="font-['Fira_Code'] text-[11px] font-bold text-gray-400 uppercase">PROJECT BUILDS</div>
              </div>
              <div className="bg-[#0f0f13] border-2 border-black p-3 shadow-[3px_3px_0px_#facc15]">
                <div className="text-2xl font-black text-[#facc15]">2nd</div>
                <div className="font-['Fira_Code'] text-[11px] font-bold text-gray-400 uppercase">SIH 2025 RUNNER-UP</div>
              </div>
              <div className="bg-[#0f0f13] border-2 border-black p-3 shadow-[3px_3px_0px_#10b981]">
                <div className="text-2xl font-black text-[#10b981]">GCP</div>
                <div className="font-['Fira_Code'] text-[11px] font-bold text-gray-400 uppercase">GENAI INTERN</div>
              </div>
              <div className="bg-[#0f0f13] border-2 border-black p-3 shadow-[3px_3px_0px_#a855f7]">
                <div className="text-2xl font-black text-[#a855f7]">2028</div>
                <div className="font-['Fira_Code'] text-[11px] font-bold text-gray-400 uppercase">B.TECH IT</div>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Card + Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Nilesh Profile Photo with Neo-Brutalist Frame */}
            <div className="relative group w-full max-w-[300px]">
              {/* Corner crosshairs */}
              <div className="absolute -top-3 -left-3 text-[#3b82f6] font-mono font-bold text-lg select-none z-10">+</div>
              <div className="absolute -top-3 -right-3 text-[#3b82f6] font-mono font-bold text-lg select-none z-10">+</div>
              <div className="absolute -bottom-3 -left-3 text-[#3b82f6] font-mono font-bold text-lg select-none z-10">+</div>
              <div className="absolute -bottom-3 -right-3 text-[#3b82f6] font-mono font-bold text-lg select-none z-10">+</div>

              {/* Photo Box */}
              <div className="neo-card p-2 bg-[#3b82f6] border-2 border-black !shadow-[8px_8px_0px_#3b82f6] group-hover:!shadow-[12px_12px_0px_#3b82f6] transition-all">
                <div className="relative border-2 border-black overflow-hidden bg-[#0f0f13]">
                  {/* Status Overlay */}
                  <div className="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-sm border border-emerald-400 px-2 py-0.5 text-[10px] font-['Fira_Code'] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    NILESH VERMA // FULL STACK DEV
                  </div>

                  <img 
                    src="/nilesh.jpeg" 
                    alt="Nilesh Verma" 
                    className="w-full h-auto object-cover contrast-110 hover:scale-105 transition-all duration-500" 
                    onError={(e) => { 
                      if (!e.target.dataset.tried) {
                        e.target.dataset.tried = 'true';
                        e.target.src = '/nilesh.jpg';
                      }
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Interactive Terminal Widget */}
            <div className="w-full neo-card p-0 border-[#a855f7] !shadow-[8px_8px_0px_#a855f7]">
              {/* Header */}
              <div className="bg-[#a855f7] text-black font-['Fira_Code'] font-bold px-4 py-2 border-b-2 border-black flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-terminal text-xs"></i>
                  <span>terminal.exe</span>
                </span>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 border-2 border-black bg-white inline-block"></span>
                  <span className="w-3 h-3 border-2 border-black bg-white inline-block"></span>
                  <span className="w-3 h-3 border-2 border-black bg-white inline-block"></span>
                </div>
              </div>

              {/* Screen */}
              <div className="bg-[#0f0f13] px-4 py-3 font-['Fira_Code'] text-xs min-h-[140px] max-h-[160px] overflow-y-auto space-y-1.5">
                {commands.map((c, i) => (
                  <div key={i} className={c.type === 'cmd' ? 'text-[#3b82f6] font-bold' : 'text-[#10b981]'}>
                    {c.text}
                  </div>
                ))}
                <div className="text-[#3b82f6] font-bold term-cursor">_</div>
              </div>

              {/* Interactive Command Triggers */}
              <div className="bg-[#0a0a0c] border-t-2 border-black p-2 flex flex-wrap gap-1.5 items-center justify-between">
                <span className="text-[10px] font-['Fira_Code'] text-gray-400 font-bold px-1">EXECUTE:</span>
                <div className="flex flex-wrap gap-1">
                  {['whoami', 'stack', 'awards', 'contact', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleRunCommand(cmd)}
                      className="px-2 py-0.5 bg-[#171720] hover:bg-[#a855f7] hover:text-black text-gray-300 border border-gray-700 font-['Fira_Code'] text-[10px] font-bold transition-colors"
                    >
                      ${cmd}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
