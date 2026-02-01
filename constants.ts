
import { Game, Category } from './types';

export const GAMES: Game[] = [
  {
    id: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile!',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80',
    url: 'https://play2048.co/',
    rating: 4.8,
    tags: ['puzzle', 'logic', 'math']
  },
  {
    id: 'tetris',
    title: 'Classic Tetris',
    description: 'The world-famous tile-matching puzzle game.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    url: 'https://tetris.com/play-tetris',
    rating: 4.9,
    tags: ['arcade', 'classic', 'puzzle']
  },
  {
    id: 'chess',
    title: 'Grandmaster Chess',
    description: 'Play chess against a computer or a friend.',
    category: 'Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.chess.com/play/online',
    rating: 4.7,
    tags: ['strategy', 'multiplayer', 'board']
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    description: 'Why did the chicken cross the road? Don\'t get hit!',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&w=800&q=80',
    url: 'https://poki.com/en/g/crossy-road',
    rating: 4.5,
    tags: ['action', 'survival', 'endless']
  },
  {
    id: 'doodle-jump',
    title: 'Doodle Jump',
    description: 'Jump higher and higher to reach new heights.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80',
    url: 'https://doodlejump.io/',
    rating: 4.6,
    tags: ['arcade', 'platformer', 'fun']
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'A fast-paced 3D running game with neon visuals.',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1616440802322-b5efb57cc7c1?auto=format&fit=crop&w=800&q=80',
    url: 'https://slope.run/',
    rating: 4.4,
    tags: ['action', 'racing', '3d']
  },
  {
    id: 'cut-the-rope',
    title: 'Cut the Rope',
    description: 'Feed Om Nom candy by cutting the ropes strategically.',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&w=800&q=80',
    url: 'https://poki.com/en/g/cut-the-rope',
    rating: 4.9,
    tags: ['puzzle', 'physics', 'kids']
  },
  {
    id: 'snake',
    title: 'Google Snake',
    description: 'The classic snake game you know and love.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=800&q=80',
    url: 'https://www.google.com/fbx?fbx=snake_arcade',
    rating: 4.8,
    tags: ['classic', 'arcade', 'snake']
  }
];

// Added missing Category import on line 1 to resolve the reference here
export const CATEGORIES: Category[] = ['All', 'Action', 'Puzzle', 'Sports', 'Arcade', 'Adventure', 'Strategy'];
