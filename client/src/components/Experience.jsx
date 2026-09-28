import { playCyberBeep } from '../utils/audio';
import { resumeData } from '../data/portfolioData';

const Experience = () => {
  const timelineItems = [
    {
      year: '2025',
      category: 'INDUSTRY INTERNSHIP',
      title: 'Google Cloud Generative AI Virtual Internship',
      organization: 'SmartBridge · Supported by Google Cloud · Remote',
      tech: 'Python, Vertex AI, BigQuery, Cloud Functions',
      bullets: [
        'Built and deployed generative AI applications using Vertex AI on Google Cloud.',
        'Completed multiple Google Cloud Skill Boost labs covering prompt engineering and LLM fundamentals.',
        'Applied cloud deployment workflows to real-world, AI-driven solutions.'
      ],
      skills: ['Python', 'Vertex AI', 'BigQuery', 'Cloud Functions', 'Google Cloud', 'Prompt Engineering'],
      badge: 'VERIFIED GOOGLE CLOUD SKILL BOOST',
      color: 'border-[#3b82f6]',
      bgYear: 'bg-[#3b82f6]',
      shadow: '!shadow-[6px_6px_0px_#3b82f6]'
    },
    {
      year: '2025',
      category: 'NATIONAL HACKATHON',
      title: '2nd Runner-Up — Internal Smart India Hackathon (SIH 2025)',
      organization: 'Bansal Institute of Science & Technology, Bhopal',
      tech: 'Python, FastAPI, TensorFlow, OpenCV, React, MongoDB',
      bullets: [
        'Engineered FasalSathi — AI-powered agriculture platform for crop recommendation and plant disease detection.',
        'Implemented computer vision models using TensorFlow and OpenCV to diagnose crop pathologies.',
        'Integrated live meteorological data APIs and built farmer-facing dashboards.'
      ],
      skills: ['TensorFlow', 'FastAPI', 'Computer Vision', 'React.js', 'MongoDB'],
      badge: '2ND RUNNER-UP TROPHY',
      color: 'border-[#facc15]',
      bgYear: 'bg-[#facc15]',
      shadow: '!shadow-[6px_6px_0px_#facc15]'
    },
    {
      year: '2024 – 2028',
      category: 'UNDERGRADUATE DEGREE',
      title: 'B.Tech in Information Technology',
      organization: 'Bansal Institute of Science & Technology, Bhopal, Madhya Pradesh',
      tech: 'C, C++, Data Structures, Database Systems (SQL), Operating Systems',
      bullets: [
        'Current Academic Standing: CGPA: 6.8 / 10.0 (through Semester III).',
        'Specializing in Artificial Intelligence, Cloud Computing, and Full-Stack Web Architecture.',
        'Active technical builder participating in competitive hackathons and open-source software.'
      ],
      skills: ['B.Tech IT', 'CGPA: 6.8', 'DSA', 'SQL', 'Computer Networks'],
      badge: 'CURRENTLY ENROLLED',
      color: 'border-[#a855f7]',
      bgYear: 'bg-[#a855f7]',
      shadow: '!shadow-[6px_6px_0px_#a855f7]'
    },
    {
      year: '2022 & 2024',
      category: 'SECONDARY EDUCATION',
      title: 'Higher Secondary & High School Certifications',
      organization: 'M.P. Board · Sehore, Madhya Pradesh',
      tech: 'Mathematics, Physics, Chemistry & Computer Foundations',
      bullets: [
        'Class XII (2024): Authentic Public H.S. School, Puchama — 80.05% (M.P. Board)',
        'Class X (2022): Bright Career H. School, Chandbad — 72.40% (M.P. Board)'
      ],
      skills: ['Class XII: 80.05%', 'Class X: 72.40%', 'M.P. Board'],
      badge: 'ACADEMIC MERIT',
      color: 'border-[#10b981]',
      bgYear: 'bg-[#10b981]',
      shadow: '!shadow-[6px_6px_0px_#10b981]'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 rv">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#10b981] text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            <i className="fa-solid fa-timeline"></i> VERIFIED CHRONOLOGY
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            EXPERIENCE & <span className="text-[#10b981]">EDUCATION</span>
          </h2>
          <p className="text-gray-400 font-['Fira_Code'] text-sm uppercase tracking-wider">
            // FROM OFFICIAL RESUME: GOOGLE CLOUD INTERNSHIP, SIH 2025, AND B.TECH AT BIST
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {timelineItems.map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => playCyberBeep(700 + idx * 80, 'sine', 0.03)}
              className="relative rv group"
            >
              {/* Connector Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 bg-black border-2 border-white group-hover:bg-[#10b981] group-hover:scale-125 transition-all flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white group-hover:bg-black"></span>
              </div>

              {/* Neo-Brutalist Card */}
              <div className={`neo-card p-0 border-2 ${item.color} ${item.shadow} flex flex-col md:flex-row transition-all group-hover:-translate-y-1`}>
                
                {/* Year Badge Column */}
                <div className={`${item.bgYear} text-black p-6 md:w-44 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black shrink-0`}>
                  <span className="font-['Fira_Code'] font-bold text-[10px] uppercase mb-1 opacity-80">TIMELINE</span>
                  <div className="font-black text-xl sm:text-2xl text-center tracking-tight leading-tight">
                    {item.year}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-1 bg-[#0f0f13] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-['Fira_Code'] text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 bg-black border border-zinc-700 text-gray-300 font-['Fira_Code'] text-[10px] font-bold uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-['Fira_Code'] font-bold text-xs sm:text-sm text-[#3b82f6] uppercase">
                      {item.organization}
                    </p>
                  </div>

                  <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 leading-relaxed list-disc list-inside">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                    {item.skills.map(t => (
                      <span key={t} className="font-['Fira_Code'] text-[11px] font-bold px-2 py-0.5 bg-[#0a0a0c] text-gray-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
