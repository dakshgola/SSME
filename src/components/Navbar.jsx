import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md py-2' : 'bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="SSME BizPro Logo" 
              loading="lazy"
              decoding="async"
              className="h-10 md:h-12 transition-all duration-300"
            />
            <div className={`hidden sm:block font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>SSME BizPro</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.name === 'Contact' ? (
                <Button key={link.name} to={link.path} variant={'primary'} className={scrolled ? '' : ''}>
                  {link.name}
                </Button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 relative group ${scrolled ? 'text-white hover:text-blue-100' : 'text-white hover:text-yellow-300'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full`} />
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded text-white`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setMobileMenuOpen(false);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className={`flex flex-col space-y-3 p-4 rounded-lg shadow-lg ${scrolled ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white' : 'bg-gradient-to-r from-blue-900 to-blue-800 text-white'}`}>
            {navLinks.map((link) => (
              link.name === 'Contact' ? (
                <Button key={link.name} to={link.path} variant="primary" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium py-3 px-4 rounded transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  onKeyDown={(e) => { if (e.key === 'Enter') setMobileMenuOpen(false); }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;