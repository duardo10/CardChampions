import { Pack } from '@/types';

export const packs: Pack[] = [
  {
    id: 'basic_pack',
    name: 'Pacote Básico',
    description: 'Pacote essencial com 5 cartas aleatórias. Chance garantida de pelo menos 1 carta Rara.',
    price: 100,
    cardCount: 5,
    guaranteedRarity: 'rare',
    rarity: 'basic',
    image: '/packs/basic-pack.png',
    theme: 'Copa do Mundo 2026'
  },
  {
    id: 'premium_pack',
    name: 'Pacote Premium',
    description: 'Pacote avançado com 8 cartas, incluindo 1 Epic garantido e chances aumentadas de Legendary.',
    price: 250,
    cardCount: 8,
    guaranteedRarity: 'epic',
    rarity: 'premium',
    image: '/packs/premium-pack.png',
    theme: 'Copa do Mundo 2026'
  },
  {
    id: 'elite_pack',
    name: 'Pacote Elite',
    description: 'Pacote de luxo com 12 cartas, incluindo 1 Legendary garantido e cartas especiais exclusivas.',
    price: 500,
    cardCount: 12,
    guaranteedRarity: 'legendary',
    rarity: 'elite',
    image: '/packs/elite-pack.png',
    theme: 'Copa do Mundo 2026'
  },
  {
    id: 'ultimate_pack',
    name: 'Pacote Ultimate',
    description: 'O pacote mais exclusivo! 15 cartas com múltiplos Legendary e chance de cartas TOTY únicas.',
    price: 1000,
    cardCount: 15,
    guaranteedRarity: 'legendary',
    rarity: 'ultimate',
    image: '/packs/ultimate-pack.png',
    theme: 'Copa do Mundo 2026'
  },
  // Pacotes Temáticos
  {
    id: 'south_america_pack',
    name: 'Pacote América do Sul',
    description: 'Exclusivo com jogadores das seleções sul-americanas. Foco em Brasil, Argentina e Uruguai.',
    price: 300,
    cardCount: 10,
    guaranteedRarity: 'epic',
    rarity: 'premium',
    image: '/packs/south-america-pack.png',
    theme: 'América do Sul',
    isLimited: true
  },
  {
    id: 'europe_pack',
    name: 'Pacote Europa',
    description: 'As estrelas europeias! França, Inglaterra, Espanha, Alemanha e mais.',
    price: 300,
    cardCount: 10,
    guaranteedRarity: 'epic',
    rarity: 'premium',
    image: '/packs/europe-pack.png',
    theme: 'Europa',
    isLimited: true
  },
  {
    id: 'legends_pack',
    name: 'Pacote Lendas',
    description: 'Cartas especiais dos maiores craques: Messi, Mbappé, Kane, Neymar e mais!',
    price: 750,
    cardCount: 8,
    guaranteedRarity: 'legendary',
    rarity: 'ultimate',
    image: '/packs/legends-pack.png',
    theme: 'Lendas',
    isLimited: true
  },
  {
    id: 'goalkeepers_pack',
    name: 'Pacote Goleiros',
    description: 'Foco nos guardiões das seleções! Alisson, Lloris, Neuer e outros.',
    price: 200,
    cardCount: 8,
    guaranteedRarity: 'rare',
    rarity: 'premium',
    image: '/packs/goalkeepers-pack.png',
    theme: 'Goleiros'
  },
  // Pacotes de Evento
  {
    id: 'opening_ceremony_pack',
    name: 'Pacote Cerimônia de Abertura',
    description: 'Edição limitada comemorativa! Cartas especiais douradas com selo exclusivo.',
    price: 600,
    cardCount: 10,
    guaranteedRarity: 'legendary',
    rarity: 'ultimate',
    image: '/packs/opening-ceremony-pack.png',
    theme: 'Abertura 2026',
    isLimited: true
  },
  {
    id: 'first_day_pack',
    name: 'Pacote Primeiro Dia',
    description: 'Disponível apenas no primeiro dia! Cartas com serial number limitado.',
    price: 400,
    cardCount: 12,
    guaranteedRarity: 'epic',
    rarity: 'elite',
    image: '/packs/first-day-pack.png',
    theme: 'Primeiro Dia',
    isLimited: true
  }
];

export const getPackById = (id: string): Pack | undefined => {
  return packs.find(pack => pack.id === id);
};

export const getPacksByRarity = (rarity: Pack['rarity']): Pack[] => {
  return packs.filter(pack => pack.rarity === rarity);
};

export const getLimitedPacks = (): Pack[] => {
  return packs.filter(pack => pack.isLimited);
};

export const getPacksByTheme = (theme: string): Pack[] => {
  return packs.filter(pack => pack.theme === theme);
}; 