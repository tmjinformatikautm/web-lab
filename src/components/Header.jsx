import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sectionIds = ['admin', 'gallery', 'schedule'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinkClass = (section) => `transition-colors px-3 py-1.5 rounded-full ${
    activeSection === section 
      ? 'bg-gray-900/5 text-black font-bold' 
      : 'text-gray-600 hover:text-black hover:bg-gray-100/50'
  }`;

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] flex justify-center w-full px-4 pt-4 pb-2 pointer-events-none">
        <header 
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] rounded-full ${
            scrolled 
              ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-apple w-[90%] max-w-4xl py-2 px-6' 
              : 'bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-transparent shadow-sm md:shadow-none w-full max-w-7xl py-3 px-4 sm:px-6 lg:px-8 md:py-3'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 relative z-[70]">
              <div className={`overflow-hidden rounded-[10px] bg-white shadow-sm flex items-center justify-center p-0.5 border border-gray-100 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                <img src="logo/logo-jai.png" alt="Logo Lab jai" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className={`font-semibold text-gray-900 tracking-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
                  Lab JAI
                </h1>
                {!scrolled && (
                  <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider animate-fadeIn hidden sm:block">Jaringan dan Inovasi</p>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 text-[13px] font-semibold">
              <a href="#admin" className={navLinkClass('admin')}>Tim Kami</a>
              <a href="#gallery" className={navLinkClass('gallery')}>Galeri</a>
              <a href="#schedule" className={navLinkClass('schedule')}>Jadwal</a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden relative z-[70] p-2 -mr-2 text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-[4px]">
                <span className={`block w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                <span className={`block w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay - macOS style glossy Blur */}
      <div 
        className={`fixed inset-0 z-[55] md:hidden bg-[#f5f5f7]/90 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex flex-col h-full pt-32 px-8 pb-12 transition-all duration-500 ease-out delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <nav className="flex flex-col gap-6 text-2xl font-bold tracking-tight text-gray-900">
            <a 
              href="#admin" 
              className={`pb-4 border-b border-gray-200/50 flex items-center justify-between group ${activeSection === 'admin' ? 'text-blue-600' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Tim Kami</span>
              <svg className={`w-6 h-6 transition-all ${activeSection === 'admin' ? 'text-blue-500' : 'text-gray-300 group-hover:text-black group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
            <a 
              href="#gallery" 
              className={`pb-4 border-b border-gray-200/50 flex items-center justify-between group ${activeSection === 'gallery' ? 'text-blue-600' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Galeri</span>
              <svg className={`w-6 h-6 transition-all ${activeSection === 'gallery' ? 'text-blue-500' : 'text-gray-300 group-hover:text-black group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
            <a 
              href="#schedule" 
              className={`pb-4 border-b border-gray-200/50 flex items-center justify-between group ${activeSection === 'schedule' ? 'text-blue-600' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Jadwal Lab</span>
              <svg className={`w-6 h-6 transition-all ${activeSection === 'schedule' ? 'text-blue-500' : 'text-gray-300 group-hover:text-black group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </nav>
          
          <div className="mt-auto pt-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-4">Universitas trunodjoyo madura</p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                 <img src="logo/logo-jai.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
