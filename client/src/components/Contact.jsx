import { useState } from 'react';
import { playCyberBeep, playSuccessBeep } from '../utils/audio';

const Contact = () => {
  const [copied, setCopied] = useState('');
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text, type) => {
    playSuccessBeep();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(''), 3000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playCyberBeep(900, 'square', 0.1);
    setFormState('sending');
    setTimeout(() => {
      playSuccessBeep();
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 rv">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#3b82f6] text-black font-['Fira_Code'] font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            <i className="fa-regular fa-paper-plane"></i> DIRECT COMMS
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            INITIATE <span className="text-[#3b82f6]">CONTACT</span>
          </h2>
          <p className="text-gray-400 font-['Fira_Code'] text-sm uppercase tracking-wider">
            // OPEN TO FULL-STACK & AI DEVELOPER OPPORTUNITIES, FREELANCE & COLLABORATIONS
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Direct Cards */}
          <div className="lg:col-span-6 space-y-6 rv">
            
            {/* Email Box */}
            <div 
              className="neo-card p-0 border-[#facc15] !shadow-[6px_6px_0px_#facc15] cursor-pointer group transition-all hover:-translate-y-1"
              onClick={() => copyToClipboard('nileshverma0052@gmail.com', 'email')}
            >
              <div className="bg-[#facc15] text-black font-black uppercase px-6 py-3.5 border-b-2 border-black flex justify-between items-center text-base sm:text-lg group-hover:bg-white transition-colors">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope"></i>
                  <span>PRIMARY EMAIL</span>
                </span>
                <span className="font-['Fira_Code'] text-xs font-bold bg-black text-[#facc15] px-2 py-0.5">
                  CLICK TO COPY
                </span>
              </div>
              <div className="bg-[#0f0f13] p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <div className="font-['Fira_Code'] font-bold text-xs text-[#facc15] mb-1 uppercase">24-HOUR RESPONSE RATE</div>
                  <div className="text-lg sm:text-2xl font-black text-white group-hover:text-[#facc15] transition-colors break-all">
                    nileshverma0052@gmail.com
                  </div>
                </div>
                {copied === 'email' ? (
                  <span className="font-['Fira_Code'] font-bold text-xs bg-[#facc15] text-black px-3 py-1.5 border-2 border-black animate-bounce shrink-0">
                    COPIED!
                  </span>
                ) : (
                  <i className="fa-regular fa-copy text-xl text-gray-500 group-hover:text-white transition-colors shrink-0"></i>
                )}
              </div>
            </div>

            {/* Phone Box */}
            <div 
              className="neo-card p-0 border-[#10b981] !shadow-[6px_6px_0px_#10b981] cursor-pointer group transition-all hover:-translate-y-1"
              onClick={() => copyToClipboard('+919754512932', 'phone')}
            >
              <div className="bg-[#10b981] text-black font-black uppercase px-6 py-3.5 border-b-2 border-black flex justify-between items-center text-base sm:text-lg group-hover:bg-white transition-colors">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-phone"></i>
                  <span>DIRECT PHONE / WHATSAPP</span>
                </span>
                <span className="font-['Fira_Code'] text-xs font-bold bg-black text-[#10b981] px-2 py-0.5">
                  CLICK TO COPY
                </span>
              </div>
              <div className="bg-[#0f0f13] p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <div className="font-['Fira_Code'] font-bold text-xs text-[#10b981] mb-1 uppercase">AVAILABLE 10:00 - 20:00 IST</div>
                  <div className="text-lg sm:text-2xl font-black text-white group-hover:text-[#10b981] transition-colors">
                    +91 9754512932
                  </div>
                </div>
                {copied === 'phone' ? (
                  <span className="font-['Fira_Code'] font-bold text-xs bg-[#10b981] text-black px-3 py-1.5 border-2 border-black animate-bounce shrink-0">
                    COPIED!
                  </span>
                ) : (
                  <i className="fa-regular fa-copy text-xl text-gray-500 group-hover:text-white transition-colors shrink-0"></i>
                )}
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/Nilesh6251" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => playCyberBeep(850, 'sine')}
                className="neo-btn py-4 text-xs font-black !bg-white !text-black !shadow-[4px_4px_0px_#fff]"
              >
                GITHUB PROFILE <i className="fa-brands fa-github ml-1.5 text-sm"></i>
              </a>

              <a 
                href="https://www.linkedin.com/in/nilesh-verma-9845a3266" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => playCyberBeep(950, 'sine')}
                className="neo-btn py-4 text-xs font-black !bg-[#3b82f6] !text-black !shadow-[4px_4px_0px_#3b82f6]"
              >
                LINKEDIN NETWORK <i className="fa-brands fa-linkedin ml-1.5 text-sm"></i>
              </a>
            </div>

            {/* Location Pill */}
            <div className="bg-[#0f0f13] border-2 border-zinc-800 p-4 font-['Fira_Code'] text-xs text-gray-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-red-500"></i>
                <span>LOCATION: Bhopal, Madhya Pradesh, India (IST / UTC+5:30)</span>
              </span>
              <span className="text-emerald-400 font-bold">● REMOTE READY</span>
            </div>

          </div>

          {/* Right Side: Message Dispatch Form */}
          <div className="lg:col-span-6 neo-card p-0 border-white !shadow-[8px_8px_0px_#fff] rv">
            <div className="bg-white text-black font-black uppercase px-6 py-3.5 border-b-2 border-black flex justify-between items-center text-base sm:text-lg">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-paper-plane"></i>
                <span>DISPATCH MESSAGE</span>
              </span>
              <span className="font-['Fira_Code'] text-xs font-bold bg-black text-white px-2 py-0.5">
                ENCRYPTED
              </span>
            </div>

            <div className="bg-[#0f0f13] p-6 sm:p-8">
              {formState === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#10b981] text-black border-2 border-black flex items-center justify-center mx-auto text-3xl font-black shadow-[4px_4px_0px_#000]">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">TRANSMISSION RECEIVED!</h3>
                  <p className="text-gray-300 font-['Fira_Code'] text-sm max-w-sm mx-auto">
                    Thanks for reaching out! Nilesh has received your dispatch and will reply to your email shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="neo-btn px-6 py-2.5 text-xs font-black mt-4"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-['Fira_Code'] font-bold text-xs uppercase mb-1.5 block text-gray-300">
                      YOUR NAME *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-[#0a0a0c] text-white border-2 border-white p-3 font-medium text-sm focus:outline-none focus:border-[#3b82f6] shadow-[3px_3px_0px_#fff] focus:shadow-[3px_3px_0px_#3b82f6] transition-all font-['Space_Grotesk']"
                    />
                  </div>

                  <div>
                    <label className="font-['Fira_Code'] font-bold text-xs uppercase mb-1.5 block text-gray-300">
                      YOUR EMAIL *
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-[#0a0a0c] text-white border-2 border-white p-3 font-medium text-sm focus:outline-none focus:border-[#3b82f6] shadow-[3px_3px_0px_#fff] focus:shadow-[3px_3px_0px_#3b82f6] transition-all font-['Space_Grotesk']"
                    />
                  </div>

                  <div>
                    <label className="font-['Fira_Code'] font-bold text-xs uppercase mb-1.5 block text-gray-300">
                      MESSAGE / PROJECT BRIEF *
                    </label>
                    <textarea 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or role..."
                      className="w-full bg-[#0a0a0c] text-white border-2 border-white p-3 font-medium text-sm focus:outline-none focus:border-[#3b82f6] shadow-[3px_3px_0px_#fff] focus:shadow-[3px_3px_0px_#3b82f6] transition-all font-['Space_Grotesk'] resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'sending'}
                    className="w-full neo-btn py-4 text-xs sm:text-sm font-black disabled:opacity-50"
                  >
                    {formState === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⚙</span> TRANSMITTING DISPATCH...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>TRANSMIT DISPATCH</span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
