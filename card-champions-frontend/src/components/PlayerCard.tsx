'use client';

import { Card, Player } from '@/types';
import { rarityColors, formatPosition } from '@/lib/gameUtils';
import { useState } from 'react';

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
    medium: 'w-40 h-56',
    large: 'w-48 h-68'
  };
  
  const rarityColor = rarityColors[player.rarity];
  
  return (
    <div 
      className={`${sizeClasses[size]} relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
      onClick={onClick}
      style={{ 
        background: `linear-gradient(135deg, ${rarityColor}20, ${rarityColor}40)`,
        border: `2px solid ${rarityColor}`
      }}
    >
      {/* Brilho de raridade */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          background: `radial-gradient(circle at center, ${rarityColor}60, transparent 70%)`
        }}
      />
      
      {/* Header com rating e posição */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
        <div 
          className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-bold"
        >
          {player.rating}
        </div>
        <div 
          className="text-xs font-semibold px-2 py-1 rounded"
          style={{ 
            backgroundColor: rarityColor,
            color: 'white'
          }}
        >
          {player.position}
        </div>
      </div>
      
      {/* Imagem do jogador */}
      <div className="relative h-3/5 overflow-hidden">
        {!imageError ? (
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <div className="text-4xl">⚽</div>
          </div>
        )}
        
        {/* Gradiente sobre a imagem */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      {/* Informações do jogador */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
        <h3 className="font-bold text-sm leading-tight mb-1 truncate">
          {player.name}
        </h3>
        <div className="flex items-center justify-between text-xs">
          <span className="truncate">{player.team}</span>
          <span>{player.country}</span>
        </div>
        
        {card.isUnique && (
          <div className="mt-1">
            <span className="bg-yellow-500 text-black px-1 py-0.5 rounded text-xs font-bold">
              ÚNICO
            </span>
          </div>
        )}
      </div>
      
      {/* Serial number */}
      <div className="absolute bottom-1 right-1 text-xs text-white opacity-60">
        #{card.serialNumber}
      </div>
      
      {/* Indicador de raridade */}
      <div 
        className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent"
        style={{ borderBottomColor: rarityColor }}
      />
      
      {/* Estatísticas detalhadas (apenas quando showDetails = true) */}
      {showDetails && size === 'large' && (
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
  );
} 