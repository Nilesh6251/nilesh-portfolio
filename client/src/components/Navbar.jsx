import { useState, useEffect } from 'react';
import { playCyberBeep } from '../utils/audio';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'stack', 'projects', 'experience', 'contact'];
      let current = 'home';
      sections.forEach(s => {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 180) current = s;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    playCyberBeep(700, 'sine', 0.04);
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${scrolled ? 'bg-[#0a0a0c]/95 backdrop-blur-md border-b-2 border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.8)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={() => playCyberBeep(900, 'sine', 0.05)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#3b82f6] text-black font-black text-lg border-2 border-black shadow-[3px_3px_0px_#000] group-hover:scale-105 transition-transform">
              NV
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-white text-lg uppercase tracking-wider">
                Nilesh<span className="text-[#3b82f6]">.</span>Verma
              </span>
              <span className="block text-[10px] font-['Fira_Code'] font-bold text-gray-400">
                AI & FULL-STACK DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => handleNavClick(link.id)}
                className={`font-['Fira_Code'] font-bold uppercase tracking-wider text-xs transition-all px-3 py-1.5 border-2 ${
                  activeSection === link.id 
                    ? 'border-[#3b82f6] text-[#3b82f6] bg-[#3b82f6]/10 shadow-[3px_3px_0px_#3b82f6]' 
                    : 'border-transparent text-gray-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <button 
              onClick={() => {
                playCyberBeep(800, 'triangle', 0.05);
                onOpenResume();
              }}
              className="px-3.5 py-1.5 border-2 border-[#facc15] bg-[#facc15]/10 text-[#facc15] font-['Fira_Code'] font-bold text-xs uppercase shadow-[2px_2px_0px_#facc15] hover:bg-[#facc15] hover:text-black transition-all flex items-center gap-1.5"
            >
              <i className="fa-regular fa-file-lines text-xs"></i>
              <span>RESUME</span>
            </button>

            {/* Hire Me CTA */}
            <a 
              href="#contact" 
              onClick={() => playCyberBeep(850, 'sine')}
              className="neo-btn hidden sm:inline-flex px-5 py-2 text-xs font-black"
            >
              HIRE ME
            </a>

            {/* Mobile Menu Hamburger */}
            <button 
              onClick={() => {
                playCyberBeep(600, 'sine', 0.03);
                setMenuOpen(!menuOpen);
              }} 
              className="lg:hidden p-2 text-white border-2 border-white hover:bg-white hover:text-black transition-colors" 
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f0f13] border-b-4 border-[#3b82f6] p-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={() => handleNavClick(link.id)} 
              className={`py-2.5 px-4 border-2 font-['Fira_Code'] font-bold uppercase tracking-wider text-xs ${
                activeSection === link.id 
                  ? 'border-[#3b82f6] text-[#3b82f6] bg-[#3b82f6]/10' 
                  : 'border-transparent text-gray-300'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => handleNavClick('contact')} 
            className="neo-btn text-center py-2.5 text-xs font-black mt-2"
          >
            HIRE ME NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
