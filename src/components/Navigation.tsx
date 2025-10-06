import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isConferenceDropdownOpen, setIsConferenceDropdownOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'speakers', label: 'SPEAKERS', path: '/speakers' },
    { id: 'tracks', label: 'TRACKS', path: '/tracks' },
    { id: 'submission', label: 'SUBMISSION', path: '/submission' },
    { id: 'publication', label: 'PUBLICATION', path: '/publication' },
    { id: 'contact', label: 'CONTACT', path: '/contact' },
  ];

  const conferenceDropdownItems = [
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'committee', label: 'Committee', path: '/committee' },
    { id: 'sponsorship', label: 'Sponsorship', path: '/sponsorship' },
    { id: 'session-chair', label: 'Session Chair', path: '/session-chair' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Detect when we've scrolled past the initial hero/carousel viewport
  useEffect(() => {
    const NAV_HEIGHT = 88; // h-22
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

  // Handle opacity based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Increase opacity as we scroll down (opposite of previous logic)
      const newOpacity = Math.min(1 + scrollY / 300, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = isPastHero
    ? 'bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-700/30 shadow-xl'
    : 'bg-transparent';

  const getNavLinkClass = (isActiveLink: boolean) => {
    if (!isPastHero) {
      // Check if we're on the home page
      const isHomePage = location.pathname === '/';
      
      if (isHomePage) {
        // Home page over hero section - white text (for both light and dark mode)
        return isActiveLink
          ? 'text-white border-b-2 border-white'
          : 'text-white/90 hover:text-white';
      } else {
        // Other pages over hero section - black text in light mode, white in dark mode
        return isActiveLink
          ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
          : 'text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white';
      }
    }
    
    // Past hero section - theme-aware
    if (isActiveLink) {
      return 'text-blue-600 dark:text-blue-400';
    }
    
    return 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  // Updated theme toggle button styling for dark mode
  const getThemeButtonClass = () => {
    if (!isPastHero) {
      return 'bg-slate-100 dark:bg-blue-900 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-blue-700';
    }

    return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
  };

  const getBrochureButtonClass = () => {
    if (!isPastHero) {
      return 'bg-yellow-400 text-slate-900 hover:bg-yellow-500';
    }
    
    return 'bg-blue-600 text-white hover:bg-blue-700';
  };

  // Added delay for closing the dropdown menu
  let dropdownCloseTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownCloseTimeout); // Clear any existing timeout
    setIsConferenceDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownCloseTimeout = setTimeout(() => {
      setIsConferenceDropdownOpen(false);
    }, 300); // Delay of 300ms before closing
  };

  return (
    <nav 
      style={{ opacity }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBgClass}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Conference Logo" 
                  className="h-16 w-16 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${getNavLinkClass(isActive(item.path))}`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Conference Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${getNavLinkClass(conferenceDropdownItems.some(item => isActive(item.path)))}`}
                >
                  CONFERENCE
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${isConferenceDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isConferenceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 backdrop-blur-xl border border-slate-200/30 dark:border-slate-700/30 rounded-xl shadow-2xl z-50">
                    <div className="p-2">
                      {conferenceDropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                            isActive(item.path)
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                              : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Theme Toggle and Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${getThemeButtonClass()}`}
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={18} 
                  className={`absolute transition-all duration-300 ${
                    theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                  }`} 
                />
                <Moon 
                  size={18} 
                  className={`absolute transition-all duration-300 ${
                    theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
            
            {/* Download Brochure Button */}
            <button className={`hidden sm:flex items-center space-x-2 px-4 py-2 font-medium rounded-lg transition-all duration-200 ${getBrochureButtonClass()}`}>
              <Download size={16} />
              <span>Brochure</span>
            </button>

            {/* Mobile menu button */}
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isPastHero
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Conference Section */}
              <div className="px-4 py-2 text-base font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Conference
              </div>
              {conferenceDropdownItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <button className="flex items-center space-x-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 mt-4 font-medium">
                <Download size={16} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;