'use client';

import { useState } from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userBalance: number;
  userName: string;
}

export default function Navigation({ activeTab, onTabChange, userBalance, userName }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const tabs = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'collection', label: 'Coleção', icon: '🃏' },
    { id: 'album', label: 'Álbum', icon: '📖' },
    { id: 'store', label: 'Loja', icon: '🛍️' },
    { id: 'achievements', label: 'Conquistas', icon: '🏆' },
    { id: 'teams', label: 'Times', icon: '⚽' },
    { id: 'leaderboard', label: 'Ranking', icon: '👑' },
  ];
  
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <span className="text-xl animate-pulse">⚽</span>
              <span className="ml-2 text-lg font-bold text-white drop-shadow-lg">Card Champions</span>
              <span className="ml-2 text-xs text-indigo-200 bg-white bg-opacity-20 px-2 py-0.5 rounded-full backdrop-blur-sm">2026</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`group relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 transform ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-white to-yellow-100 text-purple-700 shadow-md scale-105 border border-yellow-300'
                      : 'text-white hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:from-10% hover:to-transparent hover:text-purple-700 hover:shadow-md hover:border hover:border-white hover:border-opacity-30'
                  }`}
                >
                  <span className="text-sm mr-1 group-hover:animate-bounce inline-block">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* User Info */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="text-right bg-white bg-opacity-10 backdrop-blur-sm rounded-md px-2 py-1 border border-white border-opacity-20">
              <div className="text-xs text-indigo-200">Olá, {userName}!</div>
              <div className="text-sm font-bold text-white flex items-center justify-end">
                <span className="animate-pulse mr-1 text-xs">💰</span>
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  ${userBalance.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer border-2 border-white border-opacity-30">
              <span className="text-white font-bold text-sm">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 inline-flex items-center justify-center p-1.5 rounded-lg text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 shadow-lg"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gradient-to-b from-purple-700 to-indigo-800 backdrop-blur-sm">
            {/* User info mobile */}
            <div className="px-3 py-2 text-center border border-white border-opacity-20 rounded-lg mb-3 bg-white bg-opacity-10 backdrop-blur-sm">
              <div className="text-xs text-indigo-200">Olá, {userName}!</div>
              <div className="text-lg font-bold text-white flex items-center justify-center">
                <span className="animate-pulse mr-2">💰</span>
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  ${userBalance.toFixed(2)}
                </span>
              </div>
            </div>
            
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-white to-yellow-100 text-purple-700 shadow-lg border border-yellow-300'
                    : 'text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-lg border border-transparent hover:border-white hover:border-opacity-30'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-lg mr-2 inline-block hover:animate-bounce">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
} 