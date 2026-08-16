import React from 'react';
import { motion } from 'framer-motion';
import { BackButton } from '../components/BackButton';

const historyTimeline = [
  {
    period: '夏商时期',
    content: '最初确定的节气是冬至、夏至两个节气。从《夏小正》的记载和殷商时期的甲骨文、遗址发掘中，发现当时已能通过观测日影确定这两个重要节气。',
    image: 'https://resource.letsbuild.fun/24/24-demo-1.jpg'
  },
  {
    period: '西周时期',
    content: '进一步确定春分、秋分两个节气，形成了四时节气的基本框架。',
    image: 'https://resource.letsbuild.fun/24/24-demo-2.jpg'
  },
  {
    period: '春秋时期',
    content: '在四时基础上已经能确定八节。《左传》中多处记载了"分至启闭"等八节的信息。',
    image: 'https://resource.letsbuild.fun/24/24-demo-3.jpg'
  },
  {
    period: '战国时期',
    content: '二十四节气的雏形基本形成。《黄帝内经》《逸周书·时则训》等文献均出现相关记载。',
    image: 'https://resource.letsbuild.fun/24/24-demo-4.jpg'
  },
  {
    period: '秦汉时期',
    content: '二十四节气完善定型，首次完整记载于《淮南子》。汉武帝时期被纳入《太初历》，作为指导农事的历法补充。',
    image: 'https://resource.letsbuild.fun/24/24-demo-5.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function History() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <BackButton />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          二十四节气的历史渊源
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 leading-relaxed">
          二十四节气起源于黄河流域，是上古农耕文明的产物。它是古人用来指导农事的补充历法，通过长期观察太阳周年运动，总结出的一年中时令、气候、物候等方面的变化规律，被称为"太阳历"。
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {historyTimeline.map((period, index) => (
          <motion.div
            key={period.period}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={period.image}
                    alt={period.period}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {period.period}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {period.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}