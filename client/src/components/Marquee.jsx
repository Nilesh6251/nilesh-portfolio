const Marquee = () => {
  const items = [
    'NEXT.JS (APP ROUTER)',
    'NODE.JS & EXPRESS',
    'VERTEX AI',
    'REACT.JS & MERN',
    'FASTAPI & PYTHON',
    'GEMINI 1.5 PRO',
    'SIH 2025 2ND RUNNER-UP',
    'GROQ LLAMA-3',
    'DOCKER & CLOUD',
    'GOOGLE CLOUD INTERN',
    'MONGODB & SQL',
    'WEBSOCKETS',
  ];

  return (
    <div className="relative py-8 overflow-hidden bg-[#0a0a0c] select-none my-6">
      {/* Top Banner - Electric Yellow */}
      <div className="bg-[#facc15] text-black border-y-2 border-black py-3 transform -rotate-1 shadow-[0_4px_0_#000] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center font-black text-sm tracking-wider uppercase">
          {[...items, ...items].map((item, idx) => (
            <span key={idx} className="flex items-center mx-4">
              <span className="text-black font-extrabold">{item}</span>
              <span className="mx-4 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Counter Banner - Electric Cyan/Blue */}
      <div className="bg-[#3b82f6] text-black border-b-2 border-black py-2.5 transform rotate-1 mt-[-6px] shadow-[0_4px_0_#000] overflow-hidden">
        <div className="animate-marquee-fast whitespace-nowrap flex items-center font-['Fira_Code'] font-bold text-xs tracking-widest uppercase">
          {[...items.slice().reverse(), ...items.slice().reverse()].map((item, idx) => (
            <span key={idx} className="flex items-center mx-4">
              <span className="text-black">{item}</span>
              <span className="mx-4">■</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
