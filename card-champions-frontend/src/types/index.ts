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
  description: string;
  price: number;
  cardCount: number;
  guaranteedRarity?: Rarity;
  rarity: 'basic' | 'premium' | 'elite' | 'ultimate';
  image: string;
  isLimited?: boolean;
  theme?: string;
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

export interface GameSession {
  id: string;
  userId: string;
  packsOpened: number;
  cardsCollected: number;
  rarityCount: {
    common: number;
    rare: number;
    epic: number;
    legendary: number;
  };
  achievements: Achievement[];
  lastLogin: Date;
  streak: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  reward: {
    type: 'coins' | 'pack' | 'card' | 'title';
    amount?: number;
    item?: string;
  };
  unlocked: boolean;
  dateUnlocked?: Date;
}

export interface SpecialCard extends Omit<Card, 'rarity'> {
  rarity: 'special' | 'iconic' | 'legendary';
  edition: 'first_day' | 'world_cup' | 'golden_boot' | 'motm' | 'toty';
  serialNumber: number;
  maxSupply: number;
  stats: PlayerStats & {
    boosted?: boolean;
    boostPercentage?: number;
  };
}

export interface PackOpening {
  packId: string;
  cards: (Card | SpecialCard)[];
  openedAt: Date;
  userId: string;
} 