import React from 'react';
import { Header } from '../components/Header';
import { HomeNavigation } from '../components/HomeNavigation';
import { HistorySection } from '../components/HistorySection';
import { SeasonalNavigation } from '../components/SeasonalNavigation';
import { TermCategories } from '../components/TermCategories';
import { HistoricalValue } from '../components/HistoricalValue';
import { ScrollTopButton } from '../components/ScrollTopButton';

export function Home() {
  return (
    <div className="space-y-8">
      <HomeNavigation />
      <Header />
      <div id="history-section">
        <HistorySection />
      </div>
      <div id="navigation-section" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          节气导航
        </h2>
        <SeasonalNavigation />
      </div>
      <div id="categories-section">
        <TermCategories />
      </div>
      <div id="value-section">
        <HistoricalValue />
      </div>
      <ScrollTopButton />
    </div>
  );
}