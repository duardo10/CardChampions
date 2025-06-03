'use client';

import { teams } from '@/data/teams';
import { packs } from '@/data/packs';

interface HomeProps {
  userBalance: number;
  collectionCount: number;
  onNavigateToStore: () => void;
  onNavigateToCollection: () => void;
}

// Mapeamento de países para códigos ISO corretos para a API de bandeiras
const getCountryCode = (country: string): string => {
  const countryMap: { [key: string]: string } = {
    'Brazil': 'BR',
    'Argentina': 'AR', 
    'France': 'FR',
    'Germany': 'DE',
    'Spain': 'ES',
    'England': 'GB',
    'Portugal': 'PT',
    'Netherlands': 'NL',
    'Italy': 'IT',
    'Belgium': 'BE',
    'Croatia': 'HR',
    'Morocco': 'MA',
    'Japan': 'JP',
    'Mexico': 'MX',
    'United States': 'US',
    'Canada': 'CA',
    'Uruguay': 'UY',
    'Colombia': 'CO',
    'Chile': 'CL',
    'Ecuador': 'EC',
    'Peru': 'PE',
    'Poland': 'PL',
    'Denmark': 'DK',
    'Sweden': 'SE',
    'Norway': 'NO',
    'Switzerland': 'CH',
    'Austria': 'AT',
    'Czech Republic': 'CZ',
    'Australia': 'AU'
  };
  
  return countryMap[country] || country.substring(0, 2).toUpperCase();
};

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
            
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Saldo Card - Clickable */}
              <div 
                onClick={onNavigateToStore}
                className="bg-gradient-to-br from-green-500 to-emerald-600 backdrop-blur-lg rounded-xl p-6 border border-green-400 border-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="text-4xl mb-3">💰</div>
                <div className="text-3xl font-bold text-white">${userBalance.toFixed(2)}</div>
                <div className="text-green-100 mb-2">Seu Saldo</div>
                <div className="text-xs text-green-200 bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  Clique para comprar pacotes
                </div>
              </div>
              
              {/* Collection Card - Clickable */}
              <div 
                onClick={onNavigateToCollection}
                className="bg-gradient-to-br from-blue-500 to-purple-600 backdrop-blur-lg rounded-xl p-6 border border-blue-400 border-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="text-4xl mb-3">🃏</div>
                <div className="text-3xl font-bold text-white">{collectionCount}</div>
                <div className="text-blue-100 mb-2">Cartas Coletadas</div>
                <div className="text-xs text-blue-200 bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  Ver sua coleção completa
                </div>
              </div>
              
              {/* Progress Card - Info Only */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 backdrop-blur-lg rounded-xl p-6 border border-purple-400 border-opacity-30 shadow-lg">
                <div className="text-4xl mb-3">📈</div>
                <div className="text-3xl font-bold text-white">{completionPercentage}%</div>
                <div className="text-purple-100 mb-2">Progresso Total</div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onNavigateToStore}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                🛍️ Abrir Pacotes
              </button>
              <button
                onClick={onNavigateToCollection}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-20 hover:shadow-2xl"
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
                className="bg-gradient-to-br from-slate-700 to-slate-800 backdrop-blur-lg rounded-xl p-6 text-center hover:from-slate-600 hover:to-slate-700 transition-all duration-300 border border-slate-600 hover:border-slate-500 transform hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="relative w-20 h-14 group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg">
                    <img
                      src={`https://flagsapi.com/${getCountryCode(team.country).toUpperCase()}/flat/64.png`}
                      alt={`Bandeira ${team.country}`}
                      className="w-full h-full object-cover rounded-md shadow-lg border-2 border-white border-opacity-30"
                      onLoad={(e) => {
                        // Garantir que a imagem está visível quando carrega
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'block';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'none';
                        }
                      }}
                      onError={(e) => {
                        // Tentar API alternativa primeiro
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src.includes('flagsapi.com')) {
                          target.src = `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${getCountryCode(team.country)}.svg`;
                        } else if (target.src.includes('jsdelivr')) {
                          target.src = `https://flagcdn.com/w80/${getCountryCode(team.country)}.png`;
                        } else {
                          // Último recurso: mostrar emoji
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }
                      }}
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center text-5xl bg-gradient-to-br from-slate-600 to-slate-700 rounded-md border-2 border-white border-opacity-30"
                      style={{ display: 'none' }}
                    >
                      {team.flag}
                    </div>
                  </div>
                </div>
                <div className="font-bold text-base text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                  {team.name}
                </div>
                <div className="text-xs text-gray-400 mb-2">
                  {team.players.length} jogadores
                </div>
                <div className="text-xs text-slate-400 bg-slate-600 bg-opacity-50 px-2 py-1 rounded-full">
                  {team.formation}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">
              Explore todas as {teams.length} seleções disponíveis
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-white border border-slate-500">
              Ver Todas as Seleções →
            </button>
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
                onClick={onNavigateToStore}
                className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg border border-indigo-500 border-opacity-50 cursor-pointer hover:shadow-2xl"
              >
                <div className="text-3xl mb-3">📦</div>
                <h4 className="font-bold text-lg mb-2 text-white">{pack.name}</h4>
                <p className="text-sm text-indigo-200 mb-4 h-12 overflow-hidden">{pack.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-400 font-bold text-xl">${pack.price}</span>
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {pack.cardCount} cartas
                  </span>
                </div>
                <div className="text-xs text-center text-indigo-300 bg-white bg-opacity-10 py-1 rounded-full">
                  Clique para comprar
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={onNavigateToStore}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
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
            <div className="text-center bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-white mb-2">{teams.length}</div>
              <div className="text-yellow-100">Seleções</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-white mb-2">{totalPlayers}</div>
              <div className="text-green-100">Jogadores</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-white mb-2">{packs.length}</div>
              <div className="text-blue-100">Tipos de Pacotes</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-purple-100">Raridades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 