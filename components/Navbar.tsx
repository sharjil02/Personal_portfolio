import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeLink = "https://drive.google.com/file/d/1l3Mpp5QYRZ0UiI8NWCXxHkWcprNKk7mU/view";

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      // Calculate offset for the fixed navbar
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-2 md:p-4 transition-all duration-500">
      <div className={`w-full max-w-6xl rounded-2xl px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-2xl shadow-blue-500/10 border-white/10 translate-y-0' 
          : 'bg-transparent border-transparent translate-y-1'
      }`}>
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col group cursor-pointer"
        >
          <span className="font-display text-base md:text-xl font-bold whitespace-nowrap leading-tight tracking-tight transition-transform duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Sharjil Bin Rashed
          </span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-emerald-500 font-black hidden sm:block">
            Data Analyst
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-xl hover:text-white group ${
                activeSection === link.href.slice(1) ? 'text-white bg-white/5' : 'text-zinc-400'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-300 ${
                activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
              }`}></span>
            </a>
          ))}
          <div className="pl-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 hover:shadow-blue-500/40"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-blue-600/90 hover:bg-blue-600 text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all"
          >
            CV
          </a>
          <button 
            className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black/60 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-20 left-4 right-4 glass rounded-3xl p-4 transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-10 scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                  activeSection === link.href.slice(1) 
                  ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-base font-bold uppercase tracking-widest">{link.name}</span>
                {activeSection === link.href.slice(1) && (
                   <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
                )}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl shadow-blue-500/10 active:scale-[0.98]"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;