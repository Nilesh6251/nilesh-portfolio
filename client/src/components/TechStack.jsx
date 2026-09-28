import { useState } from 'react';
import { playCyberBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technical Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'databases', label: 'Databases & Tools' },
  ];

  const skillCards = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: 'fa-code',
      accent: 'border-[#3b82f6]',
      bgAccent: 'bg-[#3b82f6]',
      textAccent: 'text-[#3b82f6]',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]',
      skills: [
        { name: 'Python', level: '92%', icon: 'fa-brands fa-python', tag: 'Primary / AI' },
        { name: 'JavaScript (ES6+)', level: '90%', icon: 'fa-brands fa-js', tag: 'Full Stack' },
        { name: 'C++', level: '82%', icon: 'fa-solid fa-code', tag: 'Core DSA' },
        { name: 'C', level: '80%', icon: 'fa-solid fa-terminal', tag: 'Systems' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend & Full-Stack UI',
      icon: 'fa-mobile-screen',
      accent: 'border-[#a855f7]',
      bgAccent: 'bg-[#a855f7]',
      textAccent: 'text-[#a855f7]',
      shadow: '!shadow-[6px_6px_0px_#a855f7]',
      skills: [
        { name: 'Next.js (App Router / SSR)', level: '94%', icon: 'fa-solid fa-bolt', tag: 'Server Components' },
        { name: 'React.js & State Systems', level: '93%', icon: 'fa-brands fa-react', tag: 'Client Architecture' },
        { name: 'React Native (Expo)', level: '88%', icon: 'fa-solid fa-mobile', tag: 'Cross Platform' },
        { name: 'Tailwind CSS & Styling', level: '95%', icon: 'fa-solid fa-wind', tag: 'Modern UI' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Node.js Services',
      icon: 'fa-server',
      accent: 'border-[#10b981]',
      bgAccent: 'bg-[#10b981]',
      textAccent: 'text-[#10b981]',
      shadow: '!shadow-[6px_6px_0px_#10b981]',
      skills: [
        { name: 'Node.js & Express.js', level: '92%', icon: 'fa-brands fa-node-js', tag: 'Async Microservices' },
        { name: 'FastAPI (Python)', level: '94%', icon: 'fa-brands fa-python', tag: 'High-Perf REST' },
        { name: 'REST APIs & WebSockets', level: '90%', icon: 'fa-solid fa-network-wired', tag: 'Realtime Streaming' },
        { name: 'JWT & Security', level: '88%', icon: 'fa-solid fa-shield-halved', tag: 'Auth Tokens' },
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      icon: 'fa-cloud',
      accent: 'border-[#facc15]',
      bgAccent: 'bg-[#facc15]',
      textAccent: 'text-[#facc15]',
      shadow: '!shadow-[6px_6px_0px_#facc15]',
      skills: [
        { name: 'Google Cloud (GCP)', level: '88%', icon: 'fa-brands fa-google', tag: 'Virtual Intern' },
        { name: 'AWS Cloud Foundations', level: '84%', icon: 'fa-brands fa-aws', tag: 'Certified' },
        { name: 'Firebase & Cloud Messaging', level: '86%', icon: 'fa-solid fa-fire', tag: 'Serverless' },
        { name: 'CI/CD Workflows', level: '82%', icon: 'fa-solid fa-gears', tag: 'DevOps' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Tooling',
      icon: 'fa-database',
      accent: 'border-[#3b82f6]',
      bgAccent: 'bg-[#3b82f6]',
      textAccent: 'text-[#3b82f6]',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]',
      skills: [
        { name: 'SQL', level: '88%', icon: 'fa-solid fa-table', tag: 'HackerRank Certified' },
        { name: 'MongoDB', level: '90%', icon: 'fa-solid fa-database', tag: 'NoSQL Schemas' },
        { name: 'Git & GitHub', level: '92%', icon: 'fa-brands fa-github', tag: 'Version Control' },
        { name: 'Postman & Docker', level: '85%', icon: 'fa-solid fa-cube', tag: 'Testing / Containers' },
      ]
    }
  ];

  const filteredCards = activeTab === 'all' 
    ? skillCards 
    : skillCards.filter(c => c.id === activeTab);

  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 rv">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#3b82f6] text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            <i className="fa-solid fa-microchip"></i> SKILLS MATRIX
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            TECHNICAL <span className="text-[#3b82f6]">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 font-['Fira_Code'] text-sm uppercase tracking-wider">
            // DOCUMENTED IN OFFICIAL RESUME: PYTHON, JS, REACT, FASTAPI, AWS & GOOGLE CLOUD
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap gap-2.5 mb-10 rv">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                playCyberBeep(700, 'sine', 0.04);
                setActiveTab(c.id);
              }}
              className={`px-4 py-2 font-bold uppercase text-xs font-['Fira_Code'] border-2 transition-all active:translate-x-0.5 active:translate-y-0.5 ${
                activeTab === c.id
                  ? 'border-[#3b82f6] bg-[#3b82f6] text-black shadow-[3px_3px_0px_#000]'
                  : 'border-white bg-[#0f0f13] text-gray-300 hover:bg-white hover:text-black shadow-[3px_3px_0px_#fff]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <div 
              key={card.id} 
              className={`neo-card p-0 border-2 ${card.accent} ${card.shadow} rv flex flex-col`}
            >
              <div className={`${card.bgAccent} text-black font-black uppercase px-6 py-3.5 border-b-2 border-black flex justify-between items-center text-base`}>
                <span className="flex items-center gap-2">
                  <i className={`fa-solid ${card.icon}`}></i>
                  <span>{card.title}</span>
                </span>
                <span className="w-2.5 h-2.5 bg-black inline-block"></span>
              </div>

              <div className="bg-[#0f0f13] p-6 space-y-5 flex-1">
                {card.skills.map((s, idx) => (
                  <div 
                    key={idx} 
                    onMouseEnter={() => playCyberBeep(800 + idx * 50, 'sine', 0.03)}
                  >
                    <div className="flex items-center justify-between font-['Fira_Code'] font-bold text-xs mb-2">
                      <span className="text-white flex items-center gap-2">
                        <i className={`${s.icon} ${card.textAccent}`}></i>
                        <span>{s.name}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#0a0a0c] border border-gray-700 text-gray-400 font-bold uppercase">
                          {s.tag}
                        </span>
                        <span className={`${card.textAccent} font-bold`}>{s.level}</span>
                      </div>
                    </div>

                    <div className="h-2.5 w-full bg-[#0a0a0c] border-2 border-black overflow-hidden">
                      <div 
                        className={`h-full ${card.bgAccent} border-r-2 border-black transition-all duration-700`} 
                        style={{ width: s.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certified Badges Ribbon */}
        <div className="mt-12 bg-[#0f0f13] border-2 border-zinc-800 p-6 !shadow-[6px_6px_0px_#000] rv">
          <div className="text-xs font-['Fira_Code'] font-bold text-gray-400 uppercase mb-4 flex items-center gap-2">
            <i className="fa-solid fa-award text-[#facc15]"></i>
            <span>CREDENTIAL RECOGNITION:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {resumeData.certifications.map((c, i) => (
              <div 
                key={i}
                className="px-4 py-2 bg-[#0a0a0c] border border-zinc-700 font-['Fira_Code'] text-xs flex items-center gap-2"
              >
                <i className={`fa-solid ${c.icon} text-[#facc15]`}></i>
                <span className="font-bold text-white">{c.title}</span>
                <span className="text-gray-400 font-mono">({c.issuer})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
