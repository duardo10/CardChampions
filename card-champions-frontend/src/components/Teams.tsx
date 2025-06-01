'use client';

import { useState } from 'react';
import { teams, getPlayersByTeam } from '@/data/teams';
import { Card } from '@/types';

interface TeamsProps {
  userCards: Card[];
  onTeamSelect?: (teamId: string) => void;
}

export default function Teams({ userCards, onTeamSelect }: TeamsProps) {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const getTeamProgress = (teamId: string) => {
    const teamPlayers = getPlayersByTeam(teamId);
    const collectedPlayers = userCards.filter(card => 
      teamPlayers.some(player => player.id === card.player.id)
    );
    
    const uniqueCollected = new Set(collectedPlayers.map(card => card.player.id)).size;
    const totalPlayers = teamPlayers.length;
    
    return {
      collected: uniqueCollected,
      total: totalPlayers,
      percentage: Math.round((uniqueCollected / totalPlayers) * 100)
    };
  };

  const getRegionalTeams = () => {
    const regions = {
      'América do Sul': ['brazil', 'argentina', 'uruguay', 'colombia', 'chile', 'ecuador'],
      'América do Norte': ['usa', 'mexico', 'canada'],
      'Europa': ['france', 'england', 'spain', 'germany', 'italy', 'netherlands', 'portugal', 'belgium', 'croatia'],
      'África': ['morocco', 'senegal', 'ghana', 'nigeria'],
      'Ásia': ['japan', 'korea', 'saudi_arabia', 'iran'],
      'Oceania': ['australia'],
      'Oriente Médio': ['qatar']
    };

    return Object.entries(regions).map(([region, teamIds]) => ({
      region,
      teams: teams.filter(team => teamIds.includes(team.id))
    }));
  };

  const handleTeamClick = (teamId: string) => {
    setSelectedTeam(selectedTeam === teamId ? null : teamId);
    if (onTeamSelect) {
      onTeamSelect(teamId);
    }
  };

  const regionalTeams = getRegionalTeams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Seleções Nacionais
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Copa do Mundo FIFA 2026™ - 22 Seleções Participantes
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🔲 Grade
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                📋 Lista
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Grid View by Regions */
          <div className="space-y-12">
            {regionalTeams.map(({ region, teams: regionTeams }) => (
              <div key={region}>
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-300">
                  {region}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {regionTeams.map((team) => {
                    const progress = getTeamProgress(team.id);
                    return (
                      <div
                        key={team.id}
                        onClick={() => handleTeamClick(team.id)}
                        className={`bg-gray-800 hover:bg-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                          selectedTeam === team.id
                            ? 'border-blue-500 bg-blue-800 bg-opacity-50'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-6xl mb-4">{team.flag}</div>
                          <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                          <p className="text-gray-400 mb-4">{team.country}</p>
                          
                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progresso</span>
                              <span>{progress.collected}/{progress.total}</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress.percentage}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">{progress.percentage}%</div>
                          </div>
                          
                          <div className="text-sm text-gray-400">
                            Formação: {team.formation}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 font-semibold text-sm">
              <div className="col-span-1 text-center">Flag</div>
              <div className="col-span-3">Seleção</div>
              <div className="col-span-2">País</div>
              <div className="col-span-2">Formação</div>
              <div className="col-span-2">Jogadores</div>
              <div className="col-span-2">Progresso</div>
            </div>
            
            <div className="divide-y divide-gray-700">
              {teams.map((team) => {
                const progress = getTeamProgress(team.id);
                return (
                  <div
                    key={team.id}
                    onClick={() => handleTeamClick(team.id)}
                    className={`grid grid-cols-12 gap-4 p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
                      selectedTeam === team.id ? 'bg-blue-800 bg-opacity-50' : ''
                    }`}
                  >
                    <div className="col-span-1 text-center text-2xl">{team.flag}</div>
                    <div className="col-span-3 font-semibold">{team.name}</div>
                    <div className="col-span-2 text-gray-400">{team.country}</div>
                    <div className="col-span-2 text-gray-400">{team.formation}</div>
                    <div className="col-span-2 text-gray-400">{team.players.length} jogadores</div>
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${progress.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 min-w-[3rem]">
                          {progress.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Team Details */}
        {selectedTeam && (
          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {teams.find(t => t.id === selectedTeam)?.name}
              </h3>
              <p className="text-gray-400">
                Clique em "Álbum" no menu para ver os jogadores desta seleção
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {getTeamProgress(selectedTeam).total}
                </div>
                <div className="text-gray-400">Total de Jogadores</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {getTeamProgress(selectedTeam).collected}
                </div>
                <div className="text-gray-400">Coletados</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {getTeamProgress(selectedTeam).percentage}%
                </div>
                <div className="text-gray-400">Completo</div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Estatísticas Globais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{teams.length}</div>
              <div className="text-gray-400 text-sm">Seleções</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {teams.reduce((acc, team) => acc + team.players.length, 0)}
              </div>
              <div className="text-gray-400 text-sm">Jogadores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {regionalTeams.length}
              </div>
              <div className="text-gray-400 text-sm">Regiões</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {Math.round(
                  teams.reduce((acc, team) => acc + getTeamProgress(team.id).percentage, 0) / teams.length
                )}%
              </div>
              <div className="text-gray-400 text-sm">Progresso Médio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 