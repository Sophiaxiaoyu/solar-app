import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-800 dark:text-white font-kaishu">
            春雨惊春清谷天，夏满芒夏暑相连，
            秋处露秋寒霜降，冬雪雪冬小大寒。
          </p>
          
          <div className="text-gray-600 dark:text-gray-300">
            <Link to="/about" className="hover:text-gray-900 dark:hover:text-white">关于我们</Link>
            <span className="mx-2">|</span>
            <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}