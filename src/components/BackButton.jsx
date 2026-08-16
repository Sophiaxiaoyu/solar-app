import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BackButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-700 
                   shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 
                   dark:text-gray-200"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        返回首页
      </Link>
    </motion.div>
  );
}