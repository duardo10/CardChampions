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
        image: '/Brasil-Alisson.png',
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
        image: '/Brasil-Marquinhos.png',
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
        image: '',
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
        image: '',
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
        image: '/Brasil-ViniJr.png',
        stats: { pace: 95, shooting: 80, passing: 78, defending: 30, dribbling: 92, physical: 70 }
      },
      {
        id: 'bento',
        name: 'Bento',
        position: 'GK',
        team: 'Brasil',
        country: 'Brazil',
        rating: 82,
        rarity: 'rare',
        image: '/Brasil-Bento.png',
        stats: { pace: 50, shooting: 20, passing: 78, defending: 40, dribbling: 55, physical: 80 }
      },
      {
        id: 'bruno_guimaraes',
        name: 'Bruno Guimarães',
        position: 'MID',
        team: 'Brasil',
        country: 'Brazil',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 80, dribbling: 82, physical: 85 }
      },
      {
        id: 'raphinha',
        name: 'Raphinha',
        position: 'FWD',
        team: 'Brasil',
        country: 'Brazil',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 75, defending: 35, dribbling: 85, physical: 70 }
      },
      {
        id: 'militao',
        name: 'Éder Militão',
        position: 'DEF',
        team: 'Brasil',
        country: 'Brazil',
        rating: 85,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 42, passing: 75, defending: 86, dribbling: 68, physical: 88 }
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
        image: '',
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
        image: '',
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
        image: '',
        stats: { pace: 85, shooting: 82, passing: 85, defending: 40, dribbling: 88, physical: 70 }
      },
      {
        id: 'mac_allister',
        name: 'Alexis Mac Allister',
        position: 'MID',
        team: 'Argentina',
        country: 'Argentina',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 75, passing: 85, defending: 72, dribbling: 80, physical: 75 }
      },
      {
        id: 'romero',
        name: 'Cristian Romero',
        position: 'DEF',
        team: 'Argentina',
        country: 'Argentina',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 45, passing: 75, defending: 88, dribbling: 65, physical: 85 }
      },
      {
        id: 'alvarez',
        name: 'Julián Álvarez',
        position: 'FWD',
        team: 'Argentina',
        country: 'Argentina',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 75, defending: 45, dribbling: 80, physical: 75 }
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
        id: 'lloris',
        name: 'Hugo Lloris',
        position: 'GK',
        team: 'França',
        country: 'France',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 48, shooting: 22, passing: 78, defending: 42, dribbling: 52, physical: 82 }
      },
      {
        id: 'mbappe',
        name: 'Kylian Mbappé',
        position: 'FWD',
        team: 'França',
        country: 'France',
        rating: 92,
        rarity: 'legendary',
        image: '',
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
        image: '',
        stats: { pace: 78, shooting: 85, passing: 83, defending: 50, dribbling: 85, physical: 75 }
      },
      {
        id: 'tchouameni',
        name: 'Aurélien Tchouaméni',
        position: 'MID',
        team: 'França',
        country: 'France',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 68, passing: 82, defending: 85, dribbling: 75, physical: 88 }
      },
      {
        id: 'varane',
        name: 'Raphaël Varane',
        position: 'DEF',
        team: 'França',
        country: 'France',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 82, shooting: 38, passing: 78, defending: 88, dribbling: 70, physical: 85 }
      },
      {
        id: 'dembele',
        name: 'Ousmane Dembélé',
        position: 'FWD',
        team: 'França',
        country: 'France',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 75, passing: 78, defending: 25, dribbling: 88, physical: 65 }
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
        id: 'pickford',
        name: 'Jordan Pickford',
        position: 'GK',
        team: 'Inglaterra',
        country: 'England',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 75, defending: 38, dribbling: 58, physical: 80 }
      },
      {
        id: 'kane',
        name: 'Harry Kane',
        position: 'FWD',
        team: 'Inglaterra',
        country: 'England',
        rating: 90,
        rarity: 'legendary',
        image: '',
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
        image: '',
        stats: { pace: 80, shooting: 78, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      },
      {
        id: 'saka',
        name: 'Bukayo Saka',
        position: 'FWD',
        team: 'Inglaterra',
        country: 'England',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 82, defending: 45, dribbling: 88, physical: 72 }
      },
      {
        id: 'stones',
        name: 'John Stones',
        position: 'DEF',
        team: 'Inglaterra',
        country: 'England',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 45, passing: 85, defending: 86, dribbling: 75, physical: 82 }
      },
      {
        id: 'rice',
        name: 'Declan Rice',
        position: 'MID',
        team: 'Inglaterra',
        country: 'England',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 65, passing: 80, defending: 88, dribbling: 72, physical: 85 }
      }
    ]
  },
  {
    id: 'spain',
    name: 'Espanha',
    country: 'Spain',
    flag: '🇪🇸',
    formation: '4-3-3',
    players: [
      {
        id: 'simon',
        name: 'Unai Simón',
        position: 'GK',
        team: 'Espanha',
        country: 'Spain',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 55, shooting: 28, passing: 82, defending: 45, dribbling: 62, physical: 78 }
      },
      {
        id: 'pedri',
        name: 'Pedri',
        position: 'MID',
        team: 'Espanha',
        country: 'Spain',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 70, passing: 92, defending: 58, dribbling: 88, physical: 65 }
      },
      {
        id: 'gavi',
        name: 'Gavi',
        position: 'MID',
        team: 'Espanha',
        country: 'Spain',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 68, passing: 85, defending: 72, dribbling: 85, physical: 68 }
      },
      {
        id: 'torres',
        name: 'Ferran Torres',
        position: 'FWD',
        team: 'Espanha',
        country: 'Spain',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 80, passing: 75, defending: 35, dribbling: 82, physical: 70 }
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