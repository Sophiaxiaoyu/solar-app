import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '首页' },
    { path: '/history', label: '历史由来' },
    { path: '/introduction', label: '节气介绍' },
    { path: '/categories', label: '节气划分' },
    { path: '/value', label: '历史价值' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${location.pathname === item.path
                    ? 'border-indigo-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索节气..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <button className="absolute right-3 top-2.5">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}