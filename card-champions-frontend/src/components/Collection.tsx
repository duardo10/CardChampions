'use client';

import { useState, useMemo } from 'react';
import { Card, Player } from '@/types';
import { teams } from '@/data/teams';
import { filterCardsByTeam, sortCardsByValue, calculateCollectionPercentage } from '@/lib/gameUtils';
import PlayerCard from './PlayerCard';

interface CollectionProps {
  cards: Card[];
  onCardClick?: (card: Card) => void;
}

export default function Collection({ cards, onCardClick }: CollectionProps) {
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rarity' | 'rating' | 'name' | 'recent'>('rarity');
  
  // Filtrar e ordenar cartas
  const filteredAndSortedCards = useMemo(() => {
    let filtered = [...cards];
    
    // Filtrar por time
    if (selectedTeam !== 'all') {
      filtered = filterCardsByTeam(filtered, selectedTeam);
    }
    
    // Filtrar por raridade
    if (selectedRarity !== 'all') {
      filtered = filtered.filter(card => card.player.rarity === selectedRarity);
    }
    
    // Filtrar por posição
    if (selectedPosition !== 'all') {
      filtered = filtered.filter(card => card.player.position === selectedPosition);
    }
    
    // Ordenar
    switch (sortBy) {
      case 'rarity':
        return sortCardsByValue(filtered);
      case 'rating':
        return filtered.sort((a, b) => b.player.rating - a.player.rating);
      case 'name':
        return filtered.sort((a, b) => a.player.name.localeCompare(b.player.name));
      case 'recent':
        return filtered.sort((a, b) => b.dateObtained.getTime() - a.dateObtained.getTime());
      default:
        return filtered;
    }
  }, [cards, selectedTeam, selectedRarity, selectedPosition, sortBy]);
  
  // Estatísticas da coleção
  const stats = useMemo(() => {
    const totalCards = cards.length;
    const uniquePlayers = new Set(cards.map(card => card.player.id)).size;
    const totalAvailablePlayers = teams.flatMap(team => team.players).length;
    const completionPercentage = calculateCollectionPercentage(cards, totalAvailablePlayers);
    
    const rarityCount = {
      common: cards.filter(card => card.player.rarity === 'common').length,
      rare: cards.filter(card => card.player.rarity === 'rare').length,
      epic: cards.filter(card => card.player.rarity === 'epic').length,
      legendary: cards.filter(card => card.player.rarity === 'legendary').length,
    };
    
    return {
      totalCards,
      uniquePlayers,
      totalAvailablePlayers,
      completionPercentage,
      rarityCount
    };
  }, [cards]);
  
  return (
    <div className="space-y-6">
      {/* Estatísticas da Coleção */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Estatísticas da Coleção</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.totalCards}</div>
            <div className="text-sm text-gray-600">Total de Cartas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.uniquePlayers}</div>
            <div className="text-sm text-gray-600">Jogadores Únicos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.completionPercentage}%</div>
            <div className="text-sm text-gray-600">Coleção Completa</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">{stats.totalAvailablePlayers}</div>
            <div className="text-sm text-gray-600">Total Disponível</div>
          </div>
        </div>
        
        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${stats.completionPercentage}%` }}
          />
        </div>
        
        {/* Distribuição por raridade */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-600">{stats.rarityCount.common}</div>
            <div className="text-sm text-gray-500">Comuns</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">{stats.rarityCount.rare}</div>
            <div className="text-sm text-blue-500">Raras</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">{stats.rarityCount.epic}</div>
            <div className="text-sm text-purple-500">Épicas</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">{stats.rarityCount.legendary}</div>
            <div className="text-sm text-yellow-500">Lendárias</div>
          </div>
        </div>
      </div>
      
      {/* Filtros e Ordenação */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Filtros e Ordenação</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Filtro por Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Todos os Times</option>
              {teams.map(team => (
                <option key={team.id} value={team.id}>
                  {team.flag} {team.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Filtro por Raridade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Raridade</label>
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Todas as Raridades</option>
              <option value="common">Comum</option>
              <option value="rare">Rara</option>
              <option value="epic">Épica</option>
              <option value="legendary">Lendária</option>
            </select>
          </div>
          
          {/* Filtro por Posição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Posição</label>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Todas as Posições</option>
              <option value="GK">Goleiro</option>
              <option value="DEF">Defensor</option>
              <option value="MID">Meio-campo</option>
              <option value="FWD">Atacante</option>
            </select>
          </div>
          
          {/* Ordenação */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar Por</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rarity">Raridade</option>
              <option value="rating">Rating</option>
              <option value="name">Nome</option>
              <option value="recent">Mais Recente</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Grid de Cartas */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Suas Cartas ({filteredAndSortedCards.length})
          </h3>
        </div>
        
        {filteredAndSortedCards.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhuma carta encontrada
            </h3>
            <p className="text-gray-500">
              {cards.length === 0 
                ? 'Compre seu primeiro pacote para começar sua coleção!'
                : 'Tente ajustar os filtros para encontrar suas cartas.'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredAndSortedCards.map((card) => (
              <PlayerCard
                key={card.id}
                card={card}
                size="small"
                onClick={() => onCardClick?.(card)}
                showDetails
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 