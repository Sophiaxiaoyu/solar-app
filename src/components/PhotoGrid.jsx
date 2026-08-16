import React from 'react';
import { PhotoCard } from './PhotoCard';
import { motion } from 'framer-motion';

export function PhotoGrid({ photos, mainCategory, subCategory }) {
  return (
    <motion.div
      key={`${mainCategory}-${subCategory}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
    >
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </motion.div>
  );
}