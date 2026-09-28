import { useState } from 'react';
import { playCyberBeep, playSuccessBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: `All Projects (${resumeData.projects.length})` },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'mobile', label: 'Mobile & IoT' },
    { id: 'creative', label: 'Web3 & Games' },
  ];

  const filtered = resumeData.projects.filter(p => {
    const matchesFilter = filter === 'all' 
      || p.cat.includes(filter) 
      || (filter === 'creative' && (p.cat.includes('blockchain') || p.cat.includes('creative')));

    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.techStackText.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const openModal = (project) => {
    playSuccessBeep();
    setSelectedProject(project);
  };

  const closeModal = () => {
    playCyberBeep(500, 'sine', 0.05);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 rv">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#facc15] text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            <i className="fa-solid fa-code-fork"></i> RESUME PROJECTS & SYSTEM BUILDS
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            FEATURED <span className="text-[#facc15]">PROJECTS ({resumeData.projects.length})</span>
          </h2>
          <p className="text-gray-400 font-['Fira_Code'] text-sm uppercase tracking-wider">
            // IN-DEPTH ARCHITECTURAL BREAKDOWN, FULL TECH STACK & PRODUCTION WORKFLOWS
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 rv">
          <div className="flex flex-wrap gap-2.5">
            {filters.map(f => (
              <button 
                key={f.id} 
                onClick={() => {
                  playCyberBeep(750, 'sine', 0.03);
                  setFilter(f.id);
                }}
                className={`px-4 py-2 font-bold uppercase text-xs font-['Fira_Code'] border-2 transition-all active:translate-x-0.5 active:translate-y-0.5 ${
                  filter === f.id 
                    ? 'border-[#facc15] bg-[#facc15] text-black shadow-[3px_3px_0px_#000]' 
                    : 'border-white bg-[#0f0f13] text-gray-300 hover:bg-white hover:text-black shadow-[3px_3px_0px_#fff]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex-1 lg:max-w-md ml-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="SEARCH TECH (e.g. FASTAPI, GEMINI, REACT, CANVAS)_" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0a0a0c] text-white border-2 border-white font-['Fira_Code'] font-bold text-xs px-4 py-2.5 focus:outline-none focus:border-[#facc15] shadow-[3px_3px_0px_#fff] focus:shadow-[3px_3px_0px_#facc15] transition-all"
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white font-['Fira_Code'] text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 rv">
          {filtered.map(p => (
            <div 
              key={p.id} 
              className={`neo-card p-0 flex flex-col border-2 ${p.color} ${p.shadow} group hover:-translate-y-1 transition-all duration-200`}
            >
              {/* Window Header */}
              <div className={`${p.headerBg} ${p.headerText} font-['Fira_Code'] font-bold px-4 py-2.5 border-b-2 border-black flex items-center justify-between text-xs`}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-black"></span>
                  <span className="font-extrabold uppercase">{p.badge}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 border border-black bg-white inline-block"></span>
                  <span className="w-2 h-2 border border-black bg-white inline-block"></span>
                  <span className="w-2 h-2 border border-black bg-white inline-block"></span>
                </div>
              </div>

              {/* Card Body */}
              <div className="bg-[#0f0f13] p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase mb-1 text-white group-hover:text-[#facc15] transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-['Fira_Code'] text-xs font-bold text-[#facc15] mb-3 uppercase">
                    {p.sub}
                  </p>
                  
                  {/* Comprehensive Tech Stack Banner */}
                  <div className="bg-[#0a0a0c] border border-zinc-700 p-3 mb-4">
                    <div className="text-[10px] font-['Fira_Code'] font-extrabold text-[#3b82f6] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <i className="fa-solid fa-layer-group"></i>
                      <span>COMPREHENSIVE TECH STACK:</span>
                    </div>
                    <div className="font-['Fira_Code'] text-xs text-gray-200 font-semibold leading-relaxed">
                      {p.techStackText}
                    </div>
                  </div>

                  <p className="text-gray-300 font-normal text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                {/* Deep Technical Architecture Breakdown */}
                <div>
                  <div className="border-t border-zinc-800 pt-4 mb-4">
                    <div className="text-xs font-['Fira_Code'] font-bold text-gray-400 uppercase mb-2.5 flex items-center justify-between">
                      <span>CORE ARCHITECTURE & MODULES:</span>
                      <span className="text-[#10b981] font-mono text-[11px]">● PRODUCTION SPEC</span>
                    </div>
                    <div className="space-y-2">
                      {p.techDeepDive.map((td, i) => (
                        <div key={i} className="text-xs bg-[#14151f] border-l-2 border-[#3b82f6] p-2.5 text-gray-300">
                          <span className="font-bold text-white font-['Fira_Code'] block mb-0.5">
                            ▸ {td.label}:
                          </span>
                          <span className="text-gray-300 leading-relaxed">
                            {td.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="font-['Fira_Code'] text-[11px] font-bold px-2.5 py-1 bg-[#0a0a0c] text-gray-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand Modal CTA */}
                  <button
                    onClick={() => openModal(p)}
                    className="w-full py-2.5 bg-[#171720] hover:bg-zinc-800 text-white font-['Fira_Code'] font-bold text-xs uppercase border border-gray-700 flex items-center justify-center gap-2 transition-colors"
                  >
                    <i className="fa-solid fa-expand text-xs text-[#facc15]"></i>
                    VIEW FULL SYSTEM MODAL & WORKFLOW
                  </button>
                </div>
              </div>
              
              {/* Bottom GitHub Links Action Bar */}
              <div className="border-t-2 border-inherit bg-[#0a0a0c]">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={() => playCyberBeep(900, 'sine', 0.03)}
                  className="block w-full bg-[#0f0f13] text-white font-['Fira_Code'] font-bold uppercase text-center py-3.5 hover:bg-white hover:text-black transition-colors text-xs flex items-center justify-center gap-2"
                >
                  <span>VIEW GITHUB REPOSITORY</span>
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive System Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="neo-card p-0 border-2 border-white max-w-3xl w-full !shadow-[12px_12px_0px_#fff] bg-[#0f0f13] max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className={`${selectedProject.headerBg} ${selectedProject.headerText} px-6 py-4 border-b-2 border-black flex items-center justify-between shrink-0`}>
              <div className="flex items-center gap-2 font-black uppercase text-base sm:text-lg">
                <i className="fa-solid fa-terminal"></i>
                <span>{selectedProject.title} // DEEP ARCHITECTURE SPEC</span>
              </div>
              <button 
                onClick={closeModal}
                className="w-7 h-7 bg-black text-white font-bold flex items-center justify-center hover:bg-red-600 transition-colors border-2 border-black"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <span className="font-['Fira_Code'] text-xs font-bold text-[#facc15] uppercase tracking-wider block mb-1">
                  SYSTEM OVERVIEW & CLASSIFICATION
                </span>
                <h4 className="text-2xl font-black uppercase text-white mb-2">{selectedProject.sub}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.desc}</p>
              </div>

              {/* Full Tech Stack */}
              <div className="bg-[#0a0a0c] border-2 border-zinc-700 p-4">
                <div className="font-['Fira_Code'] font-bold text-xs text-[#3b82f6] uppercase mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-code"></i>
                  <span>COMPLETE STACK LIST:</span>
                </div>
                <p className="font-['Fira_Code'] text-xs text-white leading-relaxed">
                  {selectedProject.techStackText}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="bg-[#0a0a0c] border-2 border-zinc-800 p-4">
                <div className="font-['Fira_Code'] font-bold text-xs text-[#10b981] uppercase mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-microchip"></i>
                  <span>TECHNICAL ARCHITECTURE BREAKDOWN:</span>
                </div>
                <div className="space-y-3">
                  {selectedProject.techDeepDive.map((td, i) => (
                    <div key={i} className="text-xs border-l-2 border-[#10b981] pl-3 py-1 text-gray-300">
                      <strong className="text-white block font-['Fira_Code'] text-xs mb-0.5">
                        {td.label}:
                      </strong>
                      <span>{td.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-zinc-800 flex flex-wrap gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="neo-btn flex-1 py-3 text-xs font-black"
                >
                  VIEW GITHUB REPOSITORY <i className="fa-brands fa-github ml-1.5"></i>
                </a>
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-zinc-700 text-gray-400 hover:text-white font-['Fira_Code'] font-bold text-xs uppercase"
                >
                  CLOSE
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
