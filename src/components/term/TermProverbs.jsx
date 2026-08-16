import React from 'react';

export function TermProverbs({ proverbs }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">谚语集锦</h2>
      <div className="grid grid-cols-1 gap-4">
        {proverbs.map((proverb, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
          >
            <p className="text-gray-600 dark:text-gray-300">{proverb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}