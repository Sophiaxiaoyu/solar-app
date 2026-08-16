import React from 'react';

export function TermDescription({ description }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">节气介绍</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </section>
  );
}