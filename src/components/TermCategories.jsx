import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: '四立',
    terms: ['立春', '立夏', '立秋', '立冬'],
    description: '四立标志着四季的开始',
    backgroundImage: 'https://resource.letsbuild.fun/24/四立.jpg'
  },
  {
    title: '四至',
    terms: ['春分', '夏至', '秋分', '冬至'],
    description: '四至反映太阳高度变化',
    backgroundImage: 'https://resource.letsbuild.fun/24/四至.jpg'
  },
  {
    title: '四中',
    terms: ['清明', '小满', '白露', '小雪'],
    description: '四中表示季节进程过半',
    backgroundImage: 'https://resource.letsbuild.fun/24/四中.jpg'
  },
  {
    title: '四季',
    terms: ['谷雨', '芒种', '寒露', '大雪'],
    description: '四季反映物候变化特征',
    backgroundImage: 'https://resource.letsbuild.fun/24/四季.jpg'
  }
];

export function TermCategories() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        节气划分
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg p-6 shadow-md relative overflow-hidden h-48"
            style={{
              backgroundImage: `url(${category.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
            
            <div className="relative z-10 h-full flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {category.title}
              </h3>
              <p className="text-white mb-4">
                {category.description}
              </p>
              <div className="flex-1 flex items-center">
                <div className="grid grid-cols-2 gap-6">
                  {category.terms.map((term) => (
                    <Link
                      key={term}
                      to={`/term/${term}`}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-lg text-center"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link
          to="/term-standards"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 
                   text-white hover:bg-blue-600 transition-colors duration-200
                   shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          了解节气划分标准
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}