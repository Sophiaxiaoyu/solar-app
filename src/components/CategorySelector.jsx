import React from 'react';
import { motion } from 'framer-motion';

export function CategorySelector({ categories, selectedCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(category)}
          className={`px-6 py-2 rounded-full transition-colors duration-300 ${
            selectedCategory === category
              ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}