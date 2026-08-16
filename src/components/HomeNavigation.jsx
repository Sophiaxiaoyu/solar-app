import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function HomeNavigation() {
  const [activeSection, setActiveSection] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const sections = [
    { id: 'history-section', label: '历史渊源' },
    { 
      id: 'navigation-section', 
      label: '节气导航',
      dropdownItems: [
        { label: '春季', id: 'spring' },
        { label: '夏季', id: 'summer' },
        { label: '秋季', id: 'autumn' },
        { label: '冬季', id: 'winter' }
      ]
    },
    { id: 'categories-section', label: '节气划分' },
    { id: 'value-section', label: '历史价值' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/term/${searchTerm.trim()}`);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, subSectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // Height of the fixed navigation bar
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });

      if (subSectionId) {
        const subSection = document.getElementById(subSectionId);
        if (subSection) {
          setTimeout(() => {
            const subSectionPosition = subSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: subSectionPosition - navHeight,
              behavior: 'smooth'
            });
          }, 500);
        }
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-4">
            {sections.map((section) => (
              <div key={section.id} className="relative">
                <motion.button
                  onClick={() => {
                    scrollToSection(section.id);
                    if (section.dropdownItems) {
                      setShowDropdown(!showDropdown);
                    }
                  }}
                  onMouseEnter={() => section.dropdownItems && setShowDropdown(true)}
                  onMouseLeave={() => section.dropdownItems && setShowDropdown(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                    font-kaishu text-lg tracking-wider
                    ${activeSection === section.id
                      ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {section.label}
                </motion.button>

                {section.dropdownItems && (
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        {section.dropdownItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(section.id, item.id)}
                            className="block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 
                                     hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索节气..."
                className="w-40 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2
                         text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}