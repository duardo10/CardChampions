'use client';

import React from 'react';

const Leaderboard: React.FC = () => {
  const mockData = [
    { id: 1, name: 'João Silva', cards: 156, completion: 78, country: '🇧🇷' },
    { id: 2, name: 'Maria Santos', cards: 142, completion: 71, country: '🇧🇷' },
    { id: 3, name: 'Diego López', cards: 138, completion: 69, country: '🇦🇷' },
    { id: 4, name: 'Lucas Müller', cards: 134, completion: 67, country: '🇩🇪' },
    { id: 5, name: 'Sophie Martin', cards: 129, completion: 64, country: '🇫🇷' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            🏆 Ranking Global
          </h1>
          <p className="text-gray-300 text-lg">
            Os melhores colecionadores da Copa do Mundo 2026
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <div className="space-y-4">
            {mockData.map((player, index) => (
              <div
                key={player.id}
                className={`
                  flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:scale-105
                  ${index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400' :
                    index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400' :
                    index === 2 ? 'bg-gradient-to-r from-orange-600/20 to-yellow-600/20 border-orange-400' :
                    'bg-black/20 border-gray-600'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                    ${index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      index === 2 ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    }
                  `}>
                    {index + 1}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-lg">{player.name}</span>
                      <span>{player.country}</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {player.cards} cartas • {player.completion}% completo
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-white font-bold">{player.cards}</div>
                  <div className="text-gray-400 text-sm">cartas</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                🚀 Sistema completo de ranking em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 