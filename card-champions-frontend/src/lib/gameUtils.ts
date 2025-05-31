import { Player, Card, Pack, RarityColors } from '@/types';
import { getAllPlayers, getPlayersByRarity } from '@/data/teams';

// Cores para cada raridade
export const rarityColors: RarityColors = {
  common: '#9CA3AF',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#F59E0B'
};

// Probabilidades de drop por raridade
export const rarityProbabilities = {
  common: 70,
  rare: 20,
  epic: 8,
  legendary: 2
};

// Função para determinar raridade baseada em probabilidade
export const getRandomRarity = (guaranteedRarity?: Player['rarity']): Player['rarity'] => {
  if (guaranteedRarity) return guaranteedRarity;
  
  const random = Math.random() * 100;
  let cumulative = 0;
  
  for (const [rarity, probability] of Object.entries(rarityProbabilities)) {
    cumulative += probability;
    if (random <= cumulative) {
      return rarity as Player['rarity'];
    }
  }
  
  return 'common';
};

// Função para obter jogador aleatório baseado na raridade
export const getRandomPlayerByRarity = (rarity: Player['rarity']): Player => {
  const playersOfRarity = getPlayersByRarity(rarity);
  if (playersOfRarity.length === 0) {
    // Fallback para common se não encontrar jogadores da raridade
    const commonPlayers = getPlayersByRarity('common');
    return commonPlayers[Math.floor(Math.random() * commonPlayers.length)];
  }
  
  return playersOfRarity[Math.floor(Math.random() * playersOfRarity.length)];
};

// Função para gerar uma carta única
export const generateCard = (player: Player, serialNumber: number): Card => {
  return {
    id: `${player.id}-${serialNumber}-${Date.now()}`,
    player,
    serialNumber,
    isUnique: player.rarity === 'legendary',
    dateObtained: new Date()
  };
};

// Função para abrir um pacote e gerar cartas
export const openPack = (pack: Pack): Card[] => {
  const cards: Card[] = [];
  let hasGuaranteedRarity = false;
  
  for (let i = 0; i < pack.cardCount; i++) {
    let rarity: Player['rarity'];
    
    // Se é a última carta e ainda não teve a raridade garantida
    if (i === pack.cardCount - 1 && pack.guaranteedRarity && !hasGuaranteedRarity) {
      rarity = pack.guaranteedRarity;
      hasGuaranteedRarity = true;
    } else {
      rarity = getRandomRarity();
      if (pack.guaranteedRarity && rarity === pack.guaranteedRarity) {
        hasGuaranteedRarity = true;
      }
    }
    
    const player = getRandomPlayerByRarity(rarity);
    const serialNumber = Math.floor(Math.random() * 10000) + 1;
    const card = generateCard(player, serialNumber);
    
    cards.push(card);
  }
  
  return cards;
};

// Função para calcular overall de um time
export const calculateTeamOverall = (players: Player[]): number => {
  if (players.length === 0) return 0;
  
  const totalRating = players.reduce((sum, player) => sum + player.rating, 0);
  return Math.round(totalRating / players.length);
};

// Função para formatar posição
export const formatPosition = (position: Player['position']): string => {
  const positionMap = {
    'GK': 'Goleiro',
    'DEF': 'Defensor',
    'MID': 'Meio-campo',
    'FWD': 'Atacante'
  };
  
  return positionMap[position];
};

// Função para calcular porcentagem de coleção
export const calculateCollectionPercentage = (userCards: Card[], totalAvailablePlayers: number): number => {
  const uniquePlayerIds = new Set(userCards.map(card => card.player.id));
  return Math.round((uniquePlayerIds.size / totalAvailablePlayers) * 100);
};

// Função para verificar se tem cartas duplicadas
export const findDuplicateCards = (cards: Card[]): Card[] => {
  const playerCounts = new Map<string, Card[]>();
  
  cards.forEach(card => {
    const playerId = card.player.id;
    if (!playerCounts.has(playerId)) {
      playerCounts.set(playerId, []);
    }
    playerCounts.get(playerId)!.push(card);
  });
  
  const duplicates: Card[] = [];
  playerCounts.forEach(playerCards => {
    if (playerCards.length > 1) {
      // Adiciona todas as cartas exceto a primeira (mantém uma)
      duplicates.push(...playerCards.slice(1));
    }
  });
  
  return duplicates;
};

// Função para filtrar cartas por time
export const filterCardsByTeam = (cards: Card[], teamId: string): Card[] => {
  return cards.filter(card => card.player.team.toLowerCase() === teamId.toLowerCase());
};

// Função para ordenar cartas por raridade e rating
export const sortCardsByValue = (cards: Card[]): Card[] => {
  const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 };
  
  return [...cards].sort((a, b) => {
    const rarityDiff = rarityOrder[b.player.rarity] - rarityOrder[a.player.rarity];
    if (rarityDiff !== 0) return rarityDiff;
    
    return b.player.rating - a.player.rating;
  });
}; 