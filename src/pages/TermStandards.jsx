import React from 'react';
import { motion } from 'framer-motion';
import { BackButton } from '../components/BackButton';

const standards = [
  {
    title: '斗转星移',
    content: '二十四节气原以北斗七星斗柄的旋转指向确定，北斗七星循环旋转，这斗转星移与季节变换有密切关系。北斗七星是北半球（中国位于北半球）的重要星象，斗转星移时北半球的黄赤交角及其附近一带的气候、物候亦在渐变，因此成为上古时代人们判断季节、节气变化的依据，即所谓"斗柄指东，天下皆春；斗柄指南，天下皆夏；斗柄指西，天下皆秋；斗柄指北，天下皆冬"的星象规律。',
    icon: '🌟'
  },
  {
    title: '圭表测影',
    content: '周朝时期周公"垒土为圭，立木为表，测日影，正地中，定四时"。利用一根直立八尺长的杆子，通过观测杆子在一年四季每天中午时投在地上的影子长度的变化情况来测量节气。在天气炎热的时候，投射在地上杆影最短的一天定为夏至；而在天气寒冷太阳对地照射角度偏低的时候，投在地上杆影最长的一天便被定为冬至。冬至后，杆影渐渐缩短，直到天气变暖杆影最短的夏至，一年四季就在杆影最长的冬至和杆影最短的夏至的范围之内变化，该测量方法被称为土圭表测影（或石圭表测影）。由于每个节气之间的间隔约为十五日，因此杆影的长度变化也非常有规律。',
    icon: '📏'
  },
  {
    title: '太阳黄经',
    content: '二十四节气是根据太阳在黄道（即地球绕太阳公转的轨道）上的位置来划分的。视太阳从春分点（黄经零度，此刻太阳垂直照射赤道）出发，每前进15°为一个节气，运行一周回到春分点，为一回归年，合360°，因此分为二十四个节气。二十四节气的名称为：立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒',
    icon: '☀️'
  }
];

export function TermStandards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <BackButton />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          节气划分标准
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((standard) => (
            <motion.div
              key={standard.title}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-800 dark:to-sky-900 
                       rounded-lg p-6 shadow-md"
            >
              <div className="text-4xl mb-4 text-center">{standard.icon}</div>
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                {standard.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {standard.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}