import { Team, Player } from '@/types';

// Dados completos das principais seleções da Copa do Mundo 2026
export const teams: Team[] = [
  {
    id: 'brazil',
    name: 'Brasil',
    country: 'Brazil',
    flag: '🇧🇷',
    formation: '4-2-3-1',
    players: [
      // Goleiros
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
      // Defensores (4)
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
        id: 'militao',
        name: 'Éder Militão',
        position: 'DEF',
        team: 'Brasil',
        country: 'Brazil',
        rating: 85,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 42, passing: 75, defending: 86, dribbling: 68, physical: 88 }
      },
      {
        id: 'danilo',
        name: 'Danilo',
        position: 'DEF',
        team: 'Brasil',
        country: 'Brazil',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 55, passing: 82, defending: 84, dribbling: 75, physical: 80 }
      },
      {
        id: 'alex_sandro',
        name: 'Alex Sandro',
        position: 'DEF',
        team: 'Brasil',
        country: 'Brazil',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 48, passing: 78, defending: 82, dribbling: 76, physical: 78 }
      },
      // Meio-campistas (3)
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
        id: 'lucas_paqueta',
        name: 'Lucas Paquetá',
        position: 'MID',
        team: 'Brasil',
        country: 'Brazil',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 82, defending: 68, dribbling: 85, physical: 75 }
      },
      // Atacantes (3)
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
        id: 'raphinha',
        name: 'Raphinha',
        position: 'FWD',
        team: 'Brasil',
        country: 'Brazil',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 75, defending: 35, dribbling: 85, physical: 70 }
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
      // Goleiro
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
        id: 'rulli',
        name: 'Gerónimo Rulli',
        position: 'GK',
        team: 'Argentina',
        country: 'Argentina',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
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
        id: 'otamendi',
        name: 'Nicolás Otamendi',
        position: 'DEF',
        team: 'Argentina',
        country: 'Argentina',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 40, passing: 78, defending: 86, dribbling: 62, physical: 88 }
      },
      {
        id: 'tagliafico',
        name: 'Nicolás Tagliafico',
        position: 'DEF',
        team: 'Argentina',
        country: 'Argentina',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 52, passing: 80, defending: 83, dribbling: 72, physical: 78 }
      },
      {
        id: 'molina',
        name: 'Nahuel Molina',
        position: 'DEF',
        team: 'Argentina',
        country: 'Argentina',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 58, passing: 75, defending: 80, dribbling: 75, physical: 76 }
      },
      // Meio-campistas (3)
      {
        id: 'de_paul',
        name: 'Rodrigo De Paul',
        position: 'MID',
        team: 'Argentina',
        country: 'Argentina',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 75, dribbling: 82, physical: 78 }
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
        id: 'enzo_fernandez',
        name: 'Enzo Fernández',
        position: 'MID',
        team: 'Argentina',
        country: 'Argentina',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 68, passing: 88, defending: 78, dribbling: 82, physical: 75 }
      },
      // Atacantes (3)
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
      // Goleiro
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
        id: 'maignan',
        name: 'Mike Maignan',
        position: 'GK',
        team: 'França',
        country: 'France',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 82, defending: 45, dribbling: 58, physical: 85 }
      },
      // Defensores (4)
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
        id: 'upamecano',
        name: 'Dayot Upamecano',
        position: 'DEF',
        team: 'França',
        country: 'France',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 42, passing: 75, defending: 85, dribbling: 68, physical: 88 }
      },
      {
        id: 'theo_hernandez',
        name: 'Theo Hernández',
        position: 'DEF',
        team: 'França',
        country: 'France',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 68, passing: 82, defending: 78, dribbling: 85, physical: 80 }
      },
      {
        id: 'kounde',
        name: 'Jules Koundé',
        position: 'DEF',
        team: 'França',
        country: 'France',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 45, passing: 78, defending: 84, dribbling: 75, physical: 82 }
      },
      // Meio-campistas (3)
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
        id: 'camavinga',
        name: 'Eduardo Camavinga',
        position: 'MID',
        team: 'França',
        country: 'France',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 62, passing: 80, defending: 82, dribbling: 85, physical: 78 }
      },
      {
        id: 'griezmann',
        name: 'Antoine Griezmann',
        position: 'MID',
        team: 'França',
        country: 'France',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 85, passing: 83, defending: 50, dribbling: 85, physical: 75 }
      },
      // Atacantes (2)
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
      // Goleiro
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
        id: 'ramsdale',
        name: 'Aaron Ramsdale',
        position: 'GK',
        team: 'Inglaterra',
        country: 'England',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 78, defending: 40, dribbling: 55, physical: 78 }
      },
      // Defensores (4)
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
        id: 'maguire',
        name: 'Harry Maguire',
        position: 'DEF',
        team: 'Inglaterra',
        country: 'England',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 58, shooting: 48, passing: 80, defending: 85, dribbling: 62, physical: 88 }
      },
      {
        id: 'shaw',
        name: 'Luke Shaw',
        position: 'DEF',
        team: 'Inglaterra',
        country: 'England',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 55, passing: 82, defending: 80, dribbling: 75, physical: 80 }
      },
      {
        id: 'walker',
        name: 'Kyle Walker',
        position: 'DEF',
        team: 'Inglaterra',
        country: 'England',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 48, passing: 75, defending: 82, dribbling: 68, physical: 85 }
      },
      // Meio-campistas (3)
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
        id: 'foden',
        name: 'Phil Foden',
        position: 'MID',
        team: 'Inglaterra',
        country: 'England',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 82, shooting: 78, passing: 88, defending: 55, dribbling: 90, physical: 68 }
      },
      // Atacantes (2)
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
        id: 'saka',
        name: 'Bukayo Saka',
        position: 'FWD',
        team: 'Inglaterra',
        country: 'England',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 82, defending: 45, dribbling: 88, physical: 72 }
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
      // Goleiro
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
        id: 'raya',
        name: 'David Raya',
        position: 'GK',
        team: 'Espanha',
        country: 'Spain',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 80, defending: 42, dribbling: 58, physical: 76 }
      },
      // Defensores (4)
      {
        id: 'carvajal',
        name: 'Dani Carvajal',
        position: 'DEF',
        team: 'Espanha',
        country: 'Spain',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 55, passing: 85, defending: 82, dribbling: 78, physical: 78 }
      },
      {
        id: 'laporte',
        name: 'Aymeric Laporte',
        position: 'DEF',
        team: 'Espanha',
        country: 'Spain',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 88, defending: 86, dribbling: 75, physical: 85 }
      },
      {
        id: 'pau_torres',
        name: 'Pau Torres',
        position: 'DEF',
        team: 'Espanha',
        country: 'Spain',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 42, passing: 85, defending: 84, dribbling: 72, physical: 80 }
      },
      {
        id: 'alba',
        name: 'Jordi Alba',
        position: 'DEF',
        team: 'Espanha',
        country: 'Spain',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 58, passing: 88, defending: 78, dribbling: 82, physical: 72 }
      },
      // Meio-campistas (3)
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
        id: 'busquets',
        name: 'Sergio Busquets',
        position: 'MID',
        team: 'Espanha',
        country: 'Spain',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 55, shooting: 52, passing: 92, defending: 85, dribbling: 78, physical: 75 }
      },
      // Atacantes (2)
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
      },
      {
        id: 'morata',
        name: 'Álvaro Morata',
        position: 'FWD',
        team: 'Espanha',
        country: 'Spain',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 83, passing: 72, defending: 45, dribbling: 75, physical: 85 }
      }
    ]
  },
  {
    id: 'germany',
    name: 'Alemanha',
    country: 'Germany',
    flag: '🇩🇪',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'neuer',
        name: 'Manuel Neuer',
        position: 'GK',
        team: 'Alemanha',
        country: 'Germany',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 58, shooting: 28, passing: 85, defending: 48, dribbling: 68, physical: 85 }
      },
      {
        id: 'ter_stegen',
        name: 'Marc-André ter Stegen',
        position: 'GK',
        team: 'Alemanha',
        country: 'Germany',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 55, shooting: 25, passing: 88, defending: 45, dribbling: 72, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'rudiger',
        name: 'Antonio Rüdiger',
        position: 'DEF',
        team: 'Alemanha',
        country: 'Germany',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 80, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 90 }
      },
      {
        id: 'sule',
        name: 'Niklas Süle',
        position: 'DEF',
        team: 'Alemanha',
        country: 'Germany',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 48, passing: 75, defending: 85, dribbling: 65, physical: 88 }
      },
      {
        id: 'raum',
        name: 'David Raum',
        position: 'DEF',
        team: 'Alemanha',
        country: 'Germany',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 62, passing: 82, defending: 78, dribbling: 80, physical: 75 }
      },
      {
        id: 'kimmich',
        name: 'Joshua Kimmich',
        position: 'DEF',
        team: 'Alemanha',
        country: 'Germany',
        rating: 87,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 68, passing: 92, defending: 85, dribbling: 82, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'goretzka',
        name: 'Leon Goretzka',
        position: 'MID',
        team: 'Alemanha',
        country: 'Germany',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 78, passing: 82, defending: 80, dribbling: 80, physical: 88 }
      },
      {
        id: 'gundogan',
        name: 'İlkay Gündoğan',
        position: 'MID',
        team: 'Alemanha',
        country: 'Germany',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 70, shooting: 75, passing: 90, defending: 72, dribbling: 85, physical: 75 }
      },
      {
        id: 'musiala',
        name: 'Jamal Musiala',
        position: 'MID',
        team: 'Alemanha',
        country: 'Germany',
        rating: 84,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 72, passing: 82, defending: 58, dribbling: 90, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'havertz',
        name: 'Kai Havertz',
        position: 'FWD',
        team: 'Alemanha',
        country: 'Germany',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 80, shooting: 85, passing: 80, defending: 45, dribbling: 82, physical: 82 }
      },
      {
        id: 'werner',
        name: 'Timo Werner',
        position: 'FWD',
        team: 'Alemanha',
        country: 'Germany',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 80, passing: 70, defending: 35, dribbling: 78, physical: 75 }
      }
    ]
  },
  {
    id: 'uruguay',
    name: 'Uruguai',
    country: 'Uruguay',
    flag: '🇺🇾',
    formation: '4-4-2',
    players: [
      // Goleiro
      {
        id: 'rochet',
        name: 'Sergio Rochet',
        position: 'GK',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 76, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'muslera',
        name: 'Fernando Muslera',
        position: 'GK',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 20, passing: 74, defending: 38, dribbling: 52, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'gimenez',
        name: 'José María Giménez',
        position: 'DEF',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 76, defending: 86, dribbling: 68, physical: 88 }
      },
      {
        id: 'godin',
        name: 'Diego Godín',
        position: 'DEF',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 65, shooting: 48, passing: 78, defending: 88, dribbling: 65, physical: 90 }
      },
      {
        id: 'caceres',
        name: 'Martín Cáceres',
        position: 'DEF',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 74, defending: 82, dribbling: 70, physical: 85 }
      },
      {
        id: 'olivera',
        name: 'Mathías Olivera',
        position: 'DEF',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 76, defending: 80, dribbling: 72, physical: 78 }
      },
      // Meio-campistas (4)
      {
        id: 'bentancur',
        name: 'Rodrigo Bentancur',
        position: 'MID',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 70, passing: 84, defending: 78, dribbling: 80, physical: 82 }
      },
      {
        id: 'vecino',
        name: 'Matías Vecino',
        position: 'MID',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 75, passing: 80, defending: 75, dribbling: 76, physical: 85 }
      },
      {
        id: 'de_arrascaeta',
        name: 'Giorgian de Arrascaeta',
        position: 'MID',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 78, passing: 86, defending: 65, dribbling: 88, physical: 70 }
      },
      {
        id: 'pellistri',
        name: 'Facundo Pellistri',
        position: 'MID',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 68, passing: 74, defending: 55, dribbling: 82, physical: 68 }
      },
      // Atacantes (2)
      {
        id: 'suarez',
        name: 'Luis Suárez',
        position: 'FWD',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 70, shooting: 88, passing: 80, defending: 45, dribbling: 82, physical: 85 }
      },
      {
        id: 'cavani',
        name: 'Edinson Cavani',
        position: 'FWD',
        team: 'Uruguai',
        country: 'Uruguay',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 86, passing: 75, defending: 50, dribbling: 78, physical: 88 }
      }
    ]
  },
  {
    id: 'colombia',
    name: 'Colômbia',
    country: 'Colombia',
    flag: '🇨🇴',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'ospina',
        name: 'David Ospina',
        position: 'GK',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 78, defending: 42, dribbling: 58, physical: 80 }
      },
      {
        id: 'vargas',
        name: 'Camilo Vargas',
        position: 'GK',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 75, defending: 40, dribbling: 55, physical: 78 }
      },
      // Defensores (4)
      {
        id: 'sanchez',
        name: 'Carlos Cuesta',
        position: 'DEF',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 42, passing: 76, defending: 84, dribbling: 70, physical: 85 }
      },
      {
        id: 'lucumi',
        name: 'Jhon Lucumí',
        position: 'DEF',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 40, passing: 74, defending: 82, dribbling: 68, physical: 83 }
      },
      {
        id: 'mojica',
        name: 'Johan Mojica',
        position: 'DEF',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 55, passing: 78, defending: 78, dribbling: 75, physical: 76 }
      },
      {
        id: 'arias',
        name: 'Santiago Arias',
        position: 'DEF',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 58, passing: 80, defending: 80, dribbling: 76, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'barrios',
        name: 'Wilmar Barrios',
        position: 'MID',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 65, passing: 82, defending: 85, dribbling: 76, physical: 82 }
      },
      {
        id: 'uribe',
        name: 'Mateus Uribe',
        position: 'MID',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 75, passing: 84, defending: 78, dribbling: 80, physical: 85 }
      },
      {
        id: 'james',
        name: 'James Rodríguez',
        position: 'MID',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 68, shooting: 82, passing: 90, defending: 45, dribbling: 86, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'luis_diaz',
        name: 'Luis Díaz',
        position: 'FWD',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 92, shooting: 78, passing: 80, defending: 40, dribbling: 90, physical: 72 }
      },
      {
        id: 'muriel',
        name: 'Luis Muriel',
        position: 'FWD',
        team: 'Colômbia',
        country: 'Colombia',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 85, passing: 75, defending: 35, dribbling: 82, physical: 75 }
      }
    ]
  },
  {
    id: 'chile',
    name: 'Chile',
    country: 'Chile',
    flag: '🇨🇱',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'bravo',
        name: 'Claudio Bravo',
        position: 'GK',
        team: 'Chile',
        country: 'Chile',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 22, passing: 82, defending: 40, dribbling: 65, physical: 78 }
      },
      {
        id: 'cortes',
        name: 'Gabriel Cortés',
        position: 'GK',
        team: 'Chile',
        country: 'Chile',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 75, defending: 38, dribbling: 55, physical: 76 }
      },
      // Defensores (4)
      {
        id: 'medel',
        name: 'Gary Medel',
        position: 'DEF',
        team: 'Chile',
        country: 'Chile',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 48, passing: 76, defending: 84, dribbling: 70, physical: 88 }
      },
      {
        id: 'maripan',
        name: 'Guillermo Maripán',
        position: 'DEF',
        team: 'Chile',
        country: 'Chile',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 42, passing: 74, defending: 82, dribbling: 65, physical: 85 }
      },
      {
        id: 'isla',
        name: 'Mauricio Isla',
        position: 'DEF',
        team: 'Chile',
        country: 'Chile',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 55, passing: 78, defending: 76, dribbling: 72, physical: 75 }
      },
      {
        id: 'vegas',
        name: 'Eugenio Mena',
        position: 'DEF',
        team: 'Chile',
        country: 'Chile',
        rating: 76,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 50, passing: 76, defending: 78, dribbling: 70, physical: 76 }
      },
      // Meio-campistas (3)
      {
        id: 'vidal',
        name: 'Arturo Vidal',
        position: 'MID',
        team: 'Chile',
        country: 'Chile',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 78, passing: 80, defending: 82, dribbling: 75, physical: 88 }
      },
      {
        id: 'pulgar',
        name: 'Erick Pulgar',
        position: 'MID',
        team: 'Chile',
        country: 'Chile',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 72, passing: 82, defending: 78, dribbling: 74, physical: 80 }
      },
      {
        id: 'marcelino',
        name: 'Marcelino Núñez',
        position: 'MID',
        team: 'Chile',
        country: 'Chile',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 70, passing: 84, defending: 70, dribbling: 80, physical: 72 }
      },
      // Atacantes (2)
      {
        id: 'sanchez_a',
        name: 'Alexis Sánchez',
        position: 'FWD',
        team: 'Chile',
        country: 'Chile',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 78, defending: 45, dribbling: 88, physical: 70 }
      },
      {
        id: 'brereton',
        name: 'Ben Brereton',
        position: 'FWD',
        team: 'Chile',
        country: 'Chile',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 80, passing: 72, defending: 40, dribbling: 75, physical: 82 }
      }
    ]
  },
  {
    id: 'ecuador',
    name: 'Equador',
    country: 'Ecuador',
    flag: '🇪🇨',
    formation: '4-4-2',
    players: [
      // Goleiro
      {
        id: 'galindez',
        name: 'Hernán Galíndez',
        position: 'GK',
        team: 'Equador',
        country: 'Ecuador',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 76, defending: 40, dribbling: 55, physical: 80 }
      },
      {
        id: 'dominguez',
        name: 'Alexander Domínguez',
        position: 'GK',
        team: 'Equador',
        country: 'Ecuador',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 20, passing: 74, defending: 38, dribbling: 52, physical: 78 }
      },
      // Defensores (4)
      {
        id: 'torres_ec',
        name: 'Félix Torres',
        position: 'DEF',
        team: 'Equador',
        country: 'Ecuador',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 74, defending: 82, dribbling: 68, physical: 85 }
      },
      {
        id: 'hincapie',
        name: 'Piero Hincapié',
        position: 'DEF',
        team: 'Equador',
        country: 'Ecuador',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 45, passing: 76, defending: 84, dribbling: 72, physical: 82 }
      },
      {
        id: 'estupinan',
        name: 'Pervis Estupiñán',
        position: 'DEF',
        team: 'Equador',
        country: 'Ecuador',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 58, passing: 80, defending: 78, dribbling: 82, physical: 76 }
      },
      {
        id: 'preciado',
        name: 'Ángelo Preciado',
        position: 'DEF',
        team: 'Equador',
        country: 'Ecuador',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 55, passing: 76, defending: 76, dribbling: 78, physical: 74 }
      },
      // Meio-campistas (4)
      {
        id: 'mendez',
        name: 'Carlos Gruezo',
        position: 'MID',
        team: 'Equador',
        country: 'Ecuador',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 65, passing: 78, defending: 80, dribbling: 72, physical: 82 }
      },
      {
        id: 'caicedo',
        name: 'Moisés Caicedo',
        position: 'MID',
        team: 'Equador',
        country: 'Ecuador',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 70, passing: 82, defending: 84, dribbling: 80, physical: 85 }
      },
      {
        id: 'plata',
        name: 'Gonzalo Plata',
        position: 'MID',
        team: 'Equador',
        country: 'Ecuador',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 90, shooting: 72, passing: 76, defending: 50, dribbling: 85, physical: 68 }
      },
      {
        id: 'sarmiento',
        name: 'Jeremy Sarmiento',
        position: 'MID',
        team: 'Equador',
        country: 'Ecuador',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 68, passing: 74, defending: 45, dribbling: 82, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'valencia',
        name: 'Enner Valencia',
        position: 'FWD',
        team: 'Equador',
        country: 'Ecuador',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 86, passing: 75, defending: 45, dribbling: 78, physical: 82 }
      },
      {
        id: 'rodriguez_ec',
        name: 'Michael Estrada',
        position: 'FWD',
        team: 'Equador',
        country: 'Ecuador',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 82, passing: 70, defending: 40, dribbling: 75, physical: 85 }
      }
    ]
  },
  {
    id: 'usa',
    name: 'Estados Unidos',
    country: 'United States',
    flag: '🇺🇸',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'turner',
        name: 'Matt Turner',
        position: 'GK',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 76, defending: 40, dribbling: 58, physical: 82 }
      },
      {
        id: 'horvath',
        name: 'Ethan Horvath',
        position: 'GK',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 74, defending: 38, dribbling: 55, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'adams_us',
        name: 'Tyler Adams',
        position: 'DEF',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 55, passing: 82, defending: 84, dribbling: 76, physical: 82 }
      },
      {
        id: 'robinson',
        name: 'Antonee Robinson',
        position: 'DEF',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 50, passing: 76, defending: 78, dribbling: 80, physical: 75 }
      },
      {
        id: 'dest',
        name: 'Sergiño Dest',
        position: 'DEF',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 62, passing: 80, defending: 76, dribbling: 82, physical: 72 }
      },
      {
        id: 'richards',
        name: 'Chris Richards',
        position: 'DEF',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 45, passing: 74, defending: 82, dribbling: 70, physical: 85 }
      },
      // Meio-campistas (3)
      {
        id: 'mckennie',
        name: 'Weston McKennie',
        position: 'MID',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 78, passing: 80, defending: 75, dribbling: 80, physical: 88 }
      },
      {
        id: 'musah',
        name: 'Yunus Musah',
        position: 'MID',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 68, passing: 84, defending: 72, dribbling: 88, physical: 75 }
      },
      {
        id: 'reyna',
        name: 'Giovanni Reyna',
        position: 'MID',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 80, shooting: 82, passing: 88, defending: 55, dribbling: 90, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'pulisic',
        name: 'Christian Pulisic',
        position: 'FWD',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 92, shooting: 80, passing: 82, defending: 40, dribbling: 88, physical: 72 }
      },
      {
        id: 'weah',
        name: 'Timothy Weah',
        position: 'FWD',
        team: 'Estados Unidos',
        country: 'United States',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 74, defending: 35, dribbling: 82, physical: 76 }
      }
    ]
  },
  {
    id: 'mexico',
    name: 'México',
    country: 'Mexico',
    flag: '🇲🇽',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'ochoa',
        name: 'Guillermo Ochoa',
        position: 'GK',
        team: 'México',
        country: 'Mexico',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 78, defending: 42, dribbling: 62, physical: 80 }
      },
      {
        id: 'talavera',
        name: 'Alfredo Talavera',
        position: 'GK',
        team: 'México',
        country: 'Mexico',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 20, passing: 75, defending: 40, dribbling: 58, physical: 78 }
      },
      // Defensores (4)
      {
        id: 'moreno',
        name: 'Héctor Moreno',
        position: 'DEF',
        team: 'México',
        country: 'Mexico',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 45, passing: 76, defending: 84, dribbling: 68, physical: 88 }
      },
      {
        id: 'araujo_mx',
        name: 'Néstor Araújo',
        position: 'DEF',
        team: 'México',
        country: 'Mexico',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 42, passing: 74, defending: 82, dribbling: 65, physical: 85 }
      },
      {
        id: 'gallardo',
        name: 'Jesús Gallardo',
        position: 'DEF',
        team: 'México',
        country: 'Mexico',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 58, passing: 78, defending: 76, dribbling: 80, physical: 74 }
      },
      {
        id: 'sanchez_mx',
        name: 'Carlos Salcedo',
        position: 'DEF',
        team: 'México',
        country: 'Mexico',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 48, passing: 76, defending: 82, dribbling: 70, physical: 85 }
      },
      // Meio-campistas (3)
      {
        id: 'herrera',
        name: 'Héctor Herrera',
        position: 'MID',
        team: 'México',
        country: 'Mexico',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 75, passing: 84, defending: 78, dribbling: 78, physical: 82 }
      },
      {
        id: 'alvarez_mx',
        name: 'Edson Álvarez',
        position: 'MID',
        team: 'México',
        country: 'Mexico',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 68, passing: 80, defending: 86, dribbling: 74, physical: 88 }
      },
      {
        id: 'lozano',
        name: 'Hirving Lozano',
        position: 'MID',
        team: 'México',
        country: 'Mexico',
        rating: 83,
        rarity: 'rare',
        image: '',
        stats: { pace: 92, shooting: 78, passing: 76, defending: 45, dribbling: 85, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'jimenez',
        name: 'Raúl Jiménez',
        position: 'FWD',
        team: 'México',
        country: 'Mexico',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 86, passing: 78, defending: 45, dribbling: 80, physical: 88 }
      },
      {
        id: 'vega',
        name: 'Alexis Vega',
        position: 'FWD',
        team: 'México',
        country: 'Mexico',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 80, passing: 78, defending: 40, dribbling: 84, physical: 75 }
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canadá',
    country: 'Canada',
    flag: '🇨🇦',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'borjan',
        name: 'Milan Borjan',
        position: 'GK',
        team: 'Canadá',
        country: 'Canada',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 22, passing: 75, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'crepeau',
        name: 'Maxime Crépeau',
        position: 'GK',
        team: 'Canadá',
        country: 'Canada',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 52, shooting: 25, passing: 76, defending: 38, dribbling: 58, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'vitoria',
        name: 'Steven Vitória',
        position: 'DEF',
        team: 'Canadá',
        country: 'Canada',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 42, passing: 74, defending: 82, dribbling: 65, physical: 88 }
      },
      {
        id: 'miller',
        name: 'Kamal Miller',
        position: 'DEF',
        team: 'Canadá',
        country: 'Canada',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 76, defending: 80, dribbling: 70, physical: 82 }
      },
      {
        id: 'davies',
        name: 'Alphonso Davies',
        position: 'DEF',
        team: 'Canadá',
        country: 'Canada',
        rating: 86,
        rarity: 'epic',
        image: '',
        stats: { pace: 96, shooting: 62, passing: 82, defending: 78, dribbling: 88, physical: 78 }
      },
      {
        id: 'johnston',
        name: 'Alistair Johnston',
        position: 'DEF',
        team: 'Canadá',
        country: 'Canada',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 55, passing: 76, defending: 78, dribbling: 72, physical: 76 }
      },
      // Meio-campistas (3)
      {
        id: 'hutchinson',
        name: 'Atiba Hutchinson',
        position: 'MID',
        team: 'Canadá',
        country: 'Canada',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 65, shooting: 68, passing: 82, defending: 82, dribbling: 75, physical: 85 }
      },
      {
        id: 'eustaquio',
        name: 'Stephen Eustáquio',
        position: 'MID',
        team: 'Canadá',
        country: 'Canada',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 70, passing: 86, defending: 76, dribbling: 82, physical: 78 }
      },
      {
        id: 'buchanan',
        name: 'Tajon Buchanan',
        position: 'MID',
        team: 'Canadá',
        country: 'Canada',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 72, passing: 78, defending: 58, dribbling: 86, physical: 75 }
      },
      // Atacantes (2)
      {
        id: 'david',
        name: 'Jonathan David',
        position: 'FWD',
        team: 'Canadá',
        country: 'Canada',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 86, passing: 78, defending: 40, dribbling: 82, physical: 80 }
      },
      {
        id: 'larin',
        name: 'Cyle Larin',
        position: 'FWD',
        team: 'Canadá',
        country: 'Canada',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 84, passing: 70, defending: 35, dribbling: 75, physical: 88 }
      }
    ]
  },
  {
    id: 'italy',
    name: 'Itália',
    country: 'Italy',
    flag: '🇮🇹',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'donnarumma',
        name: 'Gianluigi Donnarumma',
        position: 'GK',
        team: 'Itália',
        country: 'Italy',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 80, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'sirigu',
        name: 'Salvatore Sirigu',
        position: 'GK',
        team: 'Itália',
        country: 'Italy',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'bonucci',
        name: 'Leonardo Bonucci',
        position: 'DEF',
        team: 'Itália',
        country: 'Italy',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'chiellini',
        name: 'Giorgio Chiellini',
        position: 'DEF',
        team: 'Itália',
        country: 'Italy',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 68, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'kjaer',
        name: 'Simon Kjaer',
        position: 'DEF',
        team: 'Itália',
        country: 'Italy',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 45, passing: 78, defending: 84, dribbling: 68, physical: 85 }
      },
      {
        id: 'di_lorenzo',
        name: 'Alessandro Di Lorenzo',
        position: 'DEF',
        team: 'Itália',
        country: 'Italy',
        rating: 81,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      // Meio-campistas (3)
      {
        id: 'benedict',
        name: 'Manuel Locatelli',
        position: 'MID',
        team: 'Itália',
        country: 'Italy',
        rating: 83,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      },
      {
        id: 'zaniolo',
        name: 'Nicolo Zaniolo',
        position: 'MID',
        team: 'Itália',
        country: 'Italy',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 82, shooting: 70, passing: 80, defending: 72, dribbling: 82, physical: 78 }
      },
      {
        id: 'pereira',
        name: 'Nicolo Barella',
        position: 'MID',
        team: 'Itália',
        country: 'Italy',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 85, defending: 72, dribbling: 80, physical: 75 }
      },
      // Atacantes (3)
      {
        id: 'immobile',
        name: 'Ciro Immobile',
        position: 'FWD',
        team: 'Itália',
        country: 'Italy',
        rating: 88,
        rarity: 'legendary',
        image: '',
        stats: { pace: 80, shooting: 85, passing: 75, defending: 45, dribbling: 82, physical: 85 }
      },
      {
        id: 'belotti',
        name: 'Andrea Belotti',
        position: 'FWD',
        team: 'Itália',
        country: 'Italy',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 82, shooting: 80, passing: 72, defending: 45, dribbling: 75, physical: 85 }
      },
      {
        id: 'insigne',
        name: 'Lorenzo Insigne',
        position: 'FWD',
        team: 'Itália',
        country: 'Italy',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 78, defending: 40, dribbling: 84, physical: 75 }
      }
    ]
  },
  {
    id: 'netherlands',
    name: 'Holanda',
    country: 'Netherlands',
    flag: '🇳🇱',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'cillessen',
        name: 'Jasper Cillessen',
        position: 'GK',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 78, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'schuurs',
        name: 'Joël Schuurs',
        position: 'GK',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'de_ligt',
        name: 'Jurrien Timber',
        position: 'DEF',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'de_vrij',
        name: 'Stefan de Vrij',
        position: 'DEF',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'van_dijk',
        name: 'Virgil van Dijk',
        position: 'DEF',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 80, shooting: 45, passing: 78, defending: 88, dribbling: 70, physical: 85 }
      },
      {
        id: 'tagliafico',
        name: 'Nicolás Tagliafico',
        position: 'DEF',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 81,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 52, passing: 80, defending: 83, dribbling: 72, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'de_ronde',
        name: 'Daley Blind',
        position: 'MID',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 82, defending: 78, dribbling: 76, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Frenkie de Jong',
        position: 'MID',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 85, defending: 72, dribbling: 80, physical: 85 }
      },
      {
        id: 'de_vrij',
        name: 'Georginio Wijnaldum',
        position: 'MID',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 70, passing: 80, defending: 78, dribbling: 74, physical: 82 }
      },
      // Atacantes (3)
      {
        id: 'de_ligt',
        name: 'Cody Gakpo',
        position: 'FWD',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 80, passing: 78, defending: 35, dribbling: 82, physical: 70 }
      },
      {
        id: 'de_vrij',
        name: 'Steven Bergwijn',
        position: 'FWD',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 78, passing: 76, defending: 30, dribbling: 82, physical: 70 }
      },
      {
        id: 'de_ligt',
        name: 'Donyell Malen',
        position: 'FWD',
        team: 'Holanda',
        country: 'Netherlands',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 75, defending: 40, dribbling: 80, physical: 75 }
      }
    ]
  },
  {
    id: 'portugal',
    name: 'Portugal',
    country: 'Portugal',
    flag: '🇵🇹',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'ribeiro',
        name: 'Diogo Costa',
        position: 'GK',
        team: 'Portugal',
        country: 'Portugal',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 80, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'ribeiro',
        name: 'Rui Patrício',
        position: 'GK',
        team: 'Portugal',
        country: 'Portugal',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'pepe',
        name: 'Pepe',
        position: 'DEF',
        team: 'Portugal',
        country: 'Portugal',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'silva',
        name: 'Rúben Dias',
        position: 'DEF',
        team: 'Portugal',
        country: 'Portugal',
        rating: 83,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'bender',
        name: 'João Cancelo',
        position: 'DEF',
        team: 'Portugal',
        country: 'Portugal',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      {
        id: 'silva',
        name: 'António Silva',
        position: 'DEF',
        team: 'Portugal',
        country: 'Portugal',
        rating: 79,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 48, passing: 76, defending: 82, dribbling: 70, physical: 85 }
      },
      // Meio-campistas (3)
      {
        id: 'bender',
        name: 'Bernardo Silva',
        position: 'MID',
        team: 'Portugal',
        country: 'Portugal',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      },
      {
        id: 'pereira',
        name: 'João Moutinho',
        position: 'MID',
        team: 'Portugal',
        country: 'Portugal',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 75, passing: 85, defending: 72, dribbling: 80, physical: 75 }
      },
      {
        id: 'pereira',
        name: 'Bruno Fernandes',
        position: 'MID',
        team: 'Portugal',
        country: 'Portugal',
        rating: 83,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 78, passing: 85, defending: 75, dribbling: 82, physical: 75 }
      },
      // Atacantes (3)
      {
        id: 'pereira',
        name: 'Cristiano Ronaldo',
        position: 'FWD',
        team: 'Portugal',
        country: 'Portugal',
        rating: 90,
        rarity: 'legendary',
        image: '',
        stats: { pace: 80, shooting: 92, passing: 85, defending: 35, dribbling: 94, physical: 65 }
      },
      {
        id: 'pereira',
        name: 'Diogo Jota',
        position: 'FWD',
        team: 'Portugal',
        country: 'Portugal',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 78, defending: 40, dribbling: 88, physical: 70 }
      },
      {
        id: 'pereira',
        name: 'Rafael Leão',
        position: 'FWD',
        team: 'Portugal',
        country: 'Portugal',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 80, passing: 78, defending: 45, dribbling: 82, physical: 75 }
      }
    ]
  },
  {
    id: 'belgium',
    name: 'Bélgica',
    country: 'Belgium',
    flag: '🇧🇪',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'silva',
        name: 'Thibaut Courtois',
        position: 'GK',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 80, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'silva',
        name: 'Simon Mignolet',
        position: 'GK',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'de_ligt',
        name: 'Toby Alderweireld',
        position: 'DEF',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'de_ligt',
        name: 'Jan Vertonghen',
        position: 'DEF',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'de_ligt',
        name: 'Thomas Meunier',
        position: 'DEF',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Eden Hazard',
        position: 'DEF',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 58, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      // Meio-campistas (3)
      {
        id: 'de_ligt',
        name: 'Kevin De Bruyne',
        position: 'MID',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      },
      {
        id: 'de_ligt',
        name: 'Axel Witsel',
        position: 'MID',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 70, passing: 80, defending: 78, dribbling: 74, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Dries Mertens',
        position: 'MID',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      // Atacantes (3)
      {
        id: 'de_ligt',
        name: 'Romelu Lukaku',
        position: 'FWD',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 88,
        rarity: 'epic',
        image: '',
        stats: { pace: 80, shooting: 85, passing: 75, defending: 45, dribbling: 82, physical: 85 }
      },
      {
        id: 'de_ligt',
        name: 'Eden Hazard',
        position: 'FWD',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 88, shooting: 80, passing: 78, defending: 45, dribbling: 82, physical: 75 }
      },
      {
        id: 'de_ligt',
        name: 'Dejan Lovren',
        position: 'FWD',
        team: 'Bélgica',
        country: 'Belgium',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 75, defending: 40, dribbling: 80, physical: 75 }
      }
    ]
  },
  {
    id: 'croatia',
    name: 'Croácia',
    country: 'Croatia',
    flag: '🇭🇷',
    formation: '4-3-3',
    players: [
      // Goleiro
      {
        id: 'livakovic',
        name: 'Dominik Livakovic',
        position: 'GK',
        team: 'Croácia',
        country: 'Croatia',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 80, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'silva',
        name: 'Ivica Ivušić',
        position: 'GK',
        team: 'Croácia',
        country: 'Croatia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'de_ligt',
        name: 'Josip Iličić',
        position: 'DEF',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'de_ligt',
        name: 'Dejan Lovren',
        position: 'DEF',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'de_ligt',
        name: 'Josip Iličić',
        position: 'DEF',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Josip Iličić',
        position: 'DEF',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 58, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      // Meio-campistas (3)
      {
        id: 'de_ligt',
        name: 'Luka Modrić',
        position: 'MID',
        team: 'Croácia',
        country: 'Croatia',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 75, dribbling: 82, physical: 80 }
      },
      {
        id: 'de_ligt',
        name: 'Marcelo Brozović',
        position: 'MID',
        team: 'Croácia',
        country: 'Croatia',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 72, shooting: 70, passing: 80, defending: 78, dribbling: 74, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Mateo Kovačić',
        position: 'MID',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      // Atacantes (3)
      {
        id: 'de_ligt',
        name: 'Ivan Perišić',
        position: 'FWD',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 78, defending: 45, dribbling: 80, physical: 75 }
      },
      {
        id: 'de_ligt',
        name: 'Mario Mandžukić',
        position: 'FWD',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 82, shooting: 80, passing: 78, defending: 40, dribbling: 78, physical: 82 }
      },
      {
        id: 'de_ligt',
        name: 'Ante Budimir',
        position: 'FWD',
        team: 'Croácia',
        country: 'Croatia',
        rating: 80,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 75, defending: 40, dribbling: 80, physical: 75 }
      }
    ]
  },
  {
    id: 'morocco',
    name: 'Marrocos',
    country: 'Morocco',
    flag: '🇲🇦',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'bounou',
        name: 'Yassine Bounou',
        position: 'GK',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 78, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'zniti',
        name: 'Munir El Kajoui',
        position: 'GK',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'saiss',
        name: 'Romain Saiss',
        position: 'DEF',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 85 }
      },
      {
        id: 'aguerd',
        name: 'Nayef Aguerd',
        position: 'DEF',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 76, defending: 86, dribbling: 65, physical: 88 }
      },
      {
        id: 'mazraoui',
        name: 'Noussair Mazraoui',
        position: 'DEF',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 80, defending: 78, dribbling: 76, physical: 82 }
      },
      {
        id: 'hakimi',
        name: 'Achraf Hakimi',
        position: 'DEF',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 92, shooting: 68, passing: 82, defending: 78, dribbling: 86, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'amrabat',
        name: 'Sofyan Amrabat',
        position: 'MID',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 85, defending: 85, dribbling: 76, physical: 85 }
      },
      {
        id: 'ounahi',
        name: 'Azzedine Ounahi',
        position: 'MID',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 70, passing: 82, defending: 75, dribbling: 82, physical: 75 }
      },
      {
        id: 'ziyech',
        name: 'Hakim Ziyech',
        position: 'MID',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 85, passing: 88, defending: 55, dribbling: 88, physical: 68 }
      },
      // Atacantes (2)
      {
        id: 'en_nesyri',
        name: 'Youssef En-Nesyri',
        position: 'FWD',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 84, passing: 70, defending: 45, dribbling: 78, physical: 88 }
      },
      {
        id: 'boufal',
        name: 'Sofiane Boufal',
        position: 'FWD',
        team: 'Marrocos',
        country: 'Morocco',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 75, passing: 78, defending: 40, dribbling: 90, physical: 68 }
      }
    ]
  },
  {
    id: 'senegal',
    name: 'Senegal',
    country: 'Senegal',
    flag: '🇸🇳',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'mendy_s',
        name: 'Édouard Mendy',
        position: 'GK',
        team: 'Senegal',
        country: 'Senegal',
        rating: 83,
        rarity: 'epic',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 78, defending: 40, dribbling: 55, physical: 85 }
      },
      {
        id: 'dieng',
        name: 'Seny Dieng',
        position: 'GK',
        team: 'Senegal',
        country: 'Senegal',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 82 }
      },
      // Defensores (4)
      {
        id: 'koulibaly',
        name: 'Kalidou Koulibaly',
        position: 'DEF',
        team: 'Senegal',
        country: 'Senegal',
        rating: 85,
        rarity: 'epic',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 88, dribbling: 68, physical: 90 }
      },
      {
        id: 'kouyate',
        name: 'Cheikhou Kouyaté',
        position: 'DEF',
        team: 'Senegal',
        country: 'Senegal',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 42, passing: 76, defending: 84, dribbling: 65, physical: 88 }
      },
      {
        id: 'ballo_toure',
        name: 'Fodé Ballo-Touré',
        position: 'DEF',
        team: 'Senegal',
        country: 'Senegal',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 50, passing: 76, defending: 78, dribbling: 74, physical: 80 }
      },
      {
        id: 'sabaly',
        name: 'Youssouf Sabaly',
        position: 'DEF',
        team: 'Senegal',
        country: 'Senegal',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 55, passing: 78, defending: 80, dribbling: 76, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'gueye',
        name: 'Idrissa Gueye',
        position: 'MID',
        team: 'Senegal',
        country: 'Senegal',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 65, passing: 80, defending: 88, dribbling: 76, physical: 85 }
      },
      {
        id: 'mendy_n',
        name: 'Nampalys Mendy',
        position: 'MID',
        team: 'Senegal',
        country: 'Senegal',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 68, passing: 82, defending: 82, dribbling: 74, physical: 80 }
      },
      {
        id: 'sarr',
        name: 'Ismaïla Sarr',
        position: 'MID',
        team: 'Senegal',
        country: 'Senegal',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 90, shooting: 75, passing: 76, defending: 50, dribbling: 85, physical: 72 }
      },
      // Atacantes (2)
      {
        id: 'mane',
        name: 'Sadio Mané',
        position: 'FWD',
        team: 'Senegal',
        country: 'Senegal',
        rating: 87,
        rarity: 'legendary',
        image: '',
        stats: { pace: 92, shooting: 85, passing: 80, defending: 45, dribbling: 90, physical: 75 }
      },
      {
        id: 'dia',
        name: 'Boulaye Dia',
        position: 'FWD',
        team: 'Senegal',
        country: 'Senegal',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 85, shooting: 82, passing: 72, defending: 40, dribbling: 78, physical: 80 }
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japão',
    country: 'Japan',
    flag: '🇯🇵',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'gonda',
        name: 'Shuichi Gonda',
        position: 'GK',
        team: 'Japão',
        country: 'Japan',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 78, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'kawashima',
        name: 'Eiji Kawashima',
        position: 'GK',
        team: 'Japão',
        country: 'Japan',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 75, defending: 38, dribbling: 52, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'yoshida',
        name: 'Maya Yoshida',
        position: 'DEF',
        team: 'Japão',
        country: 'Japan',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 42, passing: 76, defending: 84, dribbling: 65, physical: 88 }
      },
      {
        id: 'tomiyasu',
        name: 'Takehiro Tomiyasu',
        position: 'DEF',
        team: 'Japão',
        country: 'Japan',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 45, passing: 78, defending: 82, dribbling: 70, physical: 82 }
      },
      {
        id: 'nagatomo',
        name: 'Yuto Nagatomo',
        position: 'DEF',
        team: 'Japão',
        country: 'Japan',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 52, passing: 76, defending: 78, dribbling: 74, physical: 76 }
      },
      {
        id: 'sakai',
        name: 'Hiroki Sakai',
        position: 'DEF',
        team: 'Japão',
        country: 'Japan',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 55, passing: 78, defending: 80, dribbling: 72, physical: 76 }
      },
      // Meio-campistas (3)
      {
        id: 'endo',
        name: 'Wataru Endo',
        position: 'MID',
        team: 'Japão',
        country: 'Japan',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 65, passing: 82, defending: 84, dribbling: 74, physical: 82 }
      },
      {
        id: 'kamada',
        name: 'Daichi Kamada',
        position: 'MID',
        team: 'Japão',
        country: 'Japan',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 78, passing: 85, defending: 68, dribbling: 82, physical: 70 }
      },
      {
        id: 'kubo',
        name: 'Takefusa Kubo',
        position: 'MID',
        team: 'Japão',
        country: 'Japan',
        rating: 82,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 72, passing: 82, defending: 55, dribbling: 88, physical: 68 }
      },
      // Atacantes (2)
      {
        id: 'mitoma',
        name: 'Kaoru Mitoma',
        position: 'FWD',
        team: 'Japão',
        country: 'Japan',
        rating: 83,
        rarity: 'epic',
        image: '',
        stats: { pace: 90, shooting: 78, passing: 78, defending: 40, dribbling: 88, physical: 70 }
      },
      {
        id: 'osako',
        name: 'Yuya Osako',
        position: 'FWD',
        team: 'Japão',
        country: 'Japan',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 82, passing: 70, defending: 45, dribbling: 75, physical: 82 }
      }
    ]
  },
  {
    id: 'korea',
    name: 'Coreia do Sul',
    country: 'South Korea',
    flag: '🇰🇷',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'kim_sg',
        name: 'Kim Seung-gyu',
        position: 'GK',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 76, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'jo_hs',
        name: 'Jo Hyeon-woo',
        position: 'GK',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 74, defending: 38, dribbling: 52, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'kim_mj',
        name: 'Kim Min-jae',
        position: 'DEF',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 84,
        rarity: 'epic',
        image: '',
        stats: { pace: 78, shooting: 45, passing: 78, defending: 88, dribbling: 70, physical: 85 }
      },
      {
        id: 'kim_yg',
        name: 'Kim Young-gwon',
        position: 'DEF',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 42, passing: 76, defending: 84, dribbling: 65, physical: 88 }
      },
      {
        id: 'kim_jh',
        name: 'Kim Jin-su',
        position: 'DEF',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 50, passing: 78, defending: 78, dribbling: 72, physical: 76 }
      },
      {
        id: 'lee_yj',
        name: 'Lee Yong-jae',
        position: 'DEF',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 52, passing: 76, defending: 80, dribbling: 70, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'jung_ws',
        name: 'Jung Woo-young',
        position: 'MID',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 68, passing: 82, defending: 80, dribbling: 76, physical: 80 }
      },
      {
        id: 'hwang_ih',
        name: 'Hwang In-beom',
        position: 'MID',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 75, shooting: 72, passing: 84, defending: 75, dribbling: 80, physical: 78 }
      },
      {
        id: 'lee_jh',
        name: 'Lee Jae-sung',
        position: 'MID',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 80, defending: 70, dribbling: 82, physical: 72 }
      },
      // Atacantes (2)
      {
        id: 'son_hm',
        name: 'Son Heung-min',
        position: 'FWD',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 88,
        rarity: 'legendary',
        image: '',
        stats: { pace: 88, shooting: 86, passing: 82, defending: 45, dribbling: 88, physical: 75 }
      },
      {
        id: 'hwang_hc',
        name: 'Hwang Hee-chan',
        position: 'FWD',
        team: 'Coreia do Sul',
        country: 'South Korea',
        rating: 82,
        rarity: 'rare',
        image: '',
        stats: { pace: 88, shooting: 80, passing: 75, defending: 40, dribbling: 82, physical: 72 }
      }
    ]
  },
  {
    id: 'saudi_arabia',
    name: 'Arábia Saudita',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'al_owais',
        name: 'Mohammed Al-Owais',
        position: 'GK',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 74, defending: 38, dribbling: 52, physical: 82 }
      },
      {
        id: 'al_rubaie',
        name: 'Nawaf Al-Aqidi',
        position: 'GK',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 76,
        rarity: 'rare',
        image: '',
        stats: { pace: 46, shooting: 16, passing: 72, defending: 36, dribbling: 50, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'al_bulaihi',
        name: 'Ali Al-Bulaihi',
        position: 'DEF',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 68, shooting: 40, passing: 74, defending: 82, dribbling: 65, physical: 85 }
      },
      {
        id: 'al_tambakti',
        name: 'Hassan Al-Tambakti',
        position: 'DEF',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 38, passing: 72, defending: 80, dribbling: 62, physical: 82 }
      },
      {
        id: 'al_shahrani',
        name: 'Yasser Al-Shahrani',
        position: 'DEF',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 48, passing: 76, defending: 76, dribbling: 70, physical: 74 }
      },
      {
        id: 'al_ghannam',
        name: 'Saud Abdulhamid',
        position: 'DEF',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 76, shooting: 50, passing: 74, defending: 78, dribbling: 68, physical: 76 }
      },
      // Meio-campistas (3)
      {
        id: 'al_faraj',
        name: 'Salman Al-Faraj',
        position: 'MID',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 65, passing: 80, defending: 78, dribbling: 74, physical: 78 }
      },
      {
        id: 'kanno',
        name: 'Mohamed Kanno',
        position: 'MID',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 68, passing: 78, defending: 76, dribbling: 72, physical: 76 }
      },
      {
        id: 'al_dawsari',
        name: 'Salem Al-Dawsari',
        position: 'MID',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 81,
        rarity: 'epic',
        image: '',
        stats: { pace: 85, shooting: 75, passing: 78, defending: 55, dribbling: 82, physical: 70 }
      },
      // Atacantes (2)
      {
        id: 'al_shehri',
        name: 'Saleh Al-Shehri',
        position: 'FWD',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 78, passing: 68, defending: 40, dribbling: 76, physical: 75 }
      },
      {
        id: 'al_buraikan',
        name: 'Feras Al-Buraikan',
        position: 'FWD',
        team: 'Arábia Saudita',
        country: 'Saudi Arabia',
        rating: 77,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 76, passing: 65, defending: 35, dribbling: 72, physical: 78 }
      }
    ]
  },
  {
    id: 'australia',
    name: 'Austrália',
    country: 'Australia',
    flag: '🇦🇺',
    formation: '4-2-3-1',
    players: [
      // Goleiro
      {
        id: 'ryan',
        name: 'Mat Ryan',
        position: 'GK',
        team: 'Austrália',
        country: 'Australia',
        rating: 81,
        rarity: 'rare',
        image: '',
        stats: { pace: 50, shooting: 20, passing: 76, defending: 40, dribbling: 55, physical: 82 }
      },
      {
        id: 'redmayne',
        name: 'Andrew Redmayne',
        position: 'GK',
        team: 'Austrália',
        country: 'Australia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 48, shooting: 18, passing: 74, defending: 38, dribbling: 52, physical: 80 }
      },
      // Defensores (4)
      {
        id: 'souttar',
        name: 'Harry Souttar',
        position: 'DEF',
        team: 'Austrália',
        country: 'Australia',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 45, passing: 76, defending: 84, dribbling: 65, physical: 90 }
      },
      {
        id: 'degenek',
        name: 'Milos Degenek',
        position: 'DEF',
        team: 'Austrália',
        country: 'Australia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 42, passing: 74, defending: 82, dribbling: 62, physical: 85 }
      },
      {
        id: 'behich',
        name: 'Aziz Behich',
        position: 'DEF',
        team: 'Austrália',
        country: 'Australia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 52, passing: 78, defending: 78, dribbling: 74, physical: 76 }
      },
      {
        id: 'atkinson',
        name: 'Nathaniel Atkinson',
        position: 'DEF',
        team: 'Austrália',
        country: 'Australia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 55, passing: 76, defending: 80, dribbling: 70, physical: 78 }
      },
      // Meio-campistas (3)
      {
        id: 'mooy',
        name: 'Aaron Mooy',
        position: 'MID',
        team: 'Austrália',
        country: 'Australia',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 70, shooting: 72, passing: 84, defending: 75, dribbling: 78, physical: 78 }
      },
      {
        id: 'irvine',
        name: 'Jackson Irvine',
        position: 'MID',
        team: 'Austrália',
        country: 'Australia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 72, shooting: 70, passing: 80, defending: 78, dribbling: 74, physical: 82 }
      },
      {
        id: 'leckie',
        name: 'Mathew Leckie',
        position: 'MID',
        team: 'Austrália',
        country: 'Australia',
        rating: 80,
        rarity: 'rare',
        image: '',
        stats: { pace: 82, shooting: 72, passing: 76, defending: 60, dribbling: 78, physical: 76 }
      },
      // Atacantes (2)
      {
        id: 'duke',
        name: 'Mitchell Duke',
        position: 'FWD',
        team: 'Austrália',
        country: 'Australia',
        rating: 79,
        rarity: 'rare',
        image: '',
        stats: { pace: 80, shooting: 78, passing: 68, defending: 40, dribbling: 72, physical: 82 }
      },
      {
        id: 'goodwin',
        name: 'Craig Goodwin',
        position: 'FWD',
        team: 'Austrália',
        country: 'Australia',
        rating: 78,
        rarity: 'rare',
        image: '',
        stats: { pace: 78, shooting: 75, passing: 72, defending: 45, dribbling: 76, physical: 74 }
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