import { playCyberBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 rv">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#a855f7] text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            <i className="fa-solid fa-user-astronaut"></i> PROFILE & CREDENTIALS
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            ENGINEERING <span className="text-[#a855f7] text-outline-none">BACKGROUND</span>
          </h2>
          <p className="text-gray-400 font-['Fira_Code'] text-sm uppercase tracking-wider">
            // AI & FULL-STACK SOFTWARE DEVELOPER · BHOPAL, INDIA
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 neo-card p-6 sm:p-8 bg-[#0f0f13] border-2 border-[#3b82f6] !shadow-[8px_8px_0px_#3b82f6] rv">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-zinc-800">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white flex items-center gap-3">
                <span className="w-3 h-3 bg-[#3b82f6]"></span>
                PROFESSIONAL SUMMARY
              </h3>
              <span className="font-['Fira_Code'] text-xs font-bold text-[#3b82f6] uppercase">SYS.ID: NV-2028</span>
            </div>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8 text-gray-200">
              {resumeData.personal.summary}
            </p>

            {/* Core Technical Pillars (Replaced formal school list) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="bg-[#0a0a0c] border-2 border-[#3b82f6] p-4 shadow-[3px_3px_0px_#000]">
                <div className="font-['Fira_Code'] text-[10px] font-bold text-[#3b82f6] uppercase mb-1 flex items-center gap-1.5">
                  <i className="fa-brands fa-node-js"></i> FULL-STACK ECOSYSTEM
                </div>
                <div className="font-black text-white text-base mb-1">
                  Next.js & Node.js Architecture
                </div>
                <div className="text-gray-400 text-xs leading-relaxed">
                  SSR/SSG React apps, Express async microservices, FastAPI REST backends, and real-time WebSocket pipelines.
                </div>
              </div>

              <div className="bg-[#0a0a0c] border-2 border-[#a855f7] p-4 shadow-[3px_3px_0px_#000]">
                <div className="font-['Fira_Code'] text-[10px] font-bold text-[#a855f7] uppercase mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-brain"></i> APPLIED GENAI
                </div>
                <div className="font-black text-white text-base mb-1">
                  Vertex AI & Gemini Vision
                </div>
                <div className="text-gray-400 text-xs leading-relaxed">
                  Multimodal prescription vision extraction, Groq Llama-3, and conversational voice agents.
                </div>
              </div>

              <div className="bg-[#0a0a0c] border-2 border-[#10b981] p-4 shadow-[3px_3px_0px_#000]">
                <div className="font-['Fira_Code'] text-[10px] font-bold text-[#10b981] uppercase mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-cloud"></i> CLOUD & DEPLOYMENT
                </div>
                <div className="font-black text-white text-base mb-1">
                  GCP, AWS & Docker
                </div>
                <div className="text-gray-400 text-xs leading-relaxed">
                  Serverless Cloud Functions, BigQuery workflows, Firebase auth, and CI/CD pipelines.
                </div>
              </div>

              <div className="bg-[#0a0a0c] border-2 border-[#facc15] p-4 shadow-[3px_3px_0px_#000]">
                <div className="font-['Fira_Code'] text-[10px] font-bold text-[#facc15] uppercase mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-bolt"></i> STATUS & AVAILABILITY
                </div>
                <div className="font-black text-white text-base mb-1">
                  Ready for Internships
                </div>
                <div className="text-gray-400 text-xs leading-relaxed">
                  Available for software development internships and full-stack engineering opportunities.
                </div>
              </div>
            </div>

            {/* Certifications Showcase */}
            <div>
              <div className="text-xs font-['Fira_Code'] font-bold text-[#10b981] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i className="fa-solid fa-certificate"></i>
                <span>VERIFIED CERTIFICATIONS:</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {resumeData.certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => playCyberBeep(700 + idx * 80, 'sine', 0.03)}
                    className="bg-[#0a0a0c] border-2 border-zinc-700 p-3 shadow-[3px_3px_0px_#000] hover:border-[#10b981] transition-all"
                  >
                    <div className="text-xs font-bold text-white mb-1">{cert.title}</div>
                    <div className="text-[11px] font-['Fira_Code'] text-gray-400">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Highlight Cards: SIH & GCP Virtual Internship */}
          <div className="lg:col-span-5 space-y-6 rv">
            
            {/* Google Cloud Internship Card */}
            <div 
              onMouseEnter={() => playCyberBeep(750, 'triangle', 0.05)}
              className="neo-card p-0 border-[#10b981] !shadow-[6px_6px_0px_#10b981]"
            >
              <div className="bg-[#10b981] text-black font-black uppercase px-5 py-3 border-b-2 border-black flex justify-between items-center text-base sm:text-lg">
                <span className="flex items-center gap-2">
                  <i className="fa-brands fa-google"></i>
                  <span>GOOGLE CLOUD GENAI INTERNSHIP</span>
                </span>
                <span className="text-xs bg-black text-[#10b981] px-2 py-0.5 font-['Fira_Code'] font-bold">2025</span>
              </div>
              <div className="bg-[#0f0f13] p-6 space-y-3">
                <div className="font-['Fira_Code'] font-bold text-xs text-[#10b981] uppercase">
                  SMARTBRIDGE · REMOTE
                </div>
                <div className="text-white font-bold text-base">
                  Google Cloud Generative AI Virtual Intern
                </div>
                <div className="text-xs font-['Fira_Code'] text-gray-400">
                  Technologies: Python, Vertex AI, BigQuery, Cloud Functions
                </div>
                <ul className="text-xs text-gray-300 space-y-1.5 leading-relaxed pt-1">
                  <li>• Built and deployed generative AI applications using Vertex AI on Google Cloud.</li>
                  <li>• Completed multiple Google Cloud Skill Boost labs covering prompt engineering and LLM fundamentals.</li>
                  <li>• Applied cloud deployment workflows to real-world, AI-driven solutions.</li>
                </ul>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                  <span className="font-['Fira_Code'] text-xs font-bold text-emerald-400">● VERIFIED BADGES</span>
                  <span className="px-2 py-0.5 bg-[#10b981] text-black font-black text-[11px] uppercase">COMPLETED</span>
                </div>
              </div>
            </div>

            {/* SIH Hackathon Card */}
            <div 
              onMouseEnter={() => playCyberBeep(900, 'triangle', 0.05)}
              className="neo-card p-0 border-[#facc15] !shadow-[6px_6px_0px_#facc15]"
            >
              <div className="bg-[#facc15] text-black font-black uppercase px-5 py-3 border-b-2 border-black flex justify-between items-center text-base sm:text-lg">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-trophy"></i>
                  <span>SMART INDIA HACKATHON (SIH) 2025</span>
                </span>
                <span className="text-xs bg-black text-[#facc15] px-2 py-0.5 font-['Fira_Code'] font-bold">2ND RUNNER-UP</span>
              </div>
              <div className="bg-[#0f0f13] p-6 space-y-3">
                <div className="font-['Fira_Code'] font-bold text-xs text-[#facc15] uppercase">
                  INTERNAL HACKATHON · TEAM LEAD & ARCHITECT
                </div>
                <div className="text-white font-bold text-base">
                  2nd Runner-Up Award with FasalSathi
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Competed with FasalSathi — an AI-powered smart agriculture platform enabling crop recommendation, plant disease detection with TensorFlow & OpenCV, and localized real-time farmer advisory.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                  <span className="font-['Fira_Code'] text-xs font-bold text-[#facc15]">★ NATIONAL PIPELINE</span>
                  <span className="px-2 py-0.5 bg-[#facc15] text-black font-black text-[11px] uppercase">AWARDED</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
