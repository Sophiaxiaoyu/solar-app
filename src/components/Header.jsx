import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const scrollToNav = () => {
    const navSection = document.getElementById('navigation-section');
    if (navSection) {
      const navHeight = 64; // Height of the fixed navigation bar
      const elementPosition = navSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ marginTop: '64px' }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://resource.letsbuild.fun/24/24.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.8)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50 z-10" />

      <div className="relative z-20 text-center text-white">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-lishu"
        >
          二十四节气
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-kaishu mb-12 text-white/90"
        >
          传统文化的时间智慧，自然与生活的完美融合
        </motion.p>
      </div>

      <motion.button
        onClick={scrollToNav}
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        aria-label="滚动到节气导航"
      >
        <svg 
          className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}