'use client';

import { useState, useEffect } from 'react';
import { Card, Pack } from '@/types';
import { openPack, rarityColors } from '@/lib/gameUtils';
import PlayerCard from './PlayerCard';

interface PackOpeningProps {
  pack: Pack;
  onComplete: (cards: Card[]) => void;
  onClose: () => void;
}

export default function PackOpening({ pack, onComplete, onClose }: PackOpeningProps) {
  const [stage, setStage] = useState<'opening' | 'revealing' | 'complete'>('opening');
  const [cards, setCards] = useState<Card[]>([]);
  const [revealedIndex, setRevealedIndex] = useState(-1);
  const [isShaking, setIsShaking] = useState(true);
  
  useEffect(() => {
    // Gerar cartas imediatamente
    const newCards = openPack(pack);
    setCards(newCards);
    
    // Animação de abertura do pacote
    const openingTimer = setTimeout(() => {
      setIsShaking(false);
      setStage('revealing');
    }, 2000);
    
    return () => clearTimeout(openingTimer);
  }, [pack]);
  
  useEffect(() => {
    if (stage === 'revealing' && revealedIndex < cards.length - 1) {
      const revealTimer = setTimeout(() => {
        setRevealedIndex(prev => prev + 1);
      }, 800);
      
      return () => clearTimeout(revealTimer);
    } else if (stage === 'revealing' && revealedIndex >= cards.length - 1) {
      const completeTimer = setTimeout(() => {
        setStage('complete');
      }, 1000);
      
      return () => clearTimeout(completeTimer);
    }
  }, [stage, revealedIndex, cards.length]);
  
  const handleComplete = () => {
    onComplete(cards);
    onClose();
  };
  
  const getRarityGlow = (rarity: string) => {
    const color = rarityColors[rarity as keyof typeof rarityColors];
    return `0 0 20px ${color}80, 0 0 40px ${color}60, 0 0 60px ${color}40`;
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-6xl">
        {stage === 'opening' && (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Abrindo {pack.name}...
            </h2>
            
            <div 
              className={`relative transform transition-all duration-500 ${
                isShaking ? 'animate-bounce' : 'scale-110'
              }`}
            >
              <div 
                className="w-64 h-80 rounded-xl flex items-center justify-center text-8xl"
                style={{ 
                  backgroundColor: pack.guaranteedRarity ? rarityColors[pack.guaranteedRarity] : '#6B7280',
                  boxShadow: pack.guaranteedRarity ? getRarityGlow(pack.guaranteedRarity) : 'none'
                }}
              >
                📦
              </div>
              
              {!isShaking && (
                <div className="absolute inset-0 bg-white bg-opacity-30 rounded-xl animate-pulse" />
              )}
            </div>
            
            <p className="text-white mt-4 text-lg">
              {isShaking ? 'Balançando o pacote...' : 'Abrindo...'}
            </p>
          </div>
        )}
        
        {stage === 'revealing' && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Suas novas cartas!
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {cards.map((card, index) => (
                <div 
                  key={card.id}
                  className={`transition-all duration-500 transform ${
                    index <= revealedIndex 
                      ? 'scale-100 opacity-100 rotate-0' 
                      : 'scale-0 opacity-0 rotate-180'
                  }`}
                  style={{
                    filter: index <= revealedIndex ? `drop-shadow(${getRarityGlow(card.player.rarity)})` : 'none'
                  }}
                >
                  {index <= revealedIndex ? (
                    <div className="relative">
                      <PlayerCard 
                        card={card} 
                        size="medium"
                        showDetails={false}
                      />
                      
                      {/* Efeito de brilho para cartas raras */}
                      {card.player.rarity !== 'common' && (
                        <div className="absolute inset-0 rounded-lg animate-pulse opacity-30"
                             style={{ 
                               background: `radial-gradient(circle, ${rarityColors[card.player.rarity]}40, transparent 70%)`
                             }} 
                        />
                      )}
                      
                      {/* Indicador de raridade especial */}
                      {card.player.rarity === 'legendary' && (
                        <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
                          ⭐
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-40 h-56 bg-gray-300 rounded-lg flex items-center justify-center">
                      <div className="text-4xl">❓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {revealedIndex >= 0 && (
              <div className="mt-6 text-white">
                <p className="text-lg">
                  Carta {Math.min(revealedIndex + 1, cards.length)} de {cards.length}
                </p>
                {cards[revealedIndex] && (
                  <p className="text-2xl font-bold mt-2" 
                     style={{ color: rarityColors[cards[revealedIndex].player.rarity] }}>
                    {cards[revealedIndex].player.name}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        
        {stage === 'complete' && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎉 Parabéns! 🎉
            </h2>
            
            <p className="text-xl text-white mb-8">
              Você recebeu {cards.length} novas cartas!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-8">
              {cards.map((card) => (
                <PlayerCard 
                  key={card.id}
                  card={card} 
                  size="medium"
                  showDetails={true}
                />
              ))}
            </div>
            
            {/* Estatísticas do pacote */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Resumo do Pacote</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['common', 'rare', 'epic', 'legendary'].map(rarity => {
                  const count = cards.filter(card => card.player.rarity === rarity).length;
                  return (
                    <div key={rarity} className="text-center">
                      <div 
                        className="text-2xl font-bold"
                        style={{ color: rarityColors[rarity as keyof typeof rarityColors] }}
                      >
                        {count}
                      </div>
                      <div className="text-sm text-white capitalize">{rarity}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button
              onClick={handleComplete}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Adicionar à Coleção
            </button>
          </div>
        )}
        
        {/* Botão de fechar (apenas quando completo) */}
        {stage === 'complete' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
} 