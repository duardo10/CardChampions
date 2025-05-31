# ⚽ Card Champions - Copa do Mundo 2026

Um jogo de cartas colecionáveis digitais inspirado na emoção da Copa do Mundo de 2026. Colecione cartas de jogadores das seleções oficiais, monte sua escalação dos sonhos e compete com amigos!

## 🎮 Sobre o Jogo

Card Champions é um jogo de cartas colecionáveis onde os usuários podem:

- **Comprar pacotes de cartas** - Invista pequenas quantias (a partir de $5) para receber cartas aleatórias
- **Colecionar jogadores únicos** - Encontre cartas raras e lendárias dos maiores craques do mundo
- **Montar escalações** - Monte sua seleção dos sonhos com os jogadores coletados
- **Acompanhar progresso** - Veja estatísticas detalhadas da sua coleção
- **Competir com amigos** - Compare suas coleções e dispute para ver quem completa primeiro

## 🌟 Funcionalidades

### ✅ Implementadas

- **Sistema de Pacotes**: 4 tipos diferentes com preços e garantias variadas
- **Sistema de Raridade**: Comum, Rara, Épica e Lendária com probabilidades balanceadas
- **Abertura Animada**: Experiência imersiva ao abrir pacotes com animações
- **Coleção Completa**: Visualize todas suas cartas com filtros avançados
- **Estatísticas Detalhadas**: Acompanhe seu progresso de coleção
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Dados Realistas**: Seleções e jogadores baseados na Copa do Mundo 2026

### 🚧 Em Desenvolvimento

- Sistema de trocas entre jogadores
- Modo competitivo e ranking global
- Formação de times e táticas
- Sistema de conquistas e medalhas
- Integração com blockchain para cartas NFT

## 🏗️ Tecnologias Utilizadas

- **Frontend**: Next.js 15 com React 19
- **Styling**: Tailwind CSS 4
- **Linguagem**: TypeScript
- **Animações**: CSS Animations + Transitions
- **Icons**: Emojis nativos para performance

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd card-champions-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globais
├── components/            # Componentes React
│   ├── Navigation.tsx    # Barra de navegação
│   ├── PlayerCard.tsx    # Carta do jogador
│   ├── PackCard.tsx      # Carta do pacote
│   ├── PackOpening.tsx   # Animação de abertura
│   └── Collection.tsx    # Interface da coleção
├── data/                 # Dados estáticos
│   ├── teams.ts         # Seleções e jogadores
│   └── packs.ts         # Pacotes disponíveis
├── lib/                 # Utilitários e lógica
│   └── gameUtils.ts     # Funções do jogo
└── types/               # Definições TypeScript
    └── index.ts         # Tipos principais
```

## 🎲 Sistema de Jogo

### Pacotes Disponíveis

| Pacote | Preço | Cartas | Garantia |
|--------|-------|--------|----------|
| Iniciante | $5 | 3 | - |
| Premium | $10 | 5 | 1 Rara |
| Elite | $20 | 8 | 1 Épica |
| Lendário | $50 | 10 | 1 Lendária |

### Sistema de Raridade

- **Comum (70%)**: Jogadores regulares das seleções
- **Rara (20%)**: Jogadores importantes e titulares
- **Épica (8%)**: Estrelas e jogadores de destaque
- **Lendária (2%)**: Superestrelas e ícones do futebol

### Seleções Disponíveis

- 🇧🇷 Brasil
- 🇦🇷 Argentina  
- 🇫🇷 França
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra
- *Mais seleções em breve...*

## 🎨 Design System

### Cores por Raridade

- **Comum**: Cinza (#9CA3AF)
- **Rara**: Azul (#3B82F6)
- **Épica**: Roxo (#8B5CF6)
- **Lendária**: Dourado (#F59E0B)

### Componentes

- Cards responsivos com hover effects
- Animações suaves e fluidas
- Interface intuitiva e amigável
- Feedback visual claro para ações

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📱 Responsividade

O jogo é totalmente responsivo e otimizado para:

- **Desktop**: Experiência completa com todos os recursos
- **Tablet**: Interface adaptada para touch
- **Mobile**: Navegação otimizada e layout compacto

## 🌐 Roadmap

### Versão 1.1
- [ ] Sistema de autenticação
- [ ] Salvamento na nuvem
- [ ] Mais seleções (Espanha, Alemanha, Itália)

### Versão 1.2
- [ ] Sistema de trocas P2P
- [ ] Chat entre jogadores
- [ ] Torneios e eventos

### Versão 2.0
- [ ] Integração blockchain
- [ ] NFTs exclusivos
- [ ] Marketplace descentralizado

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎯 Contato

- **Projeto**: Card Champions
- **Tema**: Copa do Mundo 2026
- **Status**: Em desenvolvimento ativo

---

**Divirta-se coletando! ⚽✨**
