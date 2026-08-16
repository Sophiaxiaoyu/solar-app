import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSolarTermDetail } from '../utils/solarTermUtils';
import { BackButton } from '../components/BackButton';
import { TermHeader } from '../components/term/TermHeader';
import { TermDescription } from '../components/term/TermDescription';
import { TermCustoms } from '../components/term/TermCustoms';
import { TermCharacteristics } from '../components/term/TermCharacteristics';
import { TermPoetry } from '../components/term/TermPoetry';
import { TermProverbs } from '../components/term/TermProverbs';
import { TermVideo } from '../components/term/TermVideo';
import { ScrollTopButton } from '../components/ScrollTopButton';

const backgroundImages = [
  'https://resource.letsbuild.fun/24/四至.jpg',
  'https://resource.letsbuild.fun/24/四中.jpg',
  'https://resource.letsbuild.fun/24/四季.jpg'
];

const specialBackgrounds = {
  '立春': 'https://resource.letsbuild.fun/24/四立.jpg',
  '立夏': 'https://resource.letsbuild.fun/24/四立.jpg'
};

const seasonColors = {
  spring: 'from-green-100/95 to-emerald-100/95 dark:from-green-900/95 dark:to-emerald-900/95',
  summer: 'from-amber-100/95 to-orange-100/95 dark:from-amber-900/95 dark:to-orange-900/95',
  autumn: 'from-yellow-100/95 to-amber-100/95 dark:from-yellow-900/95 dark:to-amber-900/95',
  winter: 'from-blue-100/95 to-indigo-100/95 dark:from-blue-900/95 dark:to-indigo-900/95'
};

export default function TermDetail() {
  const { termName } = useParams();
  const termDetail = getSolarTermDetail(termName);

  if (!termDetail) {
    return <Navigate to="/" replace />;
  }

  const backgroundStyle = useMemo(() => {
    const bgImage = specialBackgrounds[termDetail.name] || backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    return {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  }, [termDetail.name]);

  // Determine season color based on term name
  const getSeasonColor = () => {
    const springTerms = ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨'];
    const summerTerms = ['立夏', '小满', '芒种', '夏至', '小暑', '大暑'];
    const autumnTerms = ['立秋', '处暑', '白露', '秋分', '寒露', '霜降'];
    const winterTerms = ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'];

    if (springTerms.includes(termDetail.name)) return seasonColors.spring;
    if (summerTerms.includes(termDetail.name)) return seasonColors.summer;
    if (autumnTerms.includes(termDetail.name)) return seasonColors.autumn;
    if (winterTerms.includes(termDetail.name)) return seasonColors.winter;
    return seasonColors.spring; // default
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto relative"
    >
      <div className="fixed inset-0" style={backgroundStyle}>
        <div className={`absolute inset-0 bg-gradient-to-br ${getSeasonColor()}`} />
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <TermHeader term={termDetail} />

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg p-8">
          <TermDescription description={termDetail.description} />
          {termDetail.video && <TermVideo videoUrl={termDetail.video} />}
          <TermCustoms customs={termDetail.customs} />
          <TermCharacteristics characteristics={termDetail.characteristics} />
          <TermPoetry poetry={termDetail.poetry} />
          <TermProverbs proverbs={termDetail.proverbs} />
        </div>

        <ScrollTopButton />
      </div>
    </motion.div>
  );
}