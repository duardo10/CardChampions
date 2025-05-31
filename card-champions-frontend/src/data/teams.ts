import { Team, Player } from '@/types';

// Dados de exemplo para algumas seleções da Copa do Mundo 2026
export const teams: Team[] = [
  {
    id: 'brazil',
    name: 'Brasil',
    country: 'Brazil',
    flag: '🇧🇷',
    formation: '4-2-3-1',
    players: [
      {
        id: 'alisson',
        name: 'Alisson',
        position: 'GK',
        team: 'Brasil',
        country: 'Brazil',
        rating: 89,
        rarity: 'legendary',
        image: '/players/alisson.jpg',
        stats: { pace: 55, shooting: 25, passing: 85, defending: 45, dribbling: 60, physical: 85 }
      },
      {
        id: 'marquinhos',
        name: 'Marquinhos',
        position: 'DEF',
        team: 'Brasil',
        country: 'Brazil',
        rating: 87,
        rarity: 'epic',
        image: '/players/marquinhos.jpg',
        stats: { pace: 75, shooting: 45, passing: 80, defending: 88, dribbling: 70, physical: 85 }
      },
      {
        id: 'casemiro',
        name: 'Casemiro',
        position: 'MID',
        team: 'Brasil',
        country: 'Brazil',
        rating: 86,
        rarity: 'epic',
        image: '/players/casemiro.jpg',
        stats: { pace: 65, shooting: 70, passing: 85, defending: 88, dribbling: 75, physical: 90 }
      },
      {
        id: 'neymar',
        name: 'Neymar Jr.',
        position: 'FWD',
        team: 'Brasil',
        country: 'Brazil',
        rating: 91,
        rarity: 'legendary',
        image: '/players/neymar.jpg',
        stats: { pace: 88, shooting: 85, passing: 88, defending: 35, dribbling: 94, physical: 65 }
      },
      {
        id: 'vinicius',
        name: 'Vinícius Jr.',
        position: 'FWD',
        team: 'Brasil',
        country: 'Brazil',
        rating: 88,
        rarity: 'epic',
        image: '/players/vinicius.jpg',
        stats: { pace: 95, shooting: 80, passing: 78, defending: 30, dribbling: 92, physical: 70 }
      }
    ]
  },
  {
    id: 'argentina',
    name: 'Argentina',
    country: 'Argentina',
    flag: '🇦🇷',
    formation: '4-3-3',
    players: [
      {
        id: 'martinez',
        name: 'E. Martínez',
        position: 'GK',
        team: 'Argentina',
        country: 'Argentina',
        rating: 87,
        rarity: 'epic',
        image: '/players/martinez.jpg',
        stats: { pace: 50, shooting: 20, passing: 80, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'messi',
        name: 'Lionel Messi',
        position: 'FWD',
        team: 'Argentina',
        country: 'Argentina',
        rating: 93,
        rarity: 'legendary',
        image: '/players/messi.jpg',
        stats: { pace: 80, shooting: 92, passing: 95, defending: 35, dribbling: 96, physical: 65 }
      },
      {
        id: 'dimaria',
        name: 'Ángel Di María',
        position: 'FWD',
        team: 'Argentina',
        country: 'Argentina',
        rating: 85,
        rarity: 'rare',
        image: '/players/dimaria.jpg',
        stats: { pace: 85, shooting: 82, passing: 85, defending: 40, dribbling: 88, physical: 70 }
      }
    ]
  },
  {
    id: 'france',
    name: 'França',
    country: 'France',
    flag: '🇫🇷',
    formation: '4-2-3-1',
    players: [
      {
        id: 'mbappe',
        name: 'Kylian Mbappé',
        position: 'FWD',
        team: 'França',
        country: 'France',
        rating: 92,
        rarity: 'legendary',
        image: '/players/mbappe.jpg',
        stats: { pace: 97, shooting: 88, passing: 80, defending: 35, dribbling: 90, physical: 75 }
      },
      {
        id: 'griezmann',
        name: 'Antoine Griezmann',
        position: 'FWD',
        team: 'França',
        country: 'France',
        rating: 86,
        rarity: 'epic',
        image: '/players/griezmann.jpg',
        stats: { pace: 78, shooting: 85, passing: 83, defending: 50, dribbling: 85, physical: 75 }
      }
    ]
  },
  {
    id: 'england',
    name: 'Inglaterra',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formation: '4-2-3-1',
    players: [
      {
        id: 'kane',
        name: 'Harry Kane',
        position: 'FWD',
        team: 'Inglaterra',
        country: 'England',
        rating: 90,
        rarity: 'legendary',
        image: '/players/kane.jpg',
        stats: { pace: 75, shooting: 93, passing: 85, defending: 40, dribbling: 80, physical: 85 }
      },
      {
        id: 'bellingham',
        name: 'Jude Bellingham',
        position: 'MID',
        team: 'Inglaterra',
        country: 'England',
        rating: 87,
        rarity: 'epic',
        image: '/players/bellingham.jpg',
        stats: { pace: 80, shooting: 78, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      }
    ]
  }
];

export const getAllPlayers = (): Player[] => {
  return teams.flatMap(team => team.players);
};

export const getPlayersByTeam = (teamId: string): Player[] => {
  const team = teams.find(t => t.id === teamId);
  return team ? team.players : [];
};

export const getPlayersByRarity = (rarity: Player['rarity']): Player[] => {
  return getAllPlayers().filter(player => player.rarity === rarity);
}; 