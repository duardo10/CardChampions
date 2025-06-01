'use client';

import React, { useState } from 'react';
import { Achievement } from '@/types';
import { achievements, getAchievementsByCategory } from '@/data/achievements';

interface AchievementsProps {
  userAchievements?: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ userAchievements = achievements }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'collection' | 'rarity' | 'team' | 'pack' | 'position' | 'special'>('all');

  const categories = [
    { key: 'all', name: 'Todas', icon: '🏆' },
    { key: 'collection', name: 'Coleção', icon: '🃏' },
    { key: 'rarity', name: 'Raridade', icon: '⭐' },
    { key: 'team', name: 'Seleções', icon: '🌍' },
    { key: 'pack', name: 'Pacotes', icon: '📦' },
    { key: 'position', name: 'Posições', icon: '⚽' },
    { key: 'special', name: 'Especiais', icon: '🎖️' }
  ];

  const getFilteredAchievements = () => {
    if (selectedCategory === 'all') {
      return userAchievements;
    }
    return getAchievementsByCategory(selectedCategory as any);
  };

  const getProgressPercentage = (progress: number, maxProgress: number) => {
    return Math.min((progress / maxProgress) * 100, 100);
  };

  const getRewardText = (reward: Achievement['reward']) => {
    switch (reward.type) {
      case 'coins':
        return `${reward.amount} Moedas`;
      case 'pack':
        return `Pacote ${reward.item}`;
      case 'card':
        return `Carta ${reward.item}`;
      case 'title':
        return `Título: ${reward.item}`;
      default:
        return 'Recompensa especial';
    }
  };

  const filteredAchievements = getFilteredAchievements();
  const unlockedCount = filteredAchievements.filter(a => a.unlocked).length;
  const totalCount = filteredAchievements.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            🏆 Conquistas
          </h1>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-white text-lg">
              <span className="text-yellow-400 font-bold">{unlockedCount}</span>
              {' '}/{' '}
              <span className="text-gray-300">{totalCount}</span>
              {' '}Conquistas Desbloqueadas
            </p>
            <div className="w-64 bg-gray-700 rounded-full h-3 mt-2">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key as any)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2
                ${selectedCategory === category.key
                  ? 'bg-yellow-500 text-black shadow-lg scale-105'
                  : 'bg-black/30 text-white hover:bg-black/50'
                }
              `}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map(achievement => {
            const progressPercentage = getProgressPercentage(achievement.progress, achievement.maxProgress);
            
            return (
              <div
                key={achievement.id}
                className={`
                  relative bg-black/30 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105
                  ${achievement.unlocked
                    ? 'border-yellow-400 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 shadow-lg shadow-yellow-400/20'
                    : 'border-gray-600 hover:border-gray-400'
                  }
                `}
              >
                {/* Achievement Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  {achievement.unlocked && (
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      ✓ DESBLOQUEADA
                    </div>
                  )}
                </div>

                {/* Achievement Info */}
                <h3 className={`text-lg font-bold mb-2 ${achievement.unlocked ? 'text-yellow-400' : 'text-white'}`}>
                  {achievement.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progresso</span>
                    <span className={achievement.unlocked ? 'text-yellow-400' : 'text-white'}>
                      {achievement.progress} / {achievement.maxProgress}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Reward */}
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Recompensa:</span>
                    <span className={`text-sm font-medium ${achievement.unlocked ? 'text-yellow-400' : 'text-green-400'}`}>
                      {getRewardText(achievement.reward)}
                    </span>
                  </div>
                </div>

                {/* Unlocked Date */}
                {achievement.unlocked && achievement.dateUnlocked && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-400">
                      Desbloqueada em {new Date(achievement.dateUnlocked).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2">Nenhuma conquista encontrada</h3>
            <p className="text-gray-400">Selecione uma categoria diferente ou continue jogando para desbloquear conquistas!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements; 