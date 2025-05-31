'use client';

import { Pack } from '@/types';
import { rarityColors } from '@/lib/gameUtils';
import { useState } from 'react';

interface PackCardProps {
  pack: Pack;
  onPurchase: (pack: Pack) => void;
  disabled?: boolean;
  userBalance?: number;
}

export default function PackCard({ pack, onPurchase, disabled = false, userBalance = 0 }: PackCardProps) {
  const [imageError, setImageError] = useState(false);
  
  const canAfford = userBalance >= pack.price;
  const isDisabled = disabled || !canAfford;
  
  const getRarityColor = () => {
    if (pack.guaranteedRarity) {
      return rarityColors[pack.guaranteedRarity];
    }
    return '#6B7280'; // Gray for starter pack
  };
  
  const rarityColor = getRarityColor();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Pack Image */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={pack.image}
            alt={pack.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center text-white text-6xl"
            style={{ backgroundColor: rarityColor }}
          >
            📦
          </div>
        )}
        
        {/* Overlay com brilho */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            background: `linear-gradient(135deg, ${rarityColor}40, transparent)`
          }}
        />
        
        {/* Guaranteed rarity badge */}
        {pack.guaranteedRarity && (
          <div 
            className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: rarityColor }}
          >
            {pack.guaranteedRarity.toUpperCase()} GARANTIDO
          </div>
        )}
        
        {/* Price badge */}
        <div className="absolute bottom-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full font-bold">
          ${pack.price}
        </div>
      </div>
      
      {/* Pack Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{pack.name}</h3>
          <div className="text-right">
            <div className="text-sm text-gray-600">{pack.cardCount} cartas</div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {pack.description}
        </p>
        
        {/* Pack Features */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span>{pack.cardCount} cartas por pacote</span>
          </div>
          
          {pack.guaranteedRarity && (
            <div className="flex items-center text-sm">
              <span 
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: rarityColor }}
              ></span>
              <span>Carta {pack.guaranteedRarity} garantida</span>
            </div>
          )}
          
          <div className="flex items-center text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            <span>Possibilidade de cartas únicas</span>
          </div>
        </div>
        
        {/* Purchase Button */}
        <button
          onClick={() => onPurchase(pack)}
          disabled={isDisabled}
          className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-200 ${
            isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg'
          }`}
        >
          {!canAfford ? 'Saldo Insuficiente' : `Comprar por $${pack.price}`}
        </button>
        
        {!canAfford && (
          <div className="mt-2 text-center text-sm text-red-600">
            Você precisa de ${pack.price - userBalance} a mais
          </div>
        )}
      </div>
      
      {/* Shine effect for premium packs */}
      {pack.guaranteedRarity && (
        <div className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none">
          <div 
            className="absolute -inset-2 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"
            style={{ animationDuration: '2s' }}
          />
        </div>
      )}
    </div>
  );
} 