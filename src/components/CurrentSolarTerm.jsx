import React from 'react';
import { motion } from 'framer-motion';
import { getCurrentSolarTerm } from '../utils/solarTermUtils';

export function CurrentSolarTerm() {
  const currentTerm = getCurrentSolarTerm();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        当前节气：{currentTerm.name}
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={currentTerm.image}
            alt={currentTerm.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {currentTerm.description}
          </p>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-200">
              <span className="font-semibold">时间：</span>{currentTerm.date}
            </p>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">习俗：</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {currentTerm.customs.map((custom, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 
                             px-2 py-1 rounded-full text-sm"
                  >
                    {custom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}