'use client';

import { teams } from '@/data/teams';
import { packs } from '@/data/packs';

interface HomeProps {
  userBalance: number;
  collectionCount: number;
  onNavigateToStore: () => void;
  onNavigateToCollection: () => void;
}

export default function Home({ userBalance, collectionCount, onNavigateToStore, onNavigateToCollection }: HomeProps) {
  const totalPlayers = teams.reduce((acc, team) => acc + team.players.length, 0);
  const completionPercentage = Math.round((collectionCount / totalPlayers) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Card Champions
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-200">
              Copa do Mundo FIFA 2026™
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Colecione as cartas dos maiores craques do futebol mundial. 
              22 seleções, 242+ jogadores únicos te esperam!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">💰</div>
                <div className="text-2xl font-bold">${userBalance}</div>
                <div className="text-blue-200">Saldo Atual</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">🃏</div>
                <div className="text-2xl font-bold">{collectionCount}</div>
                <div className="text-blue-200">Cartas Coletadas</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-3xl mb-3">📊</div>
                <div className="text-2xl font-bold">{completionPercentage}%</div>
                <div className="text-blue-200">Progresso</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onNavigateToStore}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🛍️ Abrir Pacotes
              </button>
              <button
                onClick={onNavigateToCollection}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-20"
              >
                📖 Ver Coleção
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Teams */}
      <div className="py-16 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Seleções em Destaque</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {teams.slice(0, 12).map((team) => (
              <div
                key={team.id}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-opacity-20 transition-all duration-200 border border-white border-opacity-20"
              >
                <div className="text-4xl mb-2">{team.flag}</div>
                <div className="font-semibold text-sm">{team.name}</div>
                <div className="text-xs text-gray-300">{team.players.length} jogadores</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pack Highlights */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Pacotes Populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packs.slice(0, 4).map((pack) => (
              <div
                key={pack.id}
                className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg border border-white border-opacity-20"
              >
                <div className="text-2xl mb-3">📦</div>
                <h4 className="font-bold text-lg mb-2">{pack.name}</h4>
                <p className="text-sm text-gray-200 mb-4 h-12 overflow-hidden">{pack.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-bold">${pack.price}</span>
                  <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">
                    {pack.cardCount} cartas
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={onNavigateToStore}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-semibold transition-all duration-200"
            >
              Ver Todos os Pacotes →
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Estatísticas do Jogo</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{teams.length}</div>
              <div className="text-gray-300">Seleções</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{totalPlayers}</div>
              <div className="text-gray-300">Jogadores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{packs.length}</div>
              <div className="text-gray-300">Tipos de Pacotes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-gray-300">Raridades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 