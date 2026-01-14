import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="SSME BizPro Logo" 
                loading="lazy"
                decoding="async"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? 'h-10' : 'h-12'
                }`}
              />
            </div>
            <div className={`font-bold tracking-tight transition-all duration-300 ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                SSME
              </span>
              <span className="text-gray-800 ml-1">BizPro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.name === 'Contact' ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 ${
                    scrolled ? 'px-8 py-3 text-base' : 'px-9 py-3.5 text-base'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-semibold text-gray-700 hover:text-gray-900 transition-all duration-200 relative group ${
                    scrolled ? 'text-lg px-5 py-2.5' : 'text-lg px-6 py-3'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg 
              className="w-7 h-7 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-gray-200 mt-3">
            {navLinks.map((link, index) => (
              link.name === 'Contact' ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-lg hover:shadow-blue-500/30 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-4 px-6 rounded-xl transition-all duration-200 text-lg border-b border-gray-100 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;