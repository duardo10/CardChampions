import { Pack } from '@/types';

export const packs: Pack[] = [
  {
    id: 'starter',
    name: 'Pacote Iniciante',
    price: 5,
    cardCount: 3,
    description: 'Perfeito para começar sua coleção! Contém 3 cartas com chance de encontrar jogadores raros.',
    image: '/packs/starter-pack.jpg'
  },
  {
    id: 'premium',
    name: 'Pacote Premium',
    price: 10,
    cardCount: 5,
    guaranteedRarity: 'rare',
    description: 'Pacote premium com 5 cartas e garantia de pelo menos 1 carta rara!',
    image: '/packs/premium-pack.jpg'
  },
  {
    id: 'elite',
    name: 'Pacote Elite',
    price: 20,
    cardCount: 8,
    guaranteedRarity: 'epic',
    description: 'Para colecionadores sérios! 8 cartas com garantia de pelo menos 1 carta épica.',
    image: '/packs/elite-pack.jpg'
  },
  {
    id: 'legendary',
    name: 'Pacote Lendário',
    price: 50,
    cardCount: 10,
    guaranteedRarity: 'legendary',
    description: 'O melhor pacote disponível! 10 cartas com garantia de 1 carta lendária.',
    image: '/packs/legendary-pack.jpg'
  }
];

export const getPackById = (id: string): Pack | undefined => {
  return packs.find(pack => pack.id === id);
}; 