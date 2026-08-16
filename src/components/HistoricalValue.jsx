import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const values = [
  {
    title: '精神价值',
    description: '传承五千年文明，凝聚中华民族精神追求',
    icon: '🏮',
    path: '/value/spiritual',
    image: 'https://resource.letsbuild.fun/24/24-demo-1.jpg'
  },
  {
    title: '实际价值',
    description: '融合传统智慧，指导现代生活实践',
    icon: '🌾',
    path: '/value/practical',
    image: 'https://resource.letsbuild.fun/24/24-demo-3.jpg'
  }
];

export function HistoricalValue() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        历史价值
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((value) => (
          <Link key={value.title} to={value.path}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg shadow-md h-48 overflow-hidden" // Changed from h-80 to h-48
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${value.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white"> {/* Changed padding from p-6 to p-4 */}
                <div className="text-3xl mb-2">{value.icon}</div> {/* Changed from text-4xl mb-4 to text-3xl mb-2 */}
                <h3 className="text-xl font-bold mb-1"> {/* Changed from text-2xl mb-2 to text-xl mb-1 */}
                  {value.title}
                </h3>
                <p className="text-white/90 text-sm"> {/* Added text-sm */}
                  {value.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}