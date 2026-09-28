import { playCyberBeep } from '../utils/audio';

const Footer = ({ onOpenResume }) => {
  return (
    <footer className="border-t-4 border-[#3b82f6] bg-[#0a0a0c] pt-16 pb-12 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid md:grid-cols-12 gap-8 items-center pb-12 border-b-2 border-zinc-800">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-[#3b82f6] text-black font-black text-2xl border-2 border-white shadow-[4px_4px_0px_#fff]">
              NV
            </div>
            <div>
              <div className="font-black text-2xl uppercase tracking-wider text-white">
                Nilesh<span className="text-[#3b82f6]">.</span>Verma
              </div>
              <div className="font-['Fira_Code'] font-bold text-xs text-gray-400 uppercase mt-0.5">
                AI & FULL-STACK SOFTWARE ENGINEER
              </div>
            </div>
          </div>

          {/* Quick Nav & CV */}
          <div className="md:col-span-4 flex flex-wrap gap-4 items-center">
            <a 
              href="#home" 
              onClick={() => playCyberBeep(700, 'sine', 0.03)}
              className="font-['Fira_Code'] text-xs font-bold text-gray-400 hover:text-white uppercase transition-colors"
            >
              TOP ↑
            </a>
            <span className="text-zinc-700">/</span>
            <a 
              href="#projects" 
              onClick={() => playCyberBeep(750, 'sine', 0.03)}
              className="font-['Fira_Code'] text-xs font-bold text-gray-400 hover:text-white uppercase transition-colors"
            >
              PROJECTS
            </a>
            <span className="text-zinc-700">/</span>
            <button 
              onClick={() => {
                playCyberBeep(850, 'sine', 0.03);
                onOpenResume();
              }}
              className="font-['Fira_Code'] text-xs font-bold text-[#facc15] hover:underline uppercase transition-colors"
            >
              VIEW RESUME
            </button>
            <span className="text-zinc-700">/</span>
            <a 
              href="#contact" 
              onClick={() => playCyberBeep(800, 'sine', 0.03)}
              className="font-['Fira_Code'] text-xs font-bold text-[#10b981] hover:underline uppercase transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* Social Badges */}
          <div className="md:col-span-3 flex md:justify-end gap-3">
            <a 
              href="https://github.com/Nilesh6251" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => playCyberBeep(900, 'sine', 0.03)}
              className="w-11 h-11 flex items-center justify-center border-2 border-white bg-[#0f0f13] text-white hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#fff] transition-all"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>

            <a 
              href="https://www.linkedin.com/in/nilesh-verma-9845a3266" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => playCyberBeep(950, 'sine', 0.03)}
              className="w-11 h-11 flex items-center justify-center border-2 border-[#3b82f6] bg-[#0f0f13] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#3b82f6] transition-all"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>

            <a 
              href="mailto:nileshverma0052@gmail.com" 
              onClick={() => playCyberBeep(1000, 'sine', 0.03)}
              className="w-11 h-11 flex items-center justify-center border-2 border-[#10b981] bg-[#0f0f13] text-[#10b981] hover:bg-[#10b981] hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#10b981] transition-all"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-['Fira_Code'] font-bold text-gray-500 gap-4">
          <div>
            DESIGNED & DEVELOPED WITH CYBER NEO-BRUTALISM // 2025
          </div>
          <div>
            REACT 18 · FASTAPI · VERTEX AI · TAILWIND
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
