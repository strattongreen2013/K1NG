import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types.ts';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        
        <div className="absolute top-2 right-2 flex gap-1">
          <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full border border-white/10 flex items-center gap-1 font-bold">
            <i className="fa-solid fa-star text-yellow-500"></i>
            {game.rating}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">
            {game.title}
          </h3>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 mb-4 flex-1">
          {game.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            {game.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <i className="fa-solid fa-play text-xs"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;