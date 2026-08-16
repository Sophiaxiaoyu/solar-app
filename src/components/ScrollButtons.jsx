import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Show buttons when page has scrolled enough to make them useful
      setShowButtons(pageHeight > viewportHeight * 1.5 && scrollY > viewportHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg 
                     hover:shadow-xl transition-shadow duration-200 
                     text-gray-600 dark:text-gray-300 hover:text-gray-900 
                     dark:hover:text-white"
            aria-label="返回顶部"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>

          {/* Scroll to Bottom Button */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={scrollToBottom}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg 
                     hover:shadow-xl transition-shadow duration-200 
                     text-gray-600 dark:text-gray-300 hover:text-gray-900 
                     dark:hover:text-white"
            aria-label="滚动到底部"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}