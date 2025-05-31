export interface Player {
  id: string;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  team: string;
  country: string;
  rating: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  image: string;
  stats: {
    pace: number;
    shooting: number;
    passing: number;
    defending: number;
    dribbling: number;
    physical: number;
  };
}

export interface Card {
  id: string;
  player: Player;
  serialNumber: number;
  isUnique: boolean;
  dateObtained: Date;
}

export interface Collection {
  userId: string;
  cards: Card[];
  favoriteTeam?: string;
  completionPercentage: number;
  totalCards: number;
  uniqueCards: number;
}

export interface Pack {
  id: string;
  name: string;
  price: number;
  cardCount: number;
  guaranteedRarity?: 'rare' | 'epic' | 'legendary';
  description: string;
  image: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  balance: number;
  collection: Collection;
  createdAt: Date;
}

export interface Team {
  id: string;
  name: string;
  country: string;
  flag: string;
  players: Player[];
  formation: string;
}

export interface Match {
  id: string;
  player1: User;
  player2: User;
  player1Team: Player[];
  player2Team: Player[];
  winner?: string;
  status: 'pending' | 'active' | 'completed';
  createdAt: Date;
}

export interface TradeOffer {
  id: string;
  fromUser: User;
  toUser: User;
  offeredCards: Card[];
  requestedCards: Card[];
  status: 'pending' | 'accepted' | 'rejected' | 'cancelled';
  createdAt: Date;
  expiresAt: Date;
}

export type RarityColors = {
  [key in Player['rarity']]: string;
};

export interface GameStats {
  totalPacks: number;
  totalCards: number;
  totalPlayers: number;
  activeTrades: number;
} 