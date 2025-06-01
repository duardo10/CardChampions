'use client';

import { Card } from '@/types';
import { rarityColors, formatPosition } from '@/lib/gameUtils';
import { useState } from 'react';
import Image from 'next/image';

interface PlayerCardProps {
  card: Card;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  showDetails?: boolean;
}

export default function PlayerCard({ 
  card, 
  size = 'medium', 
  onClick, 
  showDetails = false 
}: PlayerCardProps) {
  const [imageError, setImageError] = useState(false);
  const { player } = card;
  
  const sizeClasses = {
    small: 'w-32 h-44',
    medium: 'w-44 h-60',
    large: 'w-52 h-72'
  };
  
  const rarityColor = rarityColors[player.rarity];
  const isPlaceholder = (card as any).isPlaceholder;
  
  return (
    <div className="relative">
      <div 
        className={`${sizeClasses[size]} relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          isPlaceholder ? 'opacity-75 grayscale' : ''
        }`}
        onClick={onClick}
        style={{ 
          background: isPlaceholder 
            ? 'linear-gradient(135deg, #6b728080, #9ca3af80)' 
            : `linear-gradient(135deg, ${rarityColor}20, ${rarityColor}40)`,
          border: `2px solid ${isPlaceholder ? '#9ca3af' : rarityColor}`
        }}
      >
        {/* Brilho de raridade */}
        {!isPlaceholder && (
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              background: `radial-gradient(circle at center, ${rarityColor}60, transparent 70%)`
            }}
          />
        )}
        
        {/* Header com rating e posição */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
          <div 
            className={`bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-bold ${
              isPlaceholder ? 'opacity-50' : ''
            }`}
          >
            {player.rating}
          </div>
          <div 
            className="text-xs font-semibold px-2 py-1 rounded"
            style={{ 
              backgroundColor: isPlaceholder ? '#9ca3af' : rarityColor,
              color: 'white',
              opacity: isPlaceholder ? 0.7 : 1
            }}
          >
            {player.position}
          </div>
        </div>
        
        {/* Imagem do jogador */}
        <div className="relative h-3/5 overflow-hidden">
          {!imageError && player.image && !isPlaceholder ? (
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 128px, (max-width: 1200px) 176px, 208px"
            />
          ) : (
            <div className={`w-full h-full ${isPlaceholder ? 'bg-gray-400' : 'bg-gray-300'} flex items-center justify-center`}>
              <div className={`text-4xl ${isPlaceholder ? 'opacity-50' : ''}`}>
                {isPlaceholder ? '❓' : '⚽'}
              </div>
            </div>
          )}
          
          {/* Gradiente sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        {/* Informações do jogador */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className={`font-bold text-sm leading-tight mb-1 truncate ${isPlaceholder ? 'opacity-60' : ''}`}>
            {isPlaceholder ? 'Jogador Bloqueado' : player.name}
          </h3>
          <div className={`flex items-center justify-between text-xs ${isPlaceholder ? 'opacity-50' : ''}`}>
            <span className="truncate">{player.team}</span>
            <span>{player.country}</span>
          </div>
          
          {card.isUnique && !isPlaceholder && (
            <div className="mt-1">
              <span className="bg-yellow-500 text-black px-1 py-0.5 rounded text-xs font-bold">
                ÚNICO
              </span>
            </div>
          )}
        </div>
        
        {/* Serial number */}
        {!isPlaceholder && (
          <div className="absolute bottom-1 right-1 text-xs text-white opacity-60">
            #{card.serialNumber}
          </div>
        )}
        
        {/* Indicador de raridade */}
        <div 
          className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent"
          style={{ 
            borderBottomColor: isPlaceholder ? '#9ca3af' : rarityColor,
            opacity: isPlaceholder ? 0.5 : 1
          }}
        />
        
        {/* Overlay de placeholder */}
        {isPlaceholder && (
          <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-sm font-medium">Não Coletado</div>
              <div className="text-xs opacity-75 mt-1">{player.name}</div>
            </div>
          </div>
        )}
        
        {/* Estatísticas detalhadas (apenas quando showDetails = true) */}
        {showDetails && size === 'large' && !isPlaceholder && (
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-white font-bold mb-2 text-center">{player.name}</h4>
            <div className="space-y-1 text-xs text-white">
              <div className="flex justify-between">
                <span>Velocidade:</span>
                <span>{player.stats.pace}</span>
              </div>
              <div className="flex justify-between">
                <span>Finalização:</span>
                <span>{player.stats.shooting}</span>
              </div>
              <div className="flex justify-between">
                <span>Passe:</span>
                <span>{player.stats.passing}</span>
              </div>
              <div className="flex justify-between">
                <span>Defesa:</span>
                <span>{player.stats.defending}</span>
              </div>
              <div className="flex justify-between">
                <span>Drible:</span>
                <span>{player.stats.dribbling}</span>
              </div>
              <div className="flex justify-between">
                <span>Físico:</span>
                <span>{player.stats.physical}</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-yellow-400 text-xs">
                {formatPosition(player.position)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 