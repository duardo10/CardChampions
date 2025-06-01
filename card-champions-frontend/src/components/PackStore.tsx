'use client';

import React, { useState } from 'react';
import { Pack } from '@/types';
import { packs, getPacksByRarity, getLimitedPacks } from '@/data/packs';

interface PackStoreProps {
  userCoins?: number;
  onPurchase?: (pack: Pack) => void;
}

const PackStore: React.FC<PackStoreProps> = ({ 
  userCoins = 1000,
  onPurchase = (pack) => console.log('Purchased:', pack.name) 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'basic' | 'premium' | 'elite' | 'ultimate' | 'limited'>('all');
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  const categories = [
    { key: 'all', name: 'Todos', icon: '🛍️' },
    { key: 'basic', name: 'Básicos', icon: '📦' },
    { key: 'premium', name: 'Premium', icon: '💎' },
    { key: 'elite', name: 'Elite', icon: '👑' },
    { key: 'ultimate', name: 'Ultimate', icon: '🌟' },
    { key: 'limited', name: 'Limitados', icon: '⏰' }
  ];

  const getFilteredPacks = () => {
    switch (selectedCategory) {
      case 'limited':
        return getLimitedPacks();
      case 'all':
        return packs;
      default:
        return getPacksByRarity(selectedCategory as Pack['rarity']);
    }
  };

  const getRarityColor = (rarity: Pack['rarity']) => {
    switch (rarity) {
      case 'basic': return 'from-gray-500 to-gray-700';
      case 'premium': return 'from-blue-500 to-blue-700';
      case 'elite': return 'from-purple-500 to-purple-700';
      case 'ultimate': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getRarityBorder = (rarity: Pack['rarity']) => {
    switch (rarity) {
      case 'basic': return 'border-gray-400';
      case 'premium': return 'border-blue-400';
      case 'elite': return 'border-purple-400';
      case 'ultimate': return 'border-yellow-400';
      default: return 'border-gray-400';
    }
  };

  const canAfford = (price: number) => userCoins >= price;

  const filteredPacks = getFilteredPacks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            🛍️ Loja de Pacotes
          </h1>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">💰</span>
              <span className="text-white text-lg">
                <span className="text-yellow-400 font-bold">{userCoins.toLocaleString()}</span>
                {' '}Moedas
              </span>
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

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPacks.map(pack => {
            const affordable = canAfford(pack.price);
            
            return (
              <div
                key={pack.id}
                className={`
                  relative bg-black/30 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer
                  ${getRarityBorder(pack.rarity)} hover:shadow-lg
                  ${pack.isLimited ? 'ring-2 ring-red-400 ring-opacity-50' : ''}
                `}
                onClick={() => setSelectedPack(pack)}
              >
                {/* Limited Badge */}
                {pack.isLimited && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 animate-pulse">
                    LIMITADO
                  </div>
                )}

                {/* Pack Image */}
                <div className={`h-48 bg-gradient-to-br ${getRarityColor(pack.rarity)} rounded-t-xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-20 absolute inset-0 flex items-center justify-center">
                    📦
                  </div>
                  <div className="text-4xl z-10">
                    {pack.rarity === 'basic' && '📦'}
                    {pack.rarity === 'premium' && '💎'}
                    {pack.rarity === 'elite' && '👑'}
                    {pack.rarity === 'ultimate' && '🌟'}
                  </div>
                </div>

                {/* Pack Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{pack.name}</h3>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">
                    {pack.description}
                  </p>

                  {/* Pack Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cartas:</span>
                      <span className="text-white font-medium">{pack.cardCount}</span>
                    </div>
                    
                    {pack.guaranteedRarity && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Garantia:</span>
                        <span className="text-green-400 font-medium capitalize">
                          {pack.guaranteedRarity === 'rare' && '⭐ Rara'}
                          {pack.guaranteedRarity === 'epic' && '🌟 Épica'}
                          {pack.guaranteedRarity === 'legendary' && '✨ Lendária'}
                        </span>
                      </div>
                    )}

                    {pack.theme && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Tema:</span>
                        <span className="text-blue-400 font-medium">{pack.theme}</span>
                      </div>
                    )}
                  </div>

                  {/* Price and Purchase */}
                  <div className="border-t border-gray-600 pt-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">💰</span>
                        <span className={`text-lg font-bold ${affordable ? 'text-white' : 'text-red-400'}`}>
                          {pack.price.toLocaleString()}
                        </span>
                      </div>
                      {!affordable && (
                        <span className="text-red-400 text-xs">Moedas insuficientes</span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (affordable) {
                          onPurchase(pack);
                        }
                      }}
                      disabled={!affordable}
                      className={`
                        w-full py-2 px-4 rounded-lg font-bold transition-all duration-200
                        ${affordable
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:scale-105'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }
                      `}
                    >
                      {affordable ? 'COMPRAR' : 'SEM MOEDAS'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pack Detail Modal */}
        {selectedPack && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl max-w-md w-full border-2 border-gray-600">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{selectedPack.name}</h2>
                  <button
                    onClick={() => setSelectedPack(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className={`h-32 bg-gradient-to-br ${getRarityColor(selectedPack.rarity)} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-4xl">
                    {selectedPack.rarity === 'basic' && '📦'}
                    {selectedPack.rarity === 'premium' && '💎'}
                    {selectedPack.rarity === 'elite' && '👑'}
                    {selectedPack.rarity === 'ultimate' && '🌟'}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {selectedPack.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Número de cartas:</span>
                    <span className="text-white font-bold">{selectedPack.cardCount}</span>
                  </div>
                  
                  {selectedPack.guaranteedRarity && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Raridade garantida:</span>
                      <span className="text-green-400 font-bold capitalize">
                        {selectedPack.guaranteedRarity}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-400">Preço:</span>
                    <span className="text-yellow-400 font-bold text-xl">
                      💰 {selectedPack.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (canAfford(selectedPack.price)) {
                      onPurchase(selectedPack);
                      setSelectedPack(null);
                    }
                  }}
                  disabled={!canAfford(selectedPack.price)}
                  className={`
                    w-full py-3 px-4 rounded-lg font-bold text-lg transition-all duration-200
                    ${canAfford(selectedPack.price)
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  {canAfford(selectedPack.price) ? 'COMPRAR PACOTE' : 'MOEDAS INSUFICIENTES'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredPacks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-white mb-2">Nenhum pacote encontrado</h3>
            <p className="text-gray-400">Selecione uma categoria diferente para ver mais pacotes!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackStore; 