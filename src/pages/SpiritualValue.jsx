import React from 'react';
import { motion } from 'framer-motion';
import { BackButton } from '../components/BackButton';

export function SpiritualValue() {
  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="fixed inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://resource.letsbuild.fun/24/value-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/95 to-yellow-100/95 dark:from-amber-900/95 dark:to-yellow-900/95" />
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
            精神价值
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              二十四节气作为"中国人通过观察太阳周年运动而形成的时间知识体系及其实践"，在五千多年文明发展中孕育的中华优秀传统文化，积淀着中华民族最深沉的精神追求，代表着中华民族独特的精神标识。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              这一文化遗产是中华民族生生不息、发展壮大的丰厚滋养，对延续和发展中华文明、促进人类文明进步，发挥着重要作用。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              经过千百年的发展，古人渐渐形成了许多基于某个节气独特的生活方式和约定俗成的行为习惯，这些方式、习惯慢慢就演变成了属于"二十四节气"特有的民俗，有的甚至还逐渐演变为了复合型的传统节日。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              这些习俗和节日无不寄托着古人对于美好生活的向往与热爱，体现了千百年来中国人热爱生活、辛勤劳动、追求美好的精神文化财富。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}