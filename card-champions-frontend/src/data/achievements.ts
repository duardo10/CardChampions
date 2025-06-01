import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  // Conquistas de Coleta
  {
    id: 'first_card',
    name: 'Primeira Carta',
    description: 'Colete sua primeira carta',
    icon: '🎯',
    progress: 0,
    maxProgress: 1,
    reward: {
      type: 'coins',
      amount: 50
    },
    unlocked: false
  },
  {
    id: 'card_collector_10',
    name: 'Colecionador Iniciante',
    description: 'Colete 10 cartas diferentes',
    icon: '🃏',
    progress: 0,
    maxProgress: 10,
    reward: {
      type: 'pack',
      item: 'basic_pack'
    },
    unlocked: false
  },
  {
    id: 'card_collector_50',
    name: 'Colecionador Avançado',
    description: 'Colete 50 cartas diferentes',
    icon: '🎴',
    progress: 0,
    maxProgress: 50,
    reward: {
      type: 'pack',
      item: 'premium_pack'
    },
    unlocked: false
  },
  {
    id: 'card_collector_100',
    name: 'Mestre Colecionador',
    description: 'Colete 100 cartas diferentes',
    icon: '🏆',
    progress: 0,
    maxProgress: 100,
    reward: {
      type: 'pack',
      item: 'elite_pack'
    },
    unlocked: false
  },
  
  // Conquistas por Raridade
  {
    id: 'first_rare',
    name: 'Primeira Rara',
    description: 'Colete sua primeira carta Rara',
    icon: '⭐',
    progress: 0,
    maxProgress: 1,
    reward: {
      type: 'coins',
      amount: 100
    },
    unlocked: false
  },
  {
    id: 'first_epic',
    name: 'Primeira Épica',
    description: 'Colete sua primeira carta Épica',
    icon: '🌟',
    progress: 0,
    maxProgress: 1,
    reward: {
      type: 'coins',
      amount: 250
    },
    unlocked: false
  },
  {
    id: 'first_legendary',
    name: 'Primeira Lendária',
    description: 'Colete sua primeira carta Lendária',
    icon: '✨',
    progress: 0,
    maxProgress: 1,
    reward: {
      type: 'pack',
      item: 'legends_pack'
    },
    unlocked: false
  },
  {
    id: 'legendary_collector',
    name: 'Colecionador de Lendas',
    description: 'Colete 5 cartas Lendárias',
    icon: '👑',
    progress: 0,
    maxProgress: 5,
    reward: {
      type: 'title',
      item: 'Lenda'
    },
    unlocked: false
  },

  // Conquistas por Seleção
  {
    id: 'brazil_complete',
    name: 'Pentacampeão',
    description: 'Complete a seleção do Brasil',
    icon: '🇧🇷',
    progress: 0,
    maxProgress: 12,
    reward: {
      type: 'card',
      item: 'special_brazil_badge'
    },
    unlocked: false
  },
  {
    id: 'argentina_complete',
    name: 'La Albiceleste',
    description: 'Complete a seleção da Argentina',
    icon: '🇦🇷',
    progress: 0,
    maxProgress: 12,
    reward: {
      type: 'card',
      item: 'special_argentina_badge'
    },
    unlocked: false
  },
  {
    id: 'france_complete',
    name: 'Les Bleus',
    description: 'Complete a seleção da França',
    icon: '🇫🇷',
    progress: 0,
    maxProgress: 11,
    reward: {
      type: 'card',
      item: 'special_france_badge'
    },
    unlocked: false
  },
  {
    id: 'all_teams_5_cards',
    name: 'Explorador Mundial',
    description: 'Colete pelo menos 5 cartas de cada seleção',
    icon: '🌍',
    progress: 0,
    maxProgress: 22, // 22 seleções
    reward: {
      type: 'pack',
      item: 'ultimate_pack'
    },
    unlocked: false
  },

  // Conquistas de Pacotes
  {
    id: 'pack_opener_10',
    name: 'Abertura Iniciante',
    description: 'Abra 10 pacotes',
    icon: '📦',
    progress: 0,
    maxProgress: 10,
    reward: {
      type: 'coins',
      amount: 200
    },
    unlocked: false
  },
  {
    id: 'pack_opener_50',
    name: 'Viciado em Pacotes',
    description: 'Abra 50 pacotes',
    icon: '🎁',
    progress: 0,
    maxProgress: 50,
    reward: {
      type: 'pack',
      item: 'elite_pack'
    },
    unlocked: false
  },
  {
    id: 'premium_pack_opener',
    name: 'Gosto Refinado',
    description: 'Abra 10 pacotes Premium ou superiores',
    icon: '💎',
    progress: 0,
    maxProgress: 10,
    reward: {
      type: 'pack',
      item: 'legends_pack'
    },
    unlocked: false
  },

  // Conquistas por Posição
  {
    id: 'goalkeeper_specialist',
    name: 'Especialista em Goleiros',
    description: 'Colete 10 goleiros diferentes',
    icon: '🥅',
    progress: 0,
    maxProgress: 10,
    reward: {
      type: 'pack',
      item: 'goalkeepers_pack'
    },
    unlocked: false
  },
  {
    id: 'striker_collector',
    name: 'Caçador de Gols',
    description: 'Colete 15 atacantes diferentes',
    icon: '⚽',
    progress: 0,
    maxProgress: 15,
    reward: {
      type: 'coins',
      amount: 500
    },
    unlocked: false
  },

  // Conquistas Especiais
  {
    id: 'daily_login_7',
    name: 'Dedicação Semanal',
    description: 'Faça login por 7 dias consecutivos',
    icon: '📅',
    progress: 0,
    maxProgress: 7,
    reward: {
      type: 'pack',
      item: 'premium_pack'
    },
    unlocked: false
  },
  {
    id: 'daily_login_30',
    name: 'Fã Dedicado',
    description: 'Faça login por 30 dias consecutivos',
    icon: '🔥',
    progress: 0,
    maxProgress: 30,
    reward: {
      type: 'pack',
      item: 'ultimate_pack'
    },
    unlocked: false
  },
  {
    id: 'world_cup_ready',
    name: 'Pronto para a Copa',
    description: 'Complete pelo menos 1 jogador de cada posição em 10 seleções',
    icon: '🏆',
    progress: 0,
    maxProgress: 10,
    reward: {
      type: 'title',
      item: 'Técnico Mundial'
    },
    unlocked: false
  },
  {
    id: 'perfect_team',
    name: 'Time Perfeito',
    description: 'Monte um time com apenas cartas Lendárias',
    icon: '⭐',
    progress: 0,
    maxProgress: 11,
    reward: {
      type: 'card',
      item: 'golden_world_cup_trophy'
    },
    unlocked: false
  }
];

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(achievement => achievement.id === id);
};

export const getUnlockedAchievements = (): Achievement[] => {
  return achievements.filter(achievement => achievement.unlocked);
};

export const getProgressableAchievements = (): Achievement[] => {
  return achievements.filter(achievement => !achievement.unlocked && achievement.progress < achievement.maxProgress);
};

export const getAchievementsByCategory = (category: 'collection' | 'rarity' | 'team' | 'pack' | 'position' | 'special'): Achievement[] => {
  const categoryMap = {
    collection: ['first_card', 'card_collector_10', 'card_collector_50', 'card_collector_100'],
    rarity: ['first_rare', 'first_epic', 'first_legendary', 'legendary_collector'],
    team: ['brazil_complete', 'argentina_complete', 'france_complete', 'all_teams_5_cards'],
    pack: ['pack_opener_10', 'pack_opener_50', 'premium_pack_opener'],
    position: ['goalkeeper_specialist', 'striker_collector'],
    special: ['daily_login_7', 'daily_login_30', 'world_cup_ready', 'perfect_team']
  };
  
  return achievements.filter(achievement => categoryMap[category].includes(achievement.id));
}; 