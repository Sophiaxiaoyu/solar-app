import React from 'react';

export function TermCustoms({ customs }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">传统习俗</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customs.map((custom, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
          >
            <p className="text-gray-600 dark:text-gray-300">{custom}</p>
          </div>
        ))}
      </div>
    </section>
  );
}