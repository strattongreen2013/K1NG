
export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  url: string;
  rating: number;
  tags: string[];
}

export type Category = 'All' | 'Action' | 'Puzzle' | 'Sports' | 'Arcade' | 'Adventure' | 'Strategy';
