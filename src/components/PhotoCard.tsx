import React from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../types/photo';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-80 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 rounded-full px-3 py-1 text-sm">
          ❤️ {photo.likes}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {photo.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {photo.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            📸 拍摄技巧
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {photo.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {photo.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}