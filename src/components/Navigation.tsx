import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'CONFERENCE', path: '/about' },
    { id: 'speakers', label: 'SPEAKERS', path: '/speakers' },
    { id: 'tracks', label: 'TRACKS', path: '/tracks' },
    { id: 'submission', label: 'SUBMISSION', path: '/submission' },
    { id: 'publication', label: 'PUBLICATION', path: '/publication' },
    { id: 'contact', label: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Detect when we've scrolled past the initial hero/carousel viewport
  useEffect(() => {
    const NAV_HEIGHT = 80; // h-20
    const handler = () => {
      const threshold = Math.max(window.innerHeight - NAV_HEIGHT, 0);
      setIsPastHero(window.scrollY > threshold);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler as EventListener);
      window.removeEventListener('resize', handler);
    };
  }, []);

  const navBgClass = isPastHero
    ? 'bg-white/95 dark:bg-black/90 backdrop-blur-sm border-b border-white/20 dark:border-gray-800'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Conference Logo" 
              className="h-16 w-16"
            />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Actions */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button> */}
            
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download size={16} />
              <span>Brochure</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/20"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-20 bg-black/80 backdrop-blur-sm z-40 md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* <button className="flex items-center space-x-2 w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 mt-4">
                <Download size={16} />
                <span>Download Brochure</span>
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;