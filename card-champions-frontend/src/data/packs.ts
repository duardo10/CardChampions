import { Pack } from '@/types';

export const packs: Pack[] = [
  {
    id: 'starter',
    name: 'Pacote Iniciante',
    price: 5,
    cardCount: 3,
    description: 'Perfeito para começar sua coleção! Contém 3 cartas com chance de encontrar jogadores raros.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'premium',
    name: 'Pacote Premium',
    price: 10,
    cardCount: 5,
    guaranteedRarity: 'rare',
    description: 'Pacote premium com 5 cartas e garantia de pelo menos 1 carta rara!',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'elite',
    name: 'Pacote Elite',
    price: 20,
    cardCount: 8,
    guaranteedRarity: 'epic',
    description: 'Para colecionadores sérios! 8 cartas com garantia de pelo menos 1 carta épica.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'legendary',
    name: 'Pacote Lendário',
    price: 50,
    cardCount: 10,
    guaranteedRarity: 'legendary',
    description: 'O melhor pacote disponível! 10 cartas com garantia de 1 carta lendária.',
    image: 'https://images.unsplash.com/photo-1614630910757-64e26e21c6e0?w=400&h=300&fit=crop&crop=center'
  }
];

export const getPackById = (id: string): Pack | undefined => {
  return packs.find(pack => pack.id === id);
}; 