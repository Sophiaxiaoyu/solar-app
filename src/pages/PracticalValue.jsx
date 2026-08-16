import React from 'react';
import { motion } from 'framer-motion';
import { BackButton } from '../components/BackButton';

export function PracticalValue() {
  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="fixed inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://resource.letsbuild.fun/24/value-2.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/95 to-amber-100/95 dark:from-yellow-900/95 dark:to-amber-900/95" />
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            实际价值
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              二十四节气这一非物质文化遗产十分丰富，其中既包括相关的谚语、歌谣、传说等，又有传统生产工具、生活器具，以及工艺品、书画等艺术作品，还包括与节令关系密切的节日文化、生产仪式和民间风俗。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              随着中国城市化进程的加快和现代化农业技术的发展，"二十四节气"对于农事的指导功能逐渐减弱，但在当代中国人的生活世界中依然具有多方面的文化意义和社会功能。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              它鲜明地体现了中国人尊重自然、顺应自然规律和适应可持续发展的理念，彰显出中国人对宇宙和自然界认知的独特性及其实践活动的丰富性。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              这种与自然和谐相处的智慧和创造力，是人类文化多样性的生动见证。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}