import { playCyberBeep, playSuccessBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="neo-card p-0 border-2 border-white max-w-4xl w-full !shadow-[12px_12px_0px_#fff] bg-[#0c0d12] max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="bg-[#3b82f6] text-black px-6 py-3.5 border-b-2 border-black flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 font-black uppercase text-sm sm:text-base tracking-wider">
            <i className="fa-solid fa-file-pdf text-lg"></i>
            <span>OFFICIAL RESUME // NILESH VERMA</span>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-black text-[#3b82f6] font-['Fira_Code'] text-xs font-bold">
              VERIFIED 2025
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playSuccessBeep();
                window.print();
              }}
              className="px-3 py-1 bg-white hover:bg-black hover:text-white text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000] transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-print"></i>
              <span className="hidden sm:inline">PRINT / SAVE PDF</span>
            </button>

            <button 
              onClick={() => {
                playCyberBeep(500, 'sine', 0.05);
                onClose();
              }}
              className="w-8 h-8 bg-black text-white hover:bg-red-600 transition-colors border-2 border-black flex items-center justify-center font-bold text-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Sheet Container (Clean, Elegant, High-Legibility Document View) */}
        <div className="p-4 sm:p-8 overflow-y-auto font-sans bg-[#0c0d12] text-gray-200">
          <div className="max-w-3xl mx-auto bg-[#13141c] border-2 border-zinc-700 p-6 sm:p-10 shadow-2xl space-y-6">
            
            {/* Header */}
            <div className="text-center pb-6 border-b-2 border-zinc-700">
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-1 font-['Space_Grotesk']">
                {resumeData.personal.name}
              </h1>
              <div className="text-sm font-bold text-[#3b82f6] uppercase tracking-wide mb-3 font-['Fira_Code']">
                {resumeData.personal.title}
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-gray-300 font-['Fira_Code']">
                <a href={`mailto:${resumeData.personal.email}`} className="hover:text-[#3b82f6] transition-colors">
                  {resumeData.personal.email}
                </a>
                <span>|</span>
                <a href={`tel:${resumeData.personal.phone}`} className="hover:text-[#3b82f6] transition-colors">
                  {resumeData.personal.phone}
                </a>
                <span>|</span>
                <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#3b82f6] transition-colors underline">
                  linkedin.com/in/nilesh-verma-9845a3266
                </a>
                <span>|</span>
                <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="hover:text-[#3b82f6] transition-colors underline">
                  github.com/Nilesh6251
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#3b82f6] border-b-2 border-zinc-700 pb-1 mb-2 font-['Fira_Code']">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {resumeData.personal.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#a855f7] border-b-2 border-zinc-700 pb-1 mb-3 font-['Fira_Code']">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-white">{edu.institution}</div>
                      <div className="text-gray-400 text-xs">
                        {edu.degree} — <span className="text-gray-200 font-semibold">{edu.score}</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-gray-400 font-['Fira_Code'] shrink-0">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#10b981] border-b-2 border-zinc-700 pb-1 mb-3 font-['Fira_Code']">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Programming Languages:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.languages.join(', ')}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Frontend Development:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.frontend.join(', ')}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Backend Development:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.backend.join(', ')}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Cloud & Deployment:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.cloud.join(', ')}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Databases:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.databases.join(', ')}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-white sm:w-52 shrink-0">● Tools & Version Control:</span>
                  <span className="text-gray-300">{resumeData.technicalSkills.tools.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#facc15] border-b-2 border-zinc-700 pb-1 mb-3 font-['Fira_Code']">
                EXPERIENCE
              </h2>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div className="font-bold text-white">
                      {exp.role} <span className="text-gray-400 font-normal">— {exp.company}</span>
                    </div>
                    <div className="font-['Fira_Code'] text-xs font-bold text-[#facc15]">
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-['Fira_Code']">
                    Technologies: {exp.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#3b82f6] border-b-2 border-zinc-700 pb-1 mb-3 font-['Fira_Code']">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {resumeData.projects.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">
                        {proj.title} <span className="font-normal text-gray-300">— {proj.sub}</span>
                      </div>
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-xs text-[#3b82f6] underline font-['Fira_Code']">
                        GitHub Repo ↗
                      </a>
                    </div>
                    <div className="text-xs text-gray-400 font-['Fira_Code']">
                      Tech Stack: {proj.techStackText}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#10b981] border-b-2 border-zinc-700 pb-1 mb-2 font-['Fira_Code']">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                {resumeData.certifications.map((c, i) => (
                  <li key={i}>
                    <strong className="text-white">{c.title}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#facc15] border-b-2 border-zinc-700 pb-1 mb-2 font-['Fira_Code']">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                {resumeData.achievements.map((a, i) => (
                  <li key={i}>
                    <strong className="text-white">{a.title}</strong> — {a.desc}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="bg-[#101118] border-t-2 border-zinc-800 p-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs font-['Fira_Code'] text-gray-400">
            Source: Nilesh_Verma_Resume_Official.pdf
          </div>
          <div className="flex gap-3">
            <a 
              href={`mailto:${resumeData.personal.email}?subject=Interview%20Invitation%20-%20Nilesh%20Verma`}
              className="neo-btn px-6 py-2.5 text-xs font-black"
            >
              SCHEDULE INTERVIEW <i className="fa-solid fa-paper-plane ml-1.5"></i>
            </a>
            <button 
              onClick={() => {
                playCyberBeep(500, 'sine', 0.05);
                onClose();
              }}
              className="px-5 py-2.5 border-2 border-zinc-700 text-gray-400 hover:text-white font-['Fira_Code'] font-bold text-xs uppercase"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
