import React from 'react';
import { PhotoCard } from './PhotoCard';
import { motion } from 'framer-motion';
import { Photo } from '../types/photo';

interface PhotoGridProps {
  photos: Photo[];
  mainCategory: string;
  subCategory: string;
}

export function PhotoGrid({ photos, mainCategory, subCategory }: PhotoGridProps) {
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