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
import Leaderboard from '@/components/Leaderboard';
import PackStore from '@/components/PackStore';
import Achievements from '@/components/Achievements';

export default function Home() {
  const [activeTab, setActiveTab] = useState('collection');
  const [collection, setCollection] = useState<Card[]>([]);
  const [userCoins, setUserCoins] = useState(1000);
  
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
  
  const handleCardObtained = (card: Card) => {
    setCollection(prev => [...prev, card]);
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'collection':
        return <Collection cards={collection} />;
      case 'album':
        return <TeamAlbum cards={collection} />;
      case 'store':
        return (
          <PackStore 
            userCoins={userCoins}
            onPurchase={(pack) => {
              console.log('Comprou pacote:', pack.name);
              setUserCoins(prev => prev - pack.price);
            }}
          />
        );
      case 'achievements':
        return <Achievements />;
      case 'teams':
        return <div className="p-8 text-center text-white">Times em desenvolvimento...</div>;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <Collection cards={collection} />;
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userBalance={user.balance}
        userName={user.username}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
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
