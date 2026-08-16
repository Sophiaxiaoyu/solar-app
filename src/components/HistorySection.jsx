import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HistorySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16"
      style={{
        backgroundImage: `url(https://resource.letsbuild.fun/24/历史渊源.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-center text-white"
        >
          历史渊源
        </motion.h2>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 text-center mb-8 leading-relaxed space-y-4"
        >
          <p>二十四节气起源于黄河流域，是上古农耕文明的产物。始于立春，终于大寒。</p>
          <p>这一独特的时间智慧体系，凝聚着中华民族数千年的观察与实践。</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/history"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white/90 
                     text-gray-900 hover:bg-white transition-colors duration-200
                     text-lg font-medium dark:bg-gray-800/90 dark:text-white 
                     dark:hover:bg-gray-800"
          >
            探索历史
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}