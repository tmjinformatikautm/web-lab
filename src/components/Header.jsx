import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md' 
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <img src="logo/logo-multimedia.png" alt="Logo Multimedia" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
                Lab JAI
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Jaringan dan Inovasi</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </header>
  );
}
