'use client';

import { useState } from 'react';
import { Card } from '@/types';
import { teams } from '@/data/teams';

interface TeamComparisonProps {
  cards: Card[];
  onClose: () => void;
}

export default function TeamComparison({ cards, onClose }: TeamComparisonProps) {
  const [selectedTeams, setSelectedTeams] = useState<string[]>(['brazil', 'argentina']);
  
  const availableTeams = teams.map(team => ({
    id: team.id,
    name: team.name,
    flag: team.flag,
    formation: team.formation,
    playerCount: team.players.length
  }));
  
  const getTeamStats = (teamId: string) => {
    const team = teams.find(t => t.id === teamId);
    if (!team) return null;
    
    const userCardsForTeam = cards.filter(card => 
      team.players.some(player => player.id === card.player.id)
    );
    
    const positions = {
      GK: team.players.filter(p => p.position === 'GK').length,
      DEF: team.players.filter(p => p.position === 'DEF').length,
      MID: team.players.filter(p => p.position === 'MID').length,
      FWD: team.players.filter(p => p.position === 'FWD').length,
    };
    
    const collectedByPosition = {
      GK: userCardsForTeam.filter(card => card.player.position === 'GK').length,
      DEF: userCardsForTeam.filter(card => card.player.position === 'DEF').length,
      MID: userCardsForTeam.filter(card => card.player.position === 'MID').length,
      FWD: userCardsForTeam.filter(card => card.player.position === 'FWD').length,
    };
    
    const rarityCount = {
      legendary: userCardsForTeam.filter(card => card.player.rarity === 'legendary').length,
      epic: userCardsForTeam.filter(card => card.player.rarity === 'epic').length,
      rare: userCardsForTeam.filter(card => card.player.rarity === 'rare').length,
      common: userCardsForTeam.filter(card => card.player.rarity === 'common').length,
    };
    
    const averageRating = team.players.reduce((sum, player) => sum + player.rating, 0) / team.players.length;
    
    return {
      team,
      collected: userCardsForTeam.length,
      total: team.players.length,
      completion: (userCardsForTeam.length / team.players.length) * 100,
      positions,
      collectedByPosition,
      rarityCount,
      averageRating: Math.round(averageRating)
    };
  };
  
  const teamStats = selectedTeams.map(teamId => getTeamStats(teamId)).filter(Boolean);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">🔄 Comparar Seleções</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ✕
            </button>
          </div>
          
          {/* Seletores de times */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">
                  Seleção {index + 1}
                </label>
                <select
                  value={selectedTeams[index] || ''}
                  onChange={(e) => {
                    const newTeams = [...selectedTeams];
                    newTeams[index] = e.target.value;
                    setSelectedTeams(newTeams);
                  }}
                  className="w-full p-3 rounded-lg text-gray-800 font-medium"
                >
                  {availableTeams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.flag} {team.name} ({team.formation})
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparação */}
        <div className="p-6">
          {teamStats.length === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamStats.map((stats, index) => (
                <div key={stats.team.id} className="space-y-6">
                  {/* Header da seleção */}
                  <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                    <div className="text-6xl mb-3">{stats.team.flag}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {stats.team.name}
                    </h3>
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span>📋 {stats.team.formation}</span>
                      <span>⭐ Média: {stats.averageRating}</span>
                    </div>
                  </div>
                  
                  {/* Estatísticas gerais */}
                  <div className="bg-white border rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-4 text-center">📊 Coleção</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {stats.collected}
                        </div>
                        <div className="text-sm text-blue-500">Coletadas</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {Math.round(stats.completion)}%
                        </div>
                        <div className="text-sm text-green-500">Completo</div>
                      </div>
                    </div>
                    
                    {/* Barra de progresso */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${stats.completion}%` }}
                        />
                      </div>
                      <div className="text-center text-sm text-gray-600 mt-1">
                        {stats.collected}/{stats.total} jogadores
                      </div>
                    </div>
                  </div>
                  
                  {/* Por posições */}
                  <div className="bg-white border rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-4 text-center">🎯 Por Posições</h4>
                    <div className="space-y-3">
                      {[
                        { pos: 'GK', label: 'Goleiros', icon: '🥅', color: 'green' },
                        { pos: 'DEF', label: 'Defensores', icon: '🛡️', color: 'blue' },
                        { pos: 'MID', label: 'Meio-campo', icon: '⚽', color: 'yellow' },
                        { pos: 'FWD', label: 'Atacantes', icon: '🎯', color: 'red' },
                      ].map(position => {
                        const total = stats.positions[position.pos as keyof typeof stats.positions];
                        const collected = stats.collectedByPosition[position.pos as keyof typeof stats.collectedByPosition];
                        const percentage = total > 0 ? (collected / total) * 100 : 0;
                        
                        return (
                          <div key={position.pos} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">
                                {position.icon} {position.label}
                              </span>
                              <span className="text-sm text-gray-600">
                                {collected}/{total}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`bg-${position.color}-500 h-2 rounded-full transition-all duration-500`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Por raridade */}
                  <div className="bg-white border rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-4 text-center">💎 Por Raridade</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="text-xl font-bold text-yellow-600">
                          {stats.rarityCount.legendary}
                        </div>
                        <div className="text-xs text-yellow-500">Lendárias</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">
                          {stats.rarityCount.epic}
                        </div>
                        <div className="text-xs text-purple-500">Épicas</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">
                          {stats.rarityCount.rare}
                        </div>
                        <div className="text-xs text-blue-500">Raras</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-600">
                          {stats.rarityCount.common}
                        </div>
                        <div className="text-xs text-gray-500">Comuns</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Comparação lado a lado */}
          {teamStats.length === 2 && (
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center mb-6">🆚 Comparação Direta</h3>
              
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {teamStats[0].collected}
                  </div>
                  <div className="text-sm text-gray-600">Cartas Coletadas</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl">🆚</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {teamStats[1].collected}
                  </div>
                  <div className="text-sm text-gray-600">Cartas Coletadas</div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(teamStats[0].completion)}%
                  </div>
                  <div className="text-sm text-gray-600">Completude</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl">📊</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(teamStats[1].completion)}%
                  </div>
                  <div className="text-sm text-gray-600">Completude</div>
                </div>
              </div>
              
              {/* Vencedor */}
              <div className="mt-6 text-center">
                {teamStats[0].completion > teamStats[1].completion ? (
                  <div className="text-lg font-bold text-blue-600">
                    🏆 {teamStats[0].team.flag} {teamStats[0].team.name} está à frente!
                  </div>
                ) : teamStats[1].completion > teamStats[0].completion ? (
                  <div className="text-lg font-bold text-purple-600">
                    🏆 {teamStats[1].team.flag} {teamStats[1].team.name} está à frente!
                  </div>
                ) : (
                  <div className="text-lg font-bold text-gray-600">
                    🤝 Empate técnico!
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 