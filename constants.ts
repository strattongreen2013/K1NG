
import { Game, Category } from './types';

/**
 * List of unblocked games.
 */
export const GAMES: Game[] = [
  {
    id: 'basket-hoop',
    title: 'Basket Hoop',
    description: 'Test your aim and timing in this addictive basketball shooting challenge. Aim for the perfect swish and climb the leaderboard!',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    url: 'https://d11jzht7mj96rr.cloudfront.net/games/2024/construct/311/basket-hoop/index-gg.html',
    rating: 4.5,
    tags: ['sports', 'basketball', 'skill', 'arcade']
  }
];

/**
 * Available game categories for filtering.
 */
export const CATEGORIES: Category[] = ['All', 'Action', 'Puzzle', 'Sports', 'Arcade', 'Adventure', 'Strategy'];
