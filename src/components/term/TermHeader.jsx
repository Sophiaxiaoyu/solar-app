import React from 'react';
import { motion } from 'framer-motion';

export function TermHeader({ term }) {
  return (
    <div className="relative h-48 mb-8">
      <img
        src={term.image}
        alt={term.name}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl font-bold text-white mb-2">{term.name}</h1>
          <p className="text-white/90">{term.date}</p>
        </div>
      </div>
    </div>
  );
}