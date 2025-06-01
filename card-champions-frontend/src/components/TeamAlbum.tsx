'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/types';
import { teams } from '@/data/teams';
import PlayerCard from './PlayerCard';
import TeamComparison from './TeamComparison';

interface TeamAlbumProps {
  cards: Card[];
  onCardClick?: (card: Card) => void;
}

export default function TeamAlbum({ cards, onCardClick }: TeamAlbumProps) {
  const [selectedTeam, setSelectedTeam] = useState<string>('brazil');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'formation' | 'grid'>('formation');
  const [showStats, setShowStats] = useState(true);
  const [showComparison, setShowComparison] = useState(false);
  
  // Seleções da Copa do Mundo 2026 organizadas por região
  const worldCupTeams = {
    favorites: [
      { id: 'brazil', name: 'Brasil', flag: '🇧🇷', formation: '4-2-3-1' },
      { id: 'argentina', name: 'Argentina', flag: '🇦🇷', formation: '4-3-3' },
      { id: 'france', name: 'França', flag: '🇫🇷', formation: '4-2-3-1' },
      { id: 'england', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', formation: '4-2-3-1' },
      { id: 'spain', name: 'Espanha', flag: '🇪🇸', formation: '4-3-3' },
      { id: 'germany', name: 'Alemanha', flag: '🇩🇪', formation: '4-2-3-1' },
    ],
    americas: [
      { id: 'brazil', name: 'Brasil', flag: '🇧🇷', formation: '4-2-3-1' },
      { id: 'argentina', name: 'Argentina', flag: '🇦🇷', formation: '4-3-3' },
      { id: 'uruguay', name: 'Uruguai', flag: '🇺🇾', formation: '4-4-2' },
      { id: 'colombia', name: 'Colômbia', flag: '🇨🇴', formation: '4-2-3-1' },
      { id: 'chile', name: 'Chile', flag: '🇨🇱', formation: '4-3-3' },
      { id: 'ecuador', name: 'Equador', flag: '🇪🇨', formation: '4-4-2' },
      { id: 'peru', name: 'Peru', flag: '🇵🇪', formation: '4-2-3-1' },
      { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪', formation: '4-2-3-1' },
      { id: 'usa', name: 'Estados Unidos', flag: '🇺🇸', formation: '4-3-3' },
      { id: 'canada', name: 'Canadá', flag: '🇨🇦', formation: '4-2-3-1' },
      { id: 'mexico', name: 'México', flag: '🇲🇽', formation: '4-3-3' },
    ],
    europe: [
      { id: 'france', name: 'França', flag: '🇫🇷', formation: '4-2-3-1' },
      { id: 'england', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', formation: '4-2-3-1' },
      { id: 'spain', name: 'Espanha', flag: '🇪🇸', formation: '4-3-3' },
      { id: 'germany', name: 'Alemanha', flag: '🇩🇪', formation: '4-2-3-1' },
      { id: 'italy', name: 'Itália', flag: '🇮🇹', formation: '4-3-3' },
      { id: 'netherlands', name: 'Holanda', flag: '🇳🇱', formation: '4-3-3' },
      { id: 'portugal', name: 'Portugal', flag: '🇵🇹', formation: '4-3-3' },
      { id: 'belgium', name: 'Bélgica', flag: '🇧🇪', formation: '3-4-3' },
      { id: 'croatia', name: 'Croácia', flag: '🇭🇷', formation: '4-3-3' },
    ],
    africa: [
      { id: 'morocco', name: 'Marrocos', flag: '🇲🇦', formation: '4-2-3-1' },
      { id: 'senegal', name: 'Senegal', flag: '🇸🇳', formation: '4-2-3-1' },
      { id: 'ghana', name: 'Gana', flag: '🇬🇭', formation: '4-2-3-1' },
      { id: 'nigeria', name: 'Nigéria', flag: '🇳🇬', formation: '4-2-3-1' },
    ],
    asia: [
      { id: 'japan', name: 'Japão', flag: '🇯🇵', formation: '4-2-3-1' },
      { id: 'korea', name: 'Coreia do Sul', flag: '🇰🇷', formation: '4-2-3-1' },
      { id: 'saudi_arabia', name: 'Arábia Saudita', flag: '🇸🇦', formation: '4-2-3-1' },
      { id: 'iran', name: 'Irã', flag: '🇮🇷', formation: '4-2-3-1' },
      { id: 'qatar', name: 'Catar', flag: '🇶🇦', formation: '4-2-3-1' },
      { id: 'australia', name: 'Austrália', flag: '🇦🇺', formation: '4-2-3-1' },
    ]
  };
  
  const allTeams = [...worldCupTeams.americas, ...worldCupTeams.europe, ...worldCupTeams.africa, ...worldCupTeams.asia];
  
  // Filtrar cartas da seleção selecionada
  const teamData = teams.find(team => team.id === selectedTeam);
  const userCardsForTeam = cards.filter(card => 
    teamData?.players.some(player => player.id === card.player.id)
  );
  
  // Organizar por posições com layout de formação
  const cardsByPosition = useMemo(() => {
    if (!teamData) return {};
    
    const positions = {
      GK: teamData.players.filter(p => p.position === 'GK'),
      DEF: teamData.players.filter(p => p.position === 'DEF'),
      MID: teamData.players.filter(p => p.position === 'MID'),
      FWD: teamData.players.filter(p => p.position === 'FWD')
    };
    
    // Converter players em cards (com as cartas do usuário se ele tiver)
    const convertToCards = (players: any[]) => {
      return players.map(player => {
        const userCard = userCardsForTeam.find(card => card.player.id === player.id);
        return userCard || {
          id: `placeholder-${player.id}`,
          player,
          serialNumber: 0,
          isUnique: false,
          dateObtained: new Date(),
          isPlaceholder: true
        };
      });
    };
    
    return {
      GK: convertToCards(positions.GK),
      DEF: convertToCards(positions.DEF),
      MID: convertToCards(positions.MID),
      FWD: convertToCards(positions.FWD)
    };
  }, [teamData, userCardsForTeam]);
  
  // Filtrar por posição se selecionado
  const filteredCards = useMemo(() => {
    if (!teamData) return [];
    
    let allPlayerCards = Object.values(cardsByPosition).flat();
    
    if (selectedPosition !== 'all') {
      allPlayerCards = cardsByPosition[selectedPosition as keyof typeof cardsByPosition] || [];
    }
    
    return allPlayerCards;
  }, [cardsByPosition, selectedPosition]);
  
  const selectedTeamData = allTeams.find(team => team.id === selectedTeam);
  
  // Obter formação em layout específico
  const getFormationLayout = (formation: string) => {
    const layouts: { [key: string]: { rows: number[]; names: string[] } } = {
      '4-2-3-1': { rows: [1, 4, 2, 3, 1], names: ['GK', 'DEF', 'MID', 'MID', 'FWD'] },
      '4-3-3': { rows: [1, 4, 3, 3], names: ['GK', 'DEF', 'MID', 'FWD'] },
      '4-4-2': { rows: [1, 4, 4, 2], names: ['GK', 'DEF', 'MID', 'FWD'] },
      '3-4-3': { rows: [1, 3, 4, 3], names: ['GK', 'DEF', 'MID', 'FWD'] },
    };
    
    return layouts[formation] || layouts['4-2-3-1'];
  };
  
  const renderFormationView = () => {
    if (!teamData || !selectedTeamData) return null;
    
    const layout = getFormationLayout(selectedTeamData.formation);
    const positionGroups = [cardsByPosition.GK, cardsByPosition.DEF, cardsByPosition.MID, cardsByPosition.FWD];
    
    return (
      <div className="relative">
        {/* Campo de futebol melhorado */}
        <div className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[800px]">
          {/* Padrão do campo */}
          <div className="absolute inset-0 opacity-15">
            {/* Bordas do campo */}
            <div className="absolute inset-6 border-2 border-white rounded-lg"></div>
            
            {/* Linha do meio */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-white transform -translate-y-0.5"></div>
            
            {/* Círculo central */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Áreas */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-20 border-2 border-white"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-10 border-2 border-white"></div>
            
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-40 h-20 border-2 border-white"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-10 border-2 border-white"></div>
          </div>
          
          {/* Jogadores organizados por formação */}
          <div className="relative z-10 h-full flex flex-col justify-between py-8">
            {/* Atacantes */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
                {cardsByPosition.FWD?.map((card, index) => (
                  <div key={card.id} className="transform hover:scale-110 transition-all duration-300">
                    <div className="relative">
                      <PlayerCard 
                        card={card as Card} 
                        size="medium"
                        onClick={() => !card.isPlaceholder && onCardClick?.(card as Card)}
                        showDetails={false}
                      />
                      {/* Label de posição */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        ATK
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Meio-campo */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap gap-6 justify-center max-w-5xl">
                {cardsByPosition.MID?.map((card, index) => (
                  <div key={card.id} className="transform hover:scale-110 transition-all duration-300">
                    <div className="relative">
                      <PlayerCard 
                        card={card as Card} 
                        size="medium"
                        onClick={() => !card.isPlaceholder && onCardClick?.(card as Card)}
                        showDetails={false}
                      />
                      {/* Label de posição */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        MID
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Defensores */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
                {cardsByPosition.DEF?.map((card, index) => (
                  <div key={card.id} className="transform hover:scale-110 transition-all duration-300">
                    <div className="relative">
                      <PlayerCard 
                        card={card as Card} 
                        size="medium"
                        onClick={() => !card.isPlaceholder && onCardClick?.(card as Card)}
                        showDetails={false}
                      />
                      {/* Label de posição */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        DEF
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Goleiros */}
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-6 justify-center">
                {cardsByPosition.GK?.map((card, index) => (
                  <div key={card.id} className="transform hover:scale-110 transition-all duration-300">
                    <div className="relative">
                      <PlayerCard 
                        card={card as Card} 
                        size="medium"
                        onClick={() => !card.isPlaceholder && onCardClick?.(card as Card)}
                        showDetails={false}
                      />
                      {/* Label de posição */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        GK
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderGridView = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredCards.map((card) => (
            <div key={card.id} className="transform hover:scale-105 transition-all duration-300">
              <PlayerCard 
                card={card as Card} 
                size="medium"
                onClick={() => !card.isPlaceholder && onCardClick?.(card as Card)}
                showDetails={true}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      {/* Header expandido com melhor organização */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🏆 Álbum Copa do Mundo 2026 🏆
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Explore sua coleção organizada por seleções e formações táticas
          </p>
        </div>
        
        {/* Seletor de regiões e países */}
        <div className="space-y-6">
          {/* Seleções populares */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">⭐ Seleções Populares</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[...worldCupTeams.americas.slice(0, 2), ...worldCupTeams.europe.slice(0, 3)].map(team => (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeam(team.id)}
                  className={`p-4 rounded-xl transition-all duration-200 transform hover:scale-105 min-w-[120px] ${
                    selectedTeam === team.id 
                      ? 'bg-white text-blue-600 shadow-lg scale-105' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <div className="text-3xl mb-2">{team.flag}</div>
                  <div className="text-sm font-medium">{team.name}</div>
                  <div className="text-xs opacity-75">{team.formation}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Seletor por região */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(worldCupTeams).map(([region, teams]) => (
              <div key={region} className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-3 text-center capitalize">
                  {region === 'americas' ? '🌎 Américas' : 
                   region === 'europe' ? '🇪🇺 Europa' :
                   region === 'africa' ? '🌍 África' : '🌏 Ásia/Oceania'}
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {teams.slice(0, 6).map(team => (
                    <button
                      key={team.id}
                      onClick={() => setSelectedTeam(team.id)}
                      className={`p-2 rounded-lg transition-all duration-200 text-center ${
                        selectedTeam === team.id 
                          ? 'bg-white text-blue-600 shadow-md' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      <div className="text-lg">{team.flag}</div>
                      <div className="text-xs truncate">{team.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Dropdown completo */}
          <div className="max-w-lg mx-auto">
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full p-4 rounded-xl text-gray-800 font-medium focus:ring-4 focus:ring-white/50 focus:border-transparent text-center"
            >
              <optgroup label="🌎 Américas">
                {worldCupTeams.americas.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.flag} {team.name} - {team.formation}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🇪🇺 Europa">
                {worldCupTeams.europe.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.flag} {team.name} - {team.formation}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌍 África">
                {worldCupTeams.africa.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.flag} {team.name} - {team.formation}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌏 Ásia/Oceania">
                {worldCupTeams.asia.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.flag} {team.name} - {team.formation}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
        
        {/* Info da seleção selecionada expandida */}
        {selectedTeamData && teamData && (
          <div className="mt-8 bg-white/10 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedTeamData.flag} {selectedTeamData.name}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    📋 {selectedTeamData.formation}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    👥 {teamData.players.length} jogadores
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    🃏 {userCardsForTeam.length} coletadas
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    📊 {Math.round((userCardsForTeam.length / teamData.players.length) * 100)}% completo
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setViewMode(viewMode === 'formation' ? 'grid' : 'formation')}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  {viewMode === 'formation' ? '📋 Grid' : '⚽ Formação'}
                </button>
                <button
                  onClick={() => setShowStats(!showStats)}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  📊 Stats
                </button>
                <button
                  onClick={() => setShowComparison(true)}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  🔄 Comparar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Filtros por posição */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: 'all', label: 'Todas as Posições', icon: '👥', color: 'gray' },
            { key: 'GK', label: 'Goleiros', icon: '🥅', color: 'green' },
            { key: 'DEF', label: 'Defensores', icon: '🛡️', color: 'blue' },
            { key: 'MID', label: 'Meio-campo', icon: '⚽', color: 'yellow' },
            { key: 'FWD', label: 'Atacantes', icon: '🎯', color: 'red' },
          ].map(position => (
            <button
              key={position.key}
              onClick={() => setSelectedPosition(position.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedPosition === position.key
                  ? `bg-${position.color}-500 text-white shadow-lg`
                  : `bg-${position.color}-100 text-${position.color}-700 hover:bg-${position.color}-200`
              }`}
            >
              <span className="mr-2">{position.icon}</span>
              {position.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Conteúdo principal */}
      {teamData ? (
        <div className="space-y-8">
          {viewMode === 'formation' ? renderFormationView() : renderGridView()}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-8xl mb-6">⚽</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Seleção em Desenvolvimento
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esta seleção está sendo preparada para a Copa do Mundo 2026.
            <br />
            Em breve você poderá colecionar seus jogadores favoritos!
          </p>
          <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6">
            <p className="text-gray-700">
              <strong>🚀 Novidades em breve:</strong> Novos jogadores, estatísticas detalhadas e muito mais!
            </p>
          </div>
        </div>
      )}
      
      {/* Estatísticas expandidas */}
      {teamData && showStats && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estatísticas gerais */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-center">
              📊 Estatísticas da Seleção {selectedTeamData?.flag}
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">
                  {userCardsForTeam.length}
                </div>
                <div className="text-sm text-blue-500">Cartas Coletadas</div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">
                  {teamData.players.length}
                </div>
                <div className="text-sm text-green-500">Total de Jogadores</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round((userCardsForTeam.length / teamData.players.length) * 100)}%
                </div>
                <div className="text-sm text-purple-500">Completude</div>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-600">
                  {userCardsForTeam.filter(card => card.player.rarity === 'legendary').length}
                </div>
                <div className="text-sm text-yellow-500">Lendárias</div>
              </div>
            </div>
            
            {/* Barra de progresso aprimorada */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progresso da Coleção</span>
                <span>{userCardsForTeam.length}/{teamData.players.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 h-4 rounded-full transition-all duration-1000 relative"
                  style={{ 
                    width: `${(userCardsForTeam.length / teamData.players.length) * 100}%` 
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Breakdown por posições */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-center">
              🎯 Breakdown por Posições
            </h3>
            
            <div className="space-y-4">
              {[
                { pos: 'GK', label: 'Goleiros', icon: '🥅', color: 'green' },
                { pos: 'DEF', label: 'Defensores', icon: '🛡️', color: 'blue' },
                { pos: 'MID', label: 'Meio-campo', icon: '⚽', color: 'yellow' },
                { pos: 'FWD', label: 'Atacantes', icon: '🎯', color: 'red' },
              ].map(position => {
                const total = cardsByPosition[position.pos as keyof typeof cardsByPosition]?.length || 0;
                const collected = userCardsForTeam.filter(card => card.player.position === position.pos).length;
                const percentage = total > 0 ? (collected / total) * 100 : 0;
                
                return (
                  <div key={position.pos} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {position.icon} {position.label}
                      </span>
                      <span className="text-sm text-gray-600">
                        {collected}/{total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${position.color}-500 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      
      {/* Modal de comparação */}
      {showComparison && (
        <TeamComparison 
          cards={cards}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
} 