import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function TermCard({ term }) {
  // 使用汉字作为图片URL的一部分，并确保正确编码
  const imageUrl = `https://resource.letsbuild.fun/24/${encodeURIComponent(term)}.gif`;
  
  return (
    <Link to={`/term/${encodeURIComponent(term)}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative pb-[100%]">
          <img
            src={imageUrl}
            alt={term}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-3 text-center">
          <h4 className="text-gray-800 dark:text-gray-200 font-medium">
            {term}
          </h4>
        </div>
      </motion.div>
    </Link>
  );
}