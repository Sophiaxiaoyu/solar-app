import React from 'react';
import { motion } from 'framer-motion';
import { TermCard } from './TermCard';

const seasons = [
  { id: 'spring', name: '春季', color: 'bg-green-200', terms: ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨'] },
  { id: 'summer', name: '夏季', color: 'bg-orange-200', terms: ['立夏', '小满', '芒种', '夏至', '小暑', '大暑'] },
  { id: 'autumn', name: '秋季', color: 'bg-amber-200', terms: ['立秋', '处暑', '白露', '秋分', '寒露', '霜降'] },
  { id: 'winter', name: '冬季', color: 'bg-blue-300', terms: ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'] },
];

export function SeasonalNavigation() {
  return (
    <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
      {seasons.map((season) => (
        <motion.div
          key={season.id}
          id={season.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full"
        >
          <div className={`${season.color} h-2`} />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              {season.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {season.terms.map((term) => (
                <TermCard key={term} term={term} />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}