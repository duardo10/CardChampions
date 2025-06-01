'use client';

import { useState, useEffect } from 'react';
import { Card, Pack, User } from '@/types';
import { packs } from '@/data/packs';
import { teams, getAllPlayers } from '@/data/teams';
import { calculateCollectionPercentage } from '@/lib/gameUtils';

import Navigation from '@/components/Navigation';
import PackCard from '@/components/PackCard';
import PackOpening from '@/components/PackOpening';
import Collection from '@/components/Collection';
import PlayerCard from '@/components/PlayerCard';
import TeamAlbum from '@/components/TeamAlbum';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Criar algumas cartas de exemplo para demonstração
  const createExampleCards = (): Card[] => {
    const allPlayers = getAllPlayers();
    const exampleCards: Card[] = [];
    
    // Pegar alguns jogadores específicos para demonstração
    const selectedPlayerIds = [
      'alisson', 'marquinhos', 'neymar', 'vinicius', // Brasil
      'messi', 'dimaria', 'martinez', // Argentina  
      'mbappe', 'griezmann', 'lloris', // França
      'kane', 'bellingham', 'saka', // Inglaterra
      'pedri', 'gavi' // Espanha
    ];
    
    selectedPlayerIds.forEach((playerId, index) => {
      const player = allPlayers.find(p => p.id === playerId);
      if (player) {
        exampleCards.push({
          id: `card-${playerId}-${Date.now()}-${index}`,
          player,
          serialNumber: Math.floor(Math.random() * 10000) + 1,
          isUnique: Math.random() > 0.8, // 20% chance de ser única
          dateObtained: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000) // Últimos 30 dias
        });
      }
    });
    
    return exampleCards;
  };
  
  const [user, setUser] = useState<User>({
    id: '1',
    username: 'Colecionador',
    email: 'user@example.com',
    balance: 100,
    collection: {
      userId: '1',
      cards: createExampleCards(), // Começar com cartas de exemplo
      completionPercentage: 0,
      totalCards: 0,
      uniqueCards: 0
    },
    createdAt: new Date()
  });
  
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [showPackOpening, setShowPackOpening] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  
  // Atualizar estatísticas da coleção quando cartas mudam
  useEffect(() => {
    const totalAvailablePlayers = getAllPlayers().length;
    const completionPercentage = calculateCollectionPercentage(user.collection.cards, totalAvailablePlayers);
    const uniquePlayerIds = new Set(user.collection.cards.map(card => card.player.id));
    
    setUser(prev => ({
      ...prev,
      collection: {
        ...prev.collection,
        totalCards: prev.collection.cards.length,
        uniqueCards: uniquePlayerIds.size,
        completionPercentage
      }
    }));
  }, [user.collection.cards]);
  
  const handlePurchasePack = (pack: Pack) => {
    if (user.balance >= pack.price) {
      setSelectedPack(pack);
      setShowPackOpening(true);
      
      // Deduzir do saldo
      setUser(prev => ({
        ...prev,
        balance: prev.balance - pack.price
      }));
    }
  };
  
  const handlePackOpeningComplete = (newCards: Card[]) => {
    setUser(prev => ({
      ...prev,
      collection: {
        ...prev.collection,
        cards: [...prev.collection.cards, ...newCards]
      }
    }));
  };
  
  const renderHome = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ⚽ Card Champions
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Copa do Mundo 2026</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Colecione cartas dos maiores jogadores do mundo! Monte sua escalação dos sonhos, 
            troque cartas com amigos e complete a coleção da Copa do Mundo 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('packs')}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Comprar Pacotes
            </button>
            <button 
              onClick={() => setActiveTab('album')}
              className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              📖 Visualizar Álbum
            </button>
            <button 
              onClick={() => setActiveTab('collection')}
              className="bg-blue-500 bg-opacity-30 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-opacity-40 transition-all duration-200 border-2 border-white border-opacity-30"
            >
              Ver Coleção
            </button>
          </div>
        </div>
      </div>
      
      {/* Estatísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl mb-2">🃏</div>
          <div className="text-2xl font-bold text-blue-600">{user.collection.totalCards}</div>
          <div className="text-gray-600">Cartas na Coleção</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-purple-600">{user.collection.uniqueCards}</div>
          <div className="text-gray-600">Jogadores Únicos</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-green-600">{user.collection.completionPercentage}%</div>
          <div className="text-gray-600">Coleção Completa</div>
        </div>
      </div>
      
      {/* Cartas recentes */}
      {user.collection.cards.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Cartas Recentes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {user.collection.cards
              .sort((a, b) => b.dateObtained.getTime() - a.dateObtained.getTime())
              .slice(0, 6)
              .map((card) => (
                <PlayerCard
                  key={card.id}
                  card={card}
                  size="small"
                  onClick={() => setSelectedCard(card)}
                />
              ))}
          </div>
        </div>
      )}
      
      {/* Novo destaque para o álbum */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h3 className="text-3xl font-bold mb-4">
            Novo: Álbum Interativo da Copa do Mundo!
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Organize suas cartas por seleções em um layout visual incrível! 
            Veja seus jogadores organizados por posição, como em um verdadeiro álbum da Copa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('album')}
              className="bg-white text-yellow-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-all duration-200 transform hover:scale-105"
            >
              Explorar Álbum
            </button>
            <div className="flex items-center justify-center space-x-2 text-yellow-100">
              <span>✨</span>
              <span className="text-sm">Visualização por time • Layout de campo • {user.collection.totalCards} cartas</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para começar sua jornada?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {user.collection.cards.length === 0 
            ? 'Compre seu primeiro pacote e descubra quais jogadores lendários você irá coletar!'
            : 'Continue expandindo sua coleção e torne-se o maior colecionador!'
          }
        </p>
        <button 
          onClick={() => setActiveTab('packs')}
          className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-200 transform hover:scale-105"
        >
          {user.collection.cards.length === 0 ? 'Começar Agora' : 'Comprar Mais Pacotes'}
        </button>
      </div>
    </div>
  );
  
  const renderPacks = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Loja de Pacotes</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Escolha seu pacote e descubra quais jogadores incríveis estão esperando por você!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packs.map((pack) => (
          <PackCard
            key={pack.id}
            pack={pack}
            onPurchase={handlePurchasePack}
            userBalance={user.balance}
          />
        ))}
      </div>
    </div>
  );
  
  const renderTeams = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Seleções da Copa do Mundo 2026</h2>
        <p className="text-lg text-gray-600">
          Conheça as seleções e seus craques disponíveis para coleção
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{team.flag}</span>
              <div>
                <h3 className="text-2xl font-bold">{team.name}</h3>
                <p className="text-gray-600">{team.formation}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {team.players.slice(0, 5).map((player) => {
                // Criar uma carta temporária para display
                const tempCard: Card = {
                  id: `temp-${player.id}`,
                  player,
                  serialNumber: 1,
                  isUnique: false,
                  dateObtained: new Date()
                };
                
                return (
                  <PlayerCard
                    key={player.id}
                    card={tempCard}
                    size="small"
                    onClick={() => setSelectedCard(tempCard)}
                  />
                );
              })}
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveTab('album')}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Ver todos os {team.players.length} jogadores →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">
          🏆 Álbum Interativo Disponível!
        </h3>
        <p className="text-lg mb-4 opacity-90">
          Visualize sua coleção de forma organizada por seleções, como um verdadeiro álbum da Copa do Mundo!
        </p>
        <button
          onClick={() => setActiveTab('album')}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200"
        >
          Abrir Álbum
        </button>
      </div>
    </div>
  );
  
  const renderAlbum = () => (
    <TeamAlbum 
      cards={user.collection.cards}
      onCardClick={setSelectedCard}
    />
  );
  
  const renderLeaderboard = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ranking de Colecionadores</h2>
        <p className="text-lg text-gray-600">
          Veja como você se compara aos outros colecionadores
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">
            Ranking em Breve!
          </h3>
          <p className="text-gray-500">
            O sistema de ranking multiplayer estará disponível em uma futura atualização.
            Continue coletando para estar preparado!
          </p>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen">
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userBalance={user.balance}
        userName={user.username}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'packs' && renderPacks()}
        {activeTab === 'collection' && (
          <Collection 
            cards={user.collection.cards}
            onCardClick={setSelectedCard}
          />
        )}
        {activeTab === 'teams' && renderTeams()}
        {activeTab === 'album' && renderAlbum()}
        {activeTab === 'leaderboard' && renderLeaderboard()}
      </main>
      
      {/* Pack Opening Modal */}
      {showPackOpening && selectedPack && (
        <PackOpening
          pack={selectedPack}
          onComplete={handlePackOpeningComplete}
          onClose={() => {
            setShowPackOpening(false);
            setSelectedPack(null);
          }}
        />
      )}
      
      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Detalhes da Carta</h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="text-center">
              <PlayerCard
                card={selectedCard}
                size="large"
                showDetails={true}
              />
              
              <div className="mt-4 space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="font-medium">Rating:</span>
                  <span>{selectedCard.player.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>{selectedCard.player.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Posição:</span>
                  <span>{selectedCard.player.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Raridade:</span>
                  <span className="capitalize">{selectedCard.player.rarity}</span>
                </div>
                {selectedCard.id.startsWith('temp-') ? null : (
                  <>
                    <div className="flex justify-between">
                      <span className="font-medium">Serial:</span>
                      <span>#{selectedCard.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Obtida em:</span>
                      <span>{selectedCard.dateObtained.toLocaleDateString('pt-BR')}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
