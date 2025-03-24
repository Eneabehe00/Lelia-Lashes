import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'servizi', 'portfolio', 'about', 'contatti'];
      const scrollPosition = window.scrollY;
      
      // Change navbar style on scroll
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-serif font-bold hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text">
                Lelia <span className="font-light">Lashes</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Servizi', 'Portfolio', 'Chi Sono', 'Contatti'].map((item) => {
              const link = item.toLowerCase().replace(' ', '-');
              const sectionId = link === 'chi-sono' ? 'about' : link === 'home' ? 'home' : link;
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative px-2 py-1 group ${
                    activeSection === sectionId ? 'text-primary' : 'text-gray-800'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    activeSection === sectionId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 focus:outline-none"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {['Home', 'Servizi', 'Portfolio', 'Chi Sono', 'Contatti'].map((item) => {
              const link = item.toLowerCase().replace(' ', '-');
              const sectionId = link === 'chi-sono' ? 'about' : link === 'home' ? 'home' : link;
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 transition-all duration-300 ${
                    activeSection === sectionId
                      ? 'bg-primary/10 text-primary rounded-lg'
                      : 'text-gray-800 hover:bg-primary/5 hover:text-primary rounded-lg'
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;